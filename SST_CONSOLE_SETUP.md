# 🎛️ SST Console Autodeploy Setup Guide

## 📋 **Overview**

This guide explains how to configure SST Console for automatic deployments with your Traffiq monorepo. The configuration supports branch-based deployments with proper environment isolation.

## 🌳 **Branch-to-Stage Mapping**

| Branch/Event   | Stage         | Environment      | Auto-Deploy    |
| -------------- | ------------- | ---------------- | -------------- |
| `main`         | `dev`         | Development      | ✅             |
| `prod`         | `production`  | Production       | ✅             |
| Pull Requests  | `pr-{number}` | Development-like | ✅ (temporary) |
| Other branches | -             | -                | ❌             |

## 🔧 **SST Console Configuration**

### **1. Connect Repository**

1. Go to [SST Console](https://console.sst.dev)
2. Connect your GitHub/GitLab repository
3. Select the `traffiq` repository
4. Ensure SST Console has access to your repository

### **2. Environment Variables Setup**

Configure environment variables for each stage in SST Console:

#### **Development Stage (`dev`)**

```bash
# Required Environment Variables
DATABASE_URL=postgresql://user:password@dev-db-host:5432/traffiq_dev
BETTER_AUTH_SECRET=your-dev-secret-key-min-32-chars
NODE_ENV=development
PRISMA_STUDIO_ENABLED=true
```

#### **Production Stage (`production`)**

```bash
# Required Environment Variables
DATABASE_URL=postgresql://user:password@prod-db-host:5432/traffiq_prod
BETTER_AUTH_SECRET=your-production-secret-key-min-32-chars
NODE_ENV=production
PRISMA_STUDIO_ENABLED=false
```

#### **Pull Request Stages (`pr-*`)**

Pull request stages inherit development-like settings:

```bash
# Shared development database for PR previews
DATABASE_URL=postgresql://user:password@dev-db-host:5432/traffiq_dev
BETTER_AUTH_SECRET=your-dev-secret-key-min-32-chars
NODE_ENV=development
PRISMA_STUDIO_ENABLED=true
```

### **3. AWS Profile Configuration**

Ensure your AWS profiles are configured correctly:

#### **Development Profile (`traffiq-dev`)**

- Used for `dev` stage and PR previews
- Should have development AWS account access
- Configure in `~/.aws/credentials`:

```ini
[traffiq-dev]
aws_access_key_id = your-dev-access-key
aws_secret_access_key = your-dev-secret-key
region = us-east-1
```

#### **Production Profile (`traffiq-prod`)**

- Used for `production` stage only
- Should have production AWS account access
- Configure in `~/.aws/credentials`:

```ini
[traffiq-prod]
aws_access_key_id = your-prod-access-key
aws_secret_access_key = your-prod-secret-key
region = us-east-1
```

## 🚀 **Deployment Process**

### **Development Deployments**

1. **Make changes** in a feature branch
2. **Create Pull Request** → Automatic `pr-{number}` deployment
3. **Test changes** in PR preview environment
4. **Merge to main** → Automatic `dev` stage deployment

### **Production Deployments**

1. **Test thoroughly** in `dev` stage
2. **Create production PR** from `main` to `prod` branch
3. **Review and merge** → Automatic `production` deployment
4. **Monitor deployment** in SST Console

### **Database Migration Flow**

#### **Development (`dev` stage and PR previews)**

```bash
# Automatic pre-deploy hook runs:
cd packages/database && npx prisma db push
cd packages/database && npx prisma generate
```

#### **Production (`production` stage)**

```bash
# Automatic pre-deploy hook runs:
cd packages/database && npx prisma migrate deploy
cd packages/database && npx prisma generate
```

## 🔒 **Security Considerations**

### **Environment Isolation**

- **Development**: Uses `traffiq-dev` AWS profile and development database
- **Production**: Uses `traffiq-prod` AWS profile and production database
- **PR Previews**: Share development resources for cost efficiency

### **Secret Management**

- Store secrets in SST Console environment variables
- Use different secrets for each environment
- Rotate secrets regularly, especially for production

### **Access Control**

- Limit production AWS profile permissions
- Restrict SST Console access to authorized team members
- Monitor deployment logs for security issues

## 📊 **Monitoring and Debugging**

### **SST Console Dashboard**

Monitor deployments in SST Console:

- View deployment logs and status
- Check environment variable configuration
- Monitor resource usage and costs
- Set up alerts for failed deployments

### **Deployment Logs**

Check logs for:

- Pre-deploy hook execution (database migrations)
- Environment variable injection
- AWS resource provisioning
- Application startup and health checks

### **Common Issues**

#### **Database Connection Errors**

```bash
# Check environment variables in SST Console
# Verify database connectivity from deployment environment
# Ensure DATABASE_URL format is correct
```

#### **Migration Failures**

```bash
# Check migration files in packages/database/prisma/migrations/
# Verify database schema compatibility
# Review pre-deploy hook logs in SST Console
```

#### **AWS Permission Issues**

```bash
# Verify AWS profile configuration
# Check IAM permissions for deployment resources
# Ensure correct profile is used for each stage
```

## ✅ **Setup Checklist**

### **Initial Setup**

- [ ] Repository connected to SST Console
- [ ] AWS profiles configured (`traffiq-dev`, `traffiq-prod`)
- [ ] Development database created and accessible
- [ ] Production database created and accessible

### **Environment Configuration**

- [ ] Development environment variables set in SST Console
- [ ] Production environment variables set in SST Console
- [ ] Secrets properly configured and tested
- [ ] Database URLs verified and accessible

### **Branch Setup**

- [ ] `main` branch exists and is default
- [ ] `prod` branch created from `main`
- [ ] Branch protection rules configured (optional)
- [ ] Team access and permissions configured

### **Testing**

- [ ] Test deployment to `dev` stage (push to `main`)
- [ ] Test PR preview deployment (create PR)
- [ ] Test production deployment (push to `prod`)
- [ ] Verify database migrations work correctly
- [ ] Confirm environment isolation

## 🎯 **Best Practices**

### **Development Workflow**

1. Create feature branches from `main`
2. Use PR previews for testing changes
3. Merge to `main` for development deployment
4. Only merge to `prod` for production releases

### **Database Management**

1. Test migrations in development first
2. Use `prisma migrate dev` locally for schema changes
3. Commit migration files to version control
4. Let autodeploy handle `migrate deploy` in production

### **Environment Management**

1. Keep development and production environments isolated
2. Use similar but separate databases for each environment
3. Regularly update and rotate secrets
4. Monitor resource usage and costs

Your SST Console autodeploy is now configured for seamless, secure deployments! 🚀
