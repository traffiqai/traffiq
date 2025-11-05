# 🔧 Environment Variables Setup Guide

## 📋 **Overview**

Traffiq uses environment variables for configuration instead of SST secrets. This approach is simpler and more flexible for different deployment scenarios. The project is configured with SST Console autodeploy for automatic deployments based on git branches.

## 🏗️ **Environment Variable Structure**

### **Required Variables**

```bash
DATABASE_URL="postgresql://username:password@host:port/database"
BETTER_AUTH_SECRET="your-32-character-secret-key"
```

### **Optional Variables**

```bash
SST_STAGE="dev"  # Override the deployment stage
```

## 📁 **File Structure**

```
/
├── .env                    # Local development (gitignored)
├── .env.example           # Template for team members
├── .env.development       # Development environment values
└── sst.config.ts          # Uses process.env variables
```

## 🚀 **Setup Instructions**

### **1. Local Development**

```bash
# Copy the example file
cp .env.example .env

# Edit .env with your values
DATABASE_URL="your-database-url"
BETTER_AUTH_SECRET="your-secret-key"
```

### **2. Generate Better Auth Secret**

```bash
# Generate a secure secret
npx @better-auth/cli@latest secret

# Copy the output to your .env file
```

### **3. Database Setup**

```bash
# The .env file is automatically loaded by scripts
npm run db:push    # Uses DATABASE_URL from .env
npm run db:studio  # Uses DATABASE_URL from .env
```

## 🌍 **Environment-Specific Configuration**

### **Development**

```bash
# .env.development
DATABASE_URL="postgresql://localhost:5432/traffiq_dev"
BETTER_AUTH_SECRET="dev-secret-32-characters-long"
```

### **Staging**

```bash
# Set via SST environment variables or CI/CD
export DATABASE_URL="postgresql://staging-host:5432/traffiq_staging"
export BETTER_AUTH_SECRET="staging-secret-32-chars"
export SST_STAGE="staging"
```

### **Production**

```bash
# Set via SST environment variables or deployment platform
export DATABASE_URL="postgresql://prod-host:5432/traffiq_prod"
export BETTER_AUTH_SECRET="production-secret-32-chars"
export SST_STAGE="production"
```

## 🔄 **How It Works**

### **Local Development**

1. Scripts automatically load `.env` file
2. Environment variables are available to Prisma and Better Auth
3. No SST secrets needed for local development

### **SST Deployments**

1. Set environment variables in your deployment platform
2. SST automatically passes them to your functions and apps
3. Pre-deploy hooks use the same environment variables

### **Script Behavior**

```bash
# Scripts check for environment variables in this order:
1. Existing environment variables (SST_STAGE, DATABASE_URL, etc.)
2. .env file (if exists)
3. Error if not found
```

## 📊 **Available Commands**

### **Basic Commands**

```bash
npm run db:push              # Uses .env or environment variables
npm run db:studio           # Uses .env or environment variables
npm run db:migrate          # Uses .env or environment variables
```

### **Stage-Specific Commands**

```bash
# Override stage for specific operations
SST_STAGE=staging npm run db:push
SST_STAGE=production npm run db:migrate

# Or use the shorthand commands
npm run db:push:staging     # Sets SST_STAGE=staging
npm run db:push:prod       # Sets SST_STAGE=production
```

## 🔒 **Security Best Practices**

### **Local Development**

- ✅ Use `.env` file (automatically gitignored)
- ✅ Never commit actual secrets to git
- ✅ Use `.env.example` for team onboarding

### **Production**

- ✅ Set environment variables in deployment platform
- ✅ Use different secrets for each environment
- ✅ Rotate secrets regularly

### **Team Collaboration**

- ✅ Share `.env.example` with safe placeholder values
- ✅ Document required environment variables
- ✅ Use different database URLs for each developer

## 🚨 **Troubleshooting**

### **"DATABASE_URL not found" Error**

```bash
# Check if .env file exists
ls -la .env

# Check if variables are set
echo $DATABASE_URL

# Verify .env file format (no spaces around =)
cat .env
```

### **Environment Variables Not Loading**

```bash
# Make sure .env file has correct format
DATABASE_URL="value"  # ✅ Correct
DATABASE_URL = "value"  # ❌ Wrong (spaces)

# Check for hidden characters
cat -A .env
```

### **Different Behavior in Different Environments**

```bash
# Check which stage is being used
echo $SST_STAGE

# Override stage temporarily
SST_STAGE=dev npm run db:push
```

## 📝 **Migration from SST Secrets**

If you were previously using SST secrets:

### **1. Export Existing Secrets**

```bash
# Get your current secret values
npx sst secret list --stage dev

# Copy the values to your .env file
```

### **2. Update Your Workflow**

```bash
# Old way (SST secrets)
npx sst secret set DatabaseUrl "..." --stage dev

# New way (environment variables)
echo 'DATABASE_URL="..."' >> .env
```

### **3. Clean Up**

```bash
# Remove old secret references (optional)
npx sst secret remove DatabaseUrl --stage dev
npx sst secret remove BetterAuthSecret --stage dev
```

## 🎛️ **SST Console Environment Configuration**

For automatic deployments, configure environment variables in SST Console:

### **Development Stage (`dev`)**

- Set in SST Console for automatic `main` branch deployments
- Uses development database and relaxed security settings

### **Production Stage (`production`)**

- Set in SST Console for automatic `prod` branch deployments
- Uses production database and strict security settings

### **Pull Request Stages (`pr-*`)**

- Automatically inherit development-like settings
- Use shared development resources for cost efficiency

📖 **See [SST_CONSOLE_SETUP.md](./SST_CONSOLE_SETUP.md) for detailed SST Console configuration instructions.**

## ✅ **Verification Checklist**

### **Local Development**

- [ ] `.env` file created with correct values
- [ ] `DATABASE_URL` connects to your database
- [ ] `BETTER_AUTH_SECRET` is 32+ characters
- [ ] `npm run db:push` works without errors
- [ ] `npm run db:studio` opens successfully

### **SST Console Setup**

- [ ] Repository connected to SST Console
- [ ] Development environment variables configured
- [ ] Production environment variables configured
- [ ] AWS profiles configured correctly
- [ ] Autodeploy configuration tested

Your environment is now ready for development and automatic deployment! 🎉
