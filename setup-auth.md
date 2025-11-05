# Traffiq Authentication Setup Guide

## 🎉 Implementation Complete!

Your SST monorepo now has Prisma ORM and Better Auth fully integrated with a shared database package.

## 📁 What Was Created

### Shared Database Package (`packages/database/`)

- ✅ Prisma schema with Better Auth tables
- ✅ Prisma client with Accelerate extension
- ✅ Better Auth configuration
- ✅ TypeScript types exported

### Dashboard Package Updates (`packages/dashboard/`)

- ✅ Better Auth React client
- ✅ API routes for authentication
- ✅ Sign-in and Sign-up pages
- ✅ Protected dashboard page
- ✅ Updated home page with navigation

### Infrastructure Updates

- ✅ SST secrets for DATABASE_URL and BETTER_AUTH_SECRET
- ✅ Environment variables configured
- ✅ Workspace dependencies linked

## 🚀 Next Steps

### 1. Set Up Your Database

First, you'll need a PostgreSQL database. You can use:

- [Neon](https://neon.tech) (recommended for development)
- [Supabase](https://supabase.com)
- [Railway](https://railway.app)
- AWS RDS
- Local PostgreSQL

### 2. Configure Secrets

**IMPORTANT: You must set up your database and secrets before running Prisma commands!**

```bash
# Generate a Better Auth secret
npx @better-auth/cli@latest secret

# Set secrets for development
npx sst secret set DatabaseUrl "postgresql://username:password@host:port/database" --stage dev
npx sst secret set BetterAuthSecret "your-generated-secret" --stage dev

# Set secrets for production
npx sst secret set DatabaseUrl "postgresql://username:password@host:port/database" --stage production
npx sst secret set BetterAuthSecret "your-production-secret" --stage production

# Verify secrets are set
npx sst secret list --stage dev
```

### 3. Initialize Database

```bash
# Push your schema to the database (creates tables)
npm run db:push

# Optional: Open Prisma Studio to view data
npm run db:studio
```

**Note:** The database commands automatically fetch secrets from SST, so you don't need `sst dev` running for basic database operations.

### 4. Start Development

```bash
# From project root
npm run start
```

This will start SST dev mode with your dashboard available at the configured URL.

## ⚡ Automatic Database Operations

The setup includes **automatic pre-deploy hooks** that handle database operations:

### **Development**

- **`npm run start`** → Automatically runs database preparation and schema push
- **Database changes** → Use `prisma db push` for rapid iteration

### **Production (SST Console)**

- **Git push to main** → Automatically runs `prisma migrate deploy`
- **Safe migrations** → Production uses versioned migrations only
- **No manual steps** → Everything handled by SST pre-deploy hooks

### **Manual Commands (if needed)**

```bash
# Stage-specific database operations
npm run db:push:staging         # Push schema to staging
npm run db:migrate:prod         # Run production migrations
npm run db:studio              # Open Prisma Studio (dev only)
npm run db:studio:prod         # ❌ Blocked for security
```

## 🔧 Available Commands

### Root Package (Recommended)

```bash
# Start development (automatically builds database package)
npm run start

# Deploy to development (automatically builds database package)
npm run deploy:dev

# Deploy to production (automatically builds database package)
npm run deploy:prod

# Generate Prisma client
npm run db:generate

# Push schema changes to database
npm run db:push

# Open Prisma Studio
npm run db:studio
```

### Database Package (Direct)

```bash
cd packages/database

# Generate Prisma client (no secrets needed)
npm run db:generate

# Build TypeScript
npm run build

# SST-aware commands (use SST secrets automatically)
npm run db:push     # Uses sst shell internally
npm run db:studio   # Uses sst shell internally
npm run db:migrate  # Uses sst shell internally

# Direct Prisma commands (require local .env file)
npm run db:push:direct
npm run db:studio:direct
npm run db:migrate:direct

# Clean generated files
npm run clean
```

### Dashboard Package

```bash
cd packages/dashboard

# Start Next.js dev server (for local testing)
npm run dev

# Build for production
npm run build
```

## 📊 Database Schema

Your database includes these Better Auth tables:

- `users` - User accounts
- `accounts` - OAuth provider accounts
- `sessions` - User sessions
- `verification_tokens` - Email verification

## 🔐 Authentication Flow

1. **Sign Up**: `/sign-up` - Create new account
2. **Sign In**: `/sign-in` - Login existing user
3. **Dashboard**: `/dashboard` - Protected route
4. **API**: `/api/auth/*` - Better Auth endpoints

## 🏗️ Architecture Benefits

- **Shared Database**: Single Prisma schema across all packages
- **Type Safety**: Consistent types for User, Session, etc.
- **SST Integration**: Secrets and environment variables managed by SST
- **Scalable**: Easy to add more packages that need database access

## 🛠️ Customization

### Adding More Auth Providers

Edit `packages/database/src/auth.ts`:

```typescript
export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
```

### Adding Custom Database Models

Edit `packages/database/prisma/schema.prisma` and add your models:

```prisma
model Post {
  id        String   @id @default(cuid())
  title     String
  content   String?
  authorId  String
  author    User     @relation(fields: [authorId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

Then run `npx prisma db push` to update the database.

## 🚨 Important Notes

- Always run `npx prisma generate` after schema changes
- Use `npx prisma db push` for development, `npx prisma migrate` for production
- Keep your DATABASE_URL and BETTER_AUTH_SECRET secure
- The shared database package can be used in your functions package too

## 🔧 Troubleshooting

### "Environment variable not found: DATABASE_URL"

This happens when running Prisma commands directly without SST context. **Solutions:**

1. **Use root package commands (recommended):**

   ```bash
   # From project root
   npm run db:push
   npm run db:studio
   ```

2. **Use SST shell:**

   ```bash
   # From project root
   sst shell packages/database "npx prisma db push"
   ```

3. **Use SST-aware database commands:**

   ```bash
   # From packages/database directory
   npm run db:push    # Uses SST shell internally
   npm run db:studio  # Uses SST shell internally
   ```

4. **Create local .env (development only):**
   ```bash
   # In packages/database/.env
   DATABASE_URL="postgresql://user:pass@localhost:5432/db"
   ```

### Secrets Not Available

Make sure you've set your secrets:

```bash
npx sst secret list --stage dev
npx sst secret set DatabaseUrl "your-url" --stage dev
npx sst secret set BetterAuthSecret "your-secret" --stage dev
```

If you see "No secrets found", you need to set them first before running any database commands.

## 🎯 Ready to Go!

Your authentication system is now fully set up and ready for development. The implementation follows SST best practices and provides a solid foundation for your traffic analytics platform.
