# 🚀 Traffiq Deployment Guide

## 📋 **Production-Ready SST Deployment**

This guide covers deploying your Traffiq authentication system to production using SST Console with automatic database migrations.

## 🔧 **Architecture Overview**

- **SST Console**: Handles deployments via git push
- **Pre-Deploy Hooks**: Automatically run database migrations
- **Stage-Aware Scripts**: Support dev, staging, and production
- **Security**: Prisma Studio disabled in production

## 🎯 **Deployment Workflow**

### **Automatic Deployment (SST Console Autodeploy)**

The project is configured with automatic deployments based on git branches:

- **`main` branch** → `dev` stage (development environment)
- **`prod` branch** → `production` stage (production environment)
- **Pull Requests** → `pr-{number}` stages (temporary preview environments)
- **Other branches** → No deployment

### **1. Local Development**

```bash
# Start development (auto-runs database preparation)
npm run start

# View database (safe in development)
npm run db:studio
```

### **2. Development Deployment (Automatic)**

```bash
# Push to main branch for automatic dev deployment
git push origin main
```

SST Console automatically:

- Runs `prisma db push` for schema changes
- Deploys to `dev` stage
- Uses development environment variables

### **3. Production Deployment (Automatic)**

```bash
# Push to prod branch for automatic production deployment
git push origin prod
```

SST Console automatically:

- Runs `prisma migrate deploy` for safe migrations
- Deploys to `production` stage
- Uses production environment variables
- Ensures production security settings

### **4. Pull Request Previews (Automatic)**

When you create a pull request:

- SST Console creates a temporary `pr-{number}` stage
- Uses development-like settings for testing
- Automatically removes the stage when PR is closed/merged

## 📊 **Available Commands**

### **Development Commands**

```bash
npm run start                    # Start SST dev mode
npm run db:push                  # Push schema changes (dev stage)
npm run db:studio               # Open Prisma Studio (dev stage)
npm run db:migrate              # Run migrations (dev stage)
```

### **Stage-Specific Commands**

```bash
# Staging
npm run db:push:staging         # Push to staging database
npm run db:studio:staging       # Studio for staging
npm run db:migrate:staging      # Migrate staging database

# Production
npm run db:push:prod           # Push to production database
npm run db:studio:prod         # ❌ Blocked for security
npm run db:migrate:prod        # Production-safe migrations
```

### **Deployment Commands**

```bash
npm run deploy:dev             # Deploy to development
npm run deploy:prod            # Deploy to production
```

## 🔒 **Security Features**

### **Production Safeguards**

- ✅ **Prisma Studio disabled** in production
- ✅ **Production-safe migrations** (`migrate deploy` vs `migrate dev`)
- ✅ **Environment separation** (dev/staging/production secrets)
- ✅ **Automatic pre-deploy hooks** ensure database consistency

### **Stage Isolation**

```bash
# Each stage has isolated secrets
dev:        DATABASE_URL, BETTER_AUTH_SECRET
staging:    DATABASE_URL, BETTER_AUTH_SECRET
production: DATABASE_URL, BETTER_AUTH_SECRET
```

## 🛠️ **Migration Strategy**

### **Development**

- Uses `prisma db push` for rapid schema iteration
- Allows destructive changes for development

### **Production**

- Uses `prisma migrate deploy` for safe, versioned migrations
- No destructive changes without explicit migrations
- Automatic rollback on failure

## 📝 **Environment Variables**

### **Automatic Injection (SST Console)**

```typescript
// Automatically available in your app
process.env.DATABASE_URL; // Database connection
process.env.BETTER_AUTH_SECRET; // Authentication secret
process.env.SST_STAGE; // Current deployment stage
process.env.PRISMA_STUDIO_ENABLED; // 'true' in dev, 'false' in prod
```

### **Manual Override (Local Development)**

```bash
# Override stage for local testing
SST_STAGE=staging npm run db:push
SST_STAGE=production npm run db:migrate
```

## 🚨 **Troubleshooting**

### **"No secrets found" Error**

```bash
# Check if secrets are set
npx sst secret list --stage production

# Set missing secrets
npx sst secret set DatabaseUrl "your-url" --stage production
npx sst secret set BetterAuthSecret "your-secret" --stage production
```

### **Migration Conflicts**

```bash
# Check migration status
cd packages/database
DATABASE_URL="your-url" npx prisma migrate status

# Reset if needed (DANGER: data loss)
DATABASE_URL="your-url" npx prisma migrate reset
```

### **SST Console Issues**

- Ensure your repository is connected to SST Console
- Check that secrets are set for the correct stage
- Verify pre-deploy hooks are running in deployment logs

## ✅ **Deployment Checklist**

### **Before First Production Deploy:**

- [ ] Production database created and accessible
- [ ] Production secrets set in SST
- [ ] Repository connected to SST Console
- [ ] Domain/SSL configured (if needed)

### **For Each Deploy:**

- [ ] Database migrations tested in staging
- [ ] Authentication flows tested
- [ ] Environment variables verified
- [ ] Security settings confirmed

## 🎯 **Next Steps**

1. **Set up monitoring** for database and application health
2. **Configure alerts** for failed deployments or database issues
3. **Set up backup strategy** for production database
4. **Implement CI/CD testing** before production deploys

Your authentication system is now production-ready with automatic deployments! 🚀
