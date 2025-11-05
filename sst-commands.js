// Helper script for SST pre-deploy database operations
const { execSync } = require('child_process');
const path = require('path');

async function runDatabaseOperations(stage) {
  console.log(`Running pre-deploy database operations for stage: ${stage}`);

  const databasePath = path.join(process.cwd(), 'packages/database');
  const buildEnv = {
    ...process.env,
    NODE_OPTIONS: [process.env.NODE_OPTIONS, '--max-old-space-size=4096']
      .filter(Boolean)
      .join(' '),
  };

  try {
    // Build the database package (runs prisma generate in prebuild)
    console.log('Building database package...');
    execSync('npm run build', {
      cwd: databasePath,
      stdio: 'inherit',
      env: buildEnv,
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
