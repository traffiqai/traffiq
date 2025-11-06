const ROOT_ACCOUNT_ID = '445433762579';
const HOSTED_ZONE_ID = 'Z02407552AR5N3KQFKA1W';

// Create a separate provider for cross-account Route53 operations
const route53Provider =
  $app.stage === 'production'
    ? new aws.Provider('Route53Provider', {
        region: 'us-east-1',
        assumeRole: {
          roleArn: `arn:aws:iam::${ROOT_ACCOUNT_ID}:role/TraffiqDNSAssumeRole`,
        },
      })
    : undefined;

// Create SSL certificate and DNS setup for production
let cert: aws.acm.Certificate | undefined;
let certValidationWaiter: aws.acm.CertificateValidation | undefined;

if ($app.stage === 'production' && route53Provider) {
  // 1. Create SSL certificate with www subdomain (replace existing one)
  cert = new aws.acm.Certificate(
    'DomainCert',
    {
      domainName: 'gettraffiq.com',
      subjectAlternativeNames: ['www.gettraffiq.com'],
      validationMethod: 'DNS',
    },
    {
      replaceOnChanges: ['domainName', 'subjectAlternativeNames'],
    }
  );

  // 2. Create DNS validation records for both domains
  const validationRecords = cert.domainValidationOptions.apply((options) =>
    options.map(
      (option, index) =>
        new aws.route53.Record(
          `CertValidationRecord${index}`,
          {
            zoneId: HOSTED_ZONE_ID,
            name: option.resourceRecordName,
            type: option.resourceRecordType,
            records: [option.resourceRecordValue],
            ttl: 60,
          },
          { provider: route53Provider }
        )
    )
  );

  // 3. Wait for certificate validation to complete
  certValidationWaiter = new aws.acm.CertificateValidation('CertValidation', {
    certificateArn: cert.arn,
    validationRecordFqdns: validationRecords.apply((records) =>
      records.map((r) => r.fqdn)
    ),
  });
}

// Function to create DNS records pointing to CloudFront distribution
export function createDnsRecords(router: any) {
  if ($app.stage === 'production' && route53Provider && certValidationWaiter) {
    // Create DNS A record for apex domain
    const domainRecord = new aws.route53.Record(
      'DomainRecord',
      {
        zoneId: HOSTED_ZONE_ID,
        name: 'gettraffiq.com',
        type: 'A',
        aliases: [
          {
            name: router.url.apply((url: string) =>
              url.replace('https://', '')
            ),
            zoneId: 'Z2FDTNDATAQYW2', // CloudFront hosted zone ID for us-east-1
            evaluateTargetHealth: false,
          },
        ],
      },
      {
        provider: route53Provider,
        dependsOn: [certValidationWaiter],
      }
    );

    // Create DNS A record for www subdomain
    const wwwDomainRecord = new aws.route53.Record(
      'WwwDomainRecord',
      {
        zoneId: HOSTED_ZONE_ID,
        name: 'www.gettraffiq.com',
        type: 'A',
        aliases: [
          {
            name: router.url.apply((url: string) =>
              url.replace('https://', '')
            ),
            zoneId: 'Z2FDTNDATAQYW2', // CloudFront hosted zone ID for us-east-1
            evaluateTargetHealth: false,
          },
        ],
      },
      {
        provider: route53Provider,
        dependsOn: [certValidationWaiter],
      }
    );

    return { domainRecord, wwwDomainRecord };
  }
  return undefined;
}

// Export certificate information for reference
export const certificateArn =
  $app.stage === 'production' && cert ? cert.arn : undefined;
export const domainName =
  $app.stage === 'production' ? 'gettraffiq.com' : undefined;
export const wwwDomainName =
  $app.stage === 'production' ? 'www.gettraffiq.com' : undefined;
