// Helper script for SST pre-deploy database operations
const { execSync } = require('child_process');
const path = require('path');

async function runDatabaseOperations(stage) {
  console.log(`Running pre-deploy database operations for stage: ${stage}`);

  const rootPath = process.cwd();
  const databasePath = path.join(rootPath, 'packages/database');

  try {
    // Ensure package-lock.json is in sync with package.json
    execSync('npm install', {
      cwd: rootPath,
      stdio: 'inherit',
    });

    // Always generate Prisma client first (required for build)
    console.log('Generating Prisma client...');
    execSync('npx prisma generate', {
      cwd: databasePath,
      stdio: 'inherit',
    });

    // Build the database package
    console.log('Building database package...');
    execSync('npm run build', {
      cwd: databasePath,
      stdio: 'inherit',
    });

    if (stage === 'production') {
      // Production: Use migrate deploy (safe for production)
      console.log('Running production database migrations...');
      execSync('npx prisma migrate deploy', {
        cwd: databasePath,
        stdio: 'inherit',
      });
    } else {
      // Development/Staging: Use db push (allows schema changes)
      console.log('Pushing database schema changes...');
      execSync('npx prisma db push', {
        cwd: databasePath,
        stdio: 'inherit',
      });
    }

    console.log('Database operations completed successfully');
  } catch (error) {
    console.error('Database operation failed:', error);
    process.exit(1);
  }
}

module.exports = { runDatabaseOperations };
