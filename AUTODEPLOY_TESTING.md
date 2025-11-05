# 🧪 SST Console Autodeploy Testing Guide

## 📋 **Overview**

This guide provides step-by-step testing procedures to verify your SST Console autodeploy configuration is working correctly for all deployment scenarios.

## 🎯 **Testing Scenarios**

### **1. Development Deployment (`main` branch → `dev` stage)**
### **2. Production Deployment (`prod` branch → `production` stage)**
### **3. Pull Request Previews (PR → `pr-{number}` stage)**
### **4. Branch Filtering (other branches → no deployment)**

## 🔧 **Prerequisites**

Before testing, ensure:
- [ ] SST Console is connected to your repository
- [ ] Environment variables are configured for `dev` and `production` stages
- [ ] AWS profiles (`traffiq-dev`, `traffiq-prod`) are configured
- [ ] You have push access to `main` and `prod` branches

## 🧪 **Test 1: Development Deployment**

### **Objective**: Verify `main` branch deploys to `dev` stage

### **Steps**:

1. **Create a test change**:
   ```bash
   # Create a feature branch
   git checkout -b test-autodeploy-dev
   
   # Make a small change (e.g., update a comment)
   echo "// Test autodeploy dev - $(date)" >> packages/dashboard/app/page.tsx
   
   # Commit the change
   git add .
   git commit -m "test: verify dev autodeploy"
   ```

2. **Push to main branch**:
   ```bash
   # Switch to main and merge
   git checkout main
   git merge test-autodeploy-dev
   git push origin main
   ```

3. **Monitor SST Console**:
   - Go to SST Console dashboard
   - Look for new deployment to `dev` stage
   - Check deployment logs for:
     - Pre-deploy hook execution
     - `prisma db push` command
     - `prisma generate` command
     - Successful deployment

### **Expected Results**:
- ✅ Deployment triggered automatically
- ✅ Stage is `dev`
- ✅ Pre-deploy hooks run successfully
- ✅ Environment variables are injected correctly
- ✅ Application deploys without errors

### **Verification**:
```bash
# Check deployed application
curl https://your-dev-domain.com/dashboard

# Verify database connection (if accessible)
# Check SST Console logs for any errors
```

## 🧪 **Test 2: Production Deployment**

### **Objective**: Verify `prod` branch deploys to `production` stage

### **Steps**:

1. **Ensure main is stable**:
   ```bash
   # Make sure main branch is tested and stable
   git checkout main
   git pull origin main
   ```

2. **Update prod branch**:
   ```bash
   # Switch to prod branch (create if doesn't exist)
   git checkout prod || git checkout -b prod
   
   # Merge latest changes from main
   git merge main
   
   # Push to trigger production deployment
   git push origin prod
   ```

3. **Monitor SST Console**:
   - Look for new deployment to `production` stage
   - Check deployment logs for:
     - Pre-deploy hook execution
     - `prisma migrate deploy` command (not `db push`)
     - `prisma generate` command
     - Production security settings applied

### **Expected Results**:
- ✅ Deployment triggered automatically
- ✅ Stage is `production`
- ✅ Uses `prisma migrate deploy` (safe for production)
- ✅ Production environment variables used
- ✅ `PRISMA_STUDIO_ENABLED=false`
- ✅ Uses `traffiq-prod` AWS profile

### **Verification**:
```bash
# Check deployed application
curl https://your-production-domain.com/dashboard

# Verify production security settings
# Ensure Prisma Studio is disabled
# Check database migrations were applied correctly
```

## 🧪 **Test 3: Pull Request Previews**

### **Objective**: Verify PRs create temporary `pr-{number}` stages

### **Steps**:

1. **Create a feature branch**:
   ```bash
   # Create and switch to feature branch
   git checkout -b feature/test-pr-preview
   
   # Make a visible change
   echo "// PR Preview Test - $(date)" >> packages/landing/app/page.tsx
   
   # Commit the change
   git add .
   git commit -m "feat: test PR preview deployment"
   
   # Push feature branch
   git push origin feature/test-pr-preview
   ```

2. **Create Pull Request**:
   - Go to GitHub/GitLab
   - Create PR from `feature/test-pr-preview` to `main`
   - Add description: "Testing PR preview deployment"

3. **Monitor SST Console**:
   - Look for new deployment to `pr-{number}` stage
   - Check that stage name matches PR number
   - Verify development-like settings are used

### **Expected Results**:
- ✅ Deployment triggered on PR creation
- ✅ Stage is `pr-{number}` (matches PR number)
- ✅ Uses development environment variables
- ✅ Uses `traffiq-dev` AWS profile
- ✅ `PRISMA_STUDIO_ENABLED=true`

### **Verification**:
```bash
# Check PR preview URL (usually shown in SST Console)
curl https://pr-123-your-domain.com/

# Verify the change is visible
# Test that it doesn't affect main deployment
```

4. **Test PR Cleanup**:
   ```bash
   # Close/merge the PR
   # Check that pr-{number} stage is automatically removed
   ```

### **Expected Cleanup**:
- ✅ Stage is automatically removed when PR is closed
- ✅ AWS resources are cleaned up
- ✅ No lingering costs or resources

## 🧪 **Test 4: Branch Filtering**

### **Objective**: Verify other branches don't trigger deployments

### **Steps**:

1. **Create a random branch**:
   ```bash
   # Create branch that shouldn't deploy
   git checkout -b random-feature-branch
   
   # Make a change
   echo "// Should not deploy - $(date)" >> packages/dashboard/app/page.tsx
   
   # Commit and push
   git add .
   git commit -m "test: branch that should not deploy"
   git push origin random-feature-branch
   ```

2. **Monitor SST Console**:
   - Wait 5-10 minutes
   - Verify no new deployments are triggered
   - Check that only `main`, `prod`, and PR branches deploy

### **Expected Results**:
- ✅ No deployment triggered
- ✅ No new stages created
- ✅ SST Console shows no activity for this branch

## 🔍 **Troubleshooting Tests**

### **Test Failed: Development Deployment**

**Common Issues**:
```bash
# Check environment variables
# Verify DATABASE_URL is accessible from deployment environment
# Ensure BETTER_AUTH_SECRET is set correctly

# Check AWS profile
aws sts get-caller-identity --profile traffiq-dev

# Check database connectivity
# Verify pre-deploy hooks in deployment logs
```

### **Test Failed: Production Deployment**

**Common Issues**:
```bash
# Check production environment variables
# Verify production database is accessible
# Ensure migrations are compatible

# Check AWS profile
aws sts get-caller-identity --profile traffiq-prod

# Review migration status
cd packages/database
DATABASE_URL="prod-url" npx prisma migrate status
```

### **Test Failed: PR Previews**

**Common Issues**:
```bash
# Check if PR webhooks are configured
# Verify repository permissions in SST Console
# Ensure development resources are available

# Check for resource conflicts
# Review SST Console webhook logs
```

### **Test Failed: Branch Filtering**

**Common Issues**:
```bash
# Check autodeploy configuration in sst.config.ts
# Verify branch name matching logic
# Review SST Console webhook configuration
```

## 📊 **Test Results Template**

Use this template to document your test results:

```markdown
## Test Results - [Date]

### ✅ Development Deployment (main → dev)
- [ ] Deployment triggered: ✅/❌
- [ ] Correct stage: ✅/❌  
- [ ] Pre-deploy hooks: ✅/❌
- [ ] Environment variables: ✅/❌
- [ ] Application accessible: ✅/❌

### ✅ Production Deployment (prod → production)  
- [ ] Deployment triggered: ✅/❌
- [ ] Correct stage: ✅/❌
- [ ] Safe migrations: ✅/❌
- [ ] Production settings: ✅/❌
- [ ] Application accessible: ✅/❌

### ✅ Pull Request Previews (PR → pr-{number})
- [ ] Deployment triggered: ✅/❌
- [ ] Correct stage name: ✅/❌
- [ ] Development settings: ✅/❌
- [ ] Preview accessible: ✅/❌
- [ ] Auto-cleanup: ✅/❌

### ✅ Branch Filtering (other branches → none)
- [ ] No deployment triggered: ✅/❌
- [ ] No resources created: ✅/❌

### Issues Found:
- [List any issues and their resolutions]

### Notes:
- [Additional observations or recommendations]
```

## 🎯 **Performance Testing**

### **Deployment Speed**
- Measure time from git push to deployment completion
- Compare development vs production deployment times
- Monitor resource provisioning speed

### **Resource Usage**
- Check AWS costs for each stage
- Monitor database connection usage
- Verify resource cleanup for PR stages

### **Reliability Testing**
- Test multiple rapid deployments
- Verify rollback capabilities
- Test deployment during high load

## ✅ **Final Verification Checklist**

After all tests pass:

- [ ] All four deployment scenarios work correctly
- [ ] Environment variables are properly isolated
- [ ] Database migrations work safely in production
- [ ] PR previews create and cleanup properly
- [ ] Branch filtering prevents unwanted deployments
- [ ] AWS profiles are used correctly
- [ ] Security settings are enforced in production
- [ ] Monitoring and logging work as expected

## 🚀 **Next Steps**

Once testing is complete:

1. **Document any issues** found and their resolutions
2. **Share results** with your team
3. **Set up monitoring** for ongoing deployment health
4. **Create alerts** for deployment failures
5. **Establish** deployment best practices for your team

Your SST Console autodeploy is now fully tested and ready for production use! 🎉
