# KAE Industrial Solutions Website

A modern, professional B2B website for KAE, an industrial equipment and automation solutions company. Built with Next.js 16, React, TypeScript, and Tailwind CSS.

## Features

### Public Website
- **Home Page** - Hero section with company overview, features showcase, and key statistics
- **Products Page** - Browse 8+ industrial products with filtering by category and search
- **Industries Page** - Detailed information about 4 key industries served (Manufacturing, Power Systems, Energy, Infrastructure)
- **Projects Page** - Success stories and case studies with measurable results
- **Blog** - Industry insights and technical articles with categorization
- **Contact Page** - Professional contact form with inquiry submission
- **Product Details** - Individual product pages with specifications and benefits
- **Blog Articles** - Detailed article views with related content
- **Project Details** - Comprehensive project case study pages

### Admin Panel (Protected)
- **Admin Dashboard** - KPI metrics, lead trends, recent enquiries
- **Products Management** - Create, edit, delete products with search/filter
- **Enquiries Management** - Track customer leads with status tracking and direct email/call actions
- **Blog Management** - Write, edit, publish blog articles with SEO metadata
- **Projects Management** - Manage case studies and success stories
- **Media Library** - Upload and manage product images
- **Reports** - Analytics and CSV exports
- **Site Settings** - Configure company info, contact details, and SEO settings
- **Admin Authentication** - Secure login/signup with Supabase Auth

### Design & Branding
- Color scheme based on KAE logo (Teal #16A39C, Green #5CA043, Purple #5B4B8A)
- Responsive mobile-first design
- Professional typography and spacing
- Smooth animations and transitions
- Consistent component styling

### Technical Features
- Server-side rendering with Next.js App Router
- Type-safe development with TypeScript
- Tailwind CSS with custom design tokens
- Contact form API endpoint (`/api/contact`)
- SEO optimized metadata and Open Graph tags
- Accessible navigation and semantic HTML

## Admin Panel Access

### Quick Start
1. **Create Admin Account**: Visit `/auth/admin-signup` to create your admin account
2. **Login**: Go to `/auth/admin-login` with your credentials
3. **Dashboard**: Access the main dashboard at `/admin`

### Admin Routes
- `/auth/admin-signup` - Create admin account
- `/auth/admin-login` - Admin login page
- `/admin` - Dashboard with KPIs and analytics
- `/admin/products` - Product management
- `/admin/enquiries` - Lead and enquiry tracking
- `/admin/blog` - Blog article management
- `/admin/projects` - Project/case study management
- `/admin/media` - Media library and image uploads
- `/admin/reports` - Analytics and exports
- `/admin/settings` - Site configuration

**See ADMIN_ACCESS.md and ADMIN_GUIDE.md for detailed instructions**

## Project Structure

```
app/
  layout.tsx                      # Root layout with metadata
  page.tsx                        # Home page
  globals.css                     # Design tokens and global styles
  products/
    page.tsx                      # Products listing
    [id]/page.tsx                 # Product detail page
  industries/page.tsx             # Industries showcase
  blog/
    page.tsx                      # Blog listing
    [id]/page.tsx                 # Blog article detail
  projects/
    page.tsx                      # Projects/case studies
    [id]/page.tsx                 # Project detail page
  contact/page.tsx                # Contact page
  auth/
    admin-login/page.tsx          # Admin login
    admin-signup/page.tsx         # Admin signup
  admin/
    page.tsx                      # Admin dashboard
    products/page.tsx             # Product management
    enquiries/page.tsx            # Enquiry management
    blog/page.tsx                 # Blog management
    projects/page.tsx             # Project management
    media/page.tsx                # Media library
    reports/page.tsx              # Reports & analytics
    settings/page.tsx             # Site settings
  privacy/page.tsx        # Privacy policy
  terms/page.tsx          # Terms of service
  api/
    contact/route.ts      # Contact form API handler

components/
  navigation.tsx          # Top navigation bar
  hero.tsx                # Hero section
  features.tsx            # Features showcase
  products.tsx            # Product grid
  industries.tsx          # Industries section
  cta.tsx                 # Call-to-action section
  footer.tsx              # Footer with links
  contact-form.tsx        # Contact form component

lib/
  types.ts                # TypeScript type definitions
  utils.ts                # Utility functions
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

1. Clone or download the project
2. Install dependencies:
```bash
pnpm install
```

3. Create `.env.local` (optional, for future integrations):
```
# Add environment variables here when needed
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Colors
Update the design tokens in `app/globals.css` to customize the color scheme:
- `--primary`: Teal (#16A39C)
- `--secondary`: Green (#5CA043)
- `--accent`: Purple (#5B4B8A)

### Content
- Products: Edit `/components/products.tsx` and `/app/products/page.tsx`
- Industries: Edit `/components/industries.tsx` and `/app/industries/page.tsx`
- Blog posts: Update `/app/blog/page.tsx`
- Projects: Update `/app/projects/page.tsx`

### Contact Form
The contact form at `/api/contact` can be integrated with:
- Email service (SendGrid, Mailgun, etc.)
- Supabase for database storage
- WhatsApp API for notifications
- Slack webhooks for alerts

## Database Integration (Future)

The website is prepared for Supabase integration with planned schema for:
- Products with specifications
- Industries and categories
- Blog posts and articles
- Projects and case studies
- Contact enquiries and leads
- Admin users for CMS

## Deployment

Deploy to Vercel with a single click:
```bash
vercel deploy
```

Or connect your GitHub repository for automatic deployments.

## Technologies Used

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: React functional components
- **Icons**: Lucide React
- **Images**: Next.js Image optimization
- **Fonts**: Geist (Google Fonts)
- **HTTP**: Built-in Next.js API routes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

All rights reserved © 2024 KAE Industrial Solutions

## Support

For questions or support, contact:
- Email: info@kae.com
- Phone: +1 (234) 567-890
- WhatsApp: [Link in footer]
