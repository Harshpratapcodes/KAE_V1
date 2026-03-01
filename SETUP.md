# 🚀 Setup & Deployment Guide

## Project Setup

This is a Next.js 16 project with Supabase integration. Follow these steps to get it running.

### Prerequisites
- Node.js 18+ installed
- npm or pnpm package manager
- Supabase account (free tier available)
- Vercel account for deployment (optional)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   # or
   pnpm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file in the project root with:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   POSTGRES_URL=your_database_url
   ```

3. **Run development server**:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

   Open http://localhost:3000 in your browser

### Build for Production

```bash
npm run build
npm run start
```

## Deployment to Vercel

### Step 1: Push to GitHub
1. Create a GitHub repository
2. Push your code:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project" and select your repository
3. Vercel will auto-detect it's a Next.js project
4. Add environment variables in project settings:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `POSTGRES_URL`
5. Click "Deploy"

### Step 3: Configure Supabase
1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and API keys from Settings → API
3. Add these to your Vercel environment variables
4. Enable Row Level Security (RLS) on your tables

## Database Setup

### Initialize Database
The database schema should be created automatically through migrations. If needed:

1. Go to Supabase project dashboard
2. Navigate to SQL Editor
3. Create the necessary tables (see schema in scripts/init-database.sql)

### Required Tables
- `auth.users` - Supabase built-in auth users
- `products` - Product catalog
- `enquiries` - Customer inquiries/leads
- `blog_posts` - Blog articles
- `projects` - Case studies
- `site_settings` - Website configuration

## Admin Setup

### Create First Admin Account
1. Visit your site: `https://yourdomain.com/auth/admin-signup`
2. Fill in the registration form:
   - Email: admin@kae.com
   - Password: Choose a strong password
3. Verify email
4. Login at `https://yourdomain.com/auth/admin-login`

### Admin Credentials
- **Login URL**: `/auth/admin-login`
- **Dashboard**: `/admin`
- **Manage Products**: `/admin/products`
- **Manage Enquiries**: `/admin/enquiries`
- **Manage Blog**: `/admin/blog`

## Configuration

### Update Branding
1. Edit company name in:
   - `app/layout.tsx` - Metadata
   - `components/navigation.tsx` - Logo text
   - `/admin/settings` - Admin panel

2. Update colors in:
   - `app/globals.css` - Design tokens
   - Components that reference teal (#16A39C), green (#5CA043), purple (#5B4B8A)

### Add Contact Information
1. Update in `/admin/settings` or edit:
   - `components/footer.tsx` - Footer contact info
   - `app/contact/page.tsx` - Contact page details

## Email Configuration (Optional)

To enable email notifications:
1. Add email service (SendGrid, Mailgun, etc.)
2. Update `/app/api/contact/route.ts` with email provider
3. Test contact form submission

## Monitoring & Analytics

### Supabase Dashboard
- Monitor database usage and performance
- View authentication logs
- Check API analytics

### Vercel Analytics
- Monitor deployment status
- View performance metrics
- Check server logs

## Troubleshooting

### Admin Login Not Working
- ✅ Check email is verified
- ✅ Ensure password is correct (case-sensitive)
- ✅ Clear browser cookies and try again

### Database Connection Errors
- ✅ Verify `NEXT_PUBLIC_SUPABASE_URL` is correct
- ✅ Check `NEXT_PUBLIC_SUPABASE_ANON_KEY` is valid
- ✅ Ensure Supabase project is active

### Build Failures
- ✅ Run `npm install` to ensure dependencies are installed
- ✅ Check Node.js version is 18+
- ✅ Look at error messages in build logs

## Security Checklist

- ✅ Environment variables are secure (use Vercel Secrets)
- ✅ Database has RLS policies enabled
- ✅ Admin routes are protected with authentication
- ✅ Passwords are hashed with Supabase
- ✅ CORS configured if needed
- ✅ Rate limiting on contact form API

## Performance Optimization

### Next.js Optimizations
- Image optimization with next/image
- Code splitting with dynamic imports
- Caching with revalidatePath()
- Server-side rendering where appropriate

### Database Optimization
- Indexes on frequently queried columns
- Pagination on large lists
- Query optimization in admin panel

### Deployment Optimization
- Minification and tree-shaking
- Edge caching on Vercel
- CDN for static assets

## Maintenance

### Regular Tasks
1. **Weekly**: Review new enquiries
2. **Monthly**: Check analytics and reports
3. **Monthly**: Backup database
4. **Quarterly**: Update dependencies
5. **Quarterly**: Review security logs

### Backup Strategy
- Enable Supabase automated backups
- Export database monthly
- Keep version control on GitHub

## Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Project**: KAE Industrial Solutions  
**Version**: 1.0  
**Last Updated**: January 2024
