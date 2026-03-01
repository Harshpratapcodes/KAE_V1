# KAE Admin Panel Guide

## How to Access the Admin Panel

### Step 1: Create an Admin Account

1. Navigate to the **Admin Sign Up** page:
   ```
   https://yourdomain.com/auth/admin-signup
   ```

2. Fill in the registration form:
   - **Email Address**: Your admin email (e.g., admin@kae.com)
   - **Password**: A strong password (minimum 6 characters)
   - **Confirm Password**: Re-enter your password

3. Click **"Create Account"** button

4. Check your email for a confirmation link and verify your account

### Step 2: Login to Admin Panel

1. Navigate to the **Admin Login** page:
   ```
   https://yourdomain.com/auth/admin-login
   ```

2. Enter your credentials:
   - **Email Address**: Your admin email
   - **Password**: Your password

3. Click **"Sign In"** button

4. You'll be redirected to the admin dashboard

## Admin Panel Features

### 📊 Dashboard (`/admin`)
- **KPI Cards**: View key metrics
  - New leads this month
  - Total leads all-time
  - Conversion rate
  - Active products

- **Charts & Analytics**:
  - Lead trends over 30 days
  - Leads by product category
  - Recent enquiries table

### 📦 Products Management (`/admin/products`)
- **View all products** in your catalog
- **Add new products** with details:
  - Product name
  - Category
  - Price
  - Specifications
  - Images

- **Edit products**: Update product information
- **Delete products**: Remove products from catalog
- **Search & filter**: Find products easily

### 📧 Enquiries Management (`/admin/enquiries`)
- **View all customer inquiries** with details:
  - Customer name, email, phone
  - Company & industry
  - Product interest
  - Full message

- **Track status**: Mark leads as:
  - New (just received)
  - Contacted (follow-up started)
  - Qualified (ready to convert)

- **Quick actions**:
  - Send emails directly from dashboard
  - Call customers
  - Add internal notes
  - Filter by status

### 📝 Blog Management (`/admin/blog`)
- **Create articles**: Write blog posts
  - Title
  - Category
  - Rich content editor
  - SEO meta description

- **Edit & publish**: Update existing articles
- **Manage status**: Draft or publish articles
- **View analytics**: See article views and engagement

### 🎯 Projects Management (`/admin/projects`)
- Create case studies and success stories
- Showcase client projects
- Add project details and images
- Track project impact metrics

### 🖼️ Media Library (`/admin/media`)
- Upload product images
- Manage media files
- Organize files by category
- Preview and delete media

### 📊 Reports (`/admin/reports`)
- **Generate reports** for:
  - Leads by month
  - Leads by product
  - Conversion analytics

- **Export data**: Download as CSV
- **Performance tracking**: Monitor key metrics

### ⚙️ Site Settings (`/admin/settings`)
- **General Settings**:
  - Company name
  - Contact email
  - Phone number

- **Contact Information**:
  - Office address
  - WhatsApp number
  - Business hours

- **SEO Settings**:
  - Meta descriptions
  - Keywords
  - Page titles

## Admin Sidebar Navigation

The admin sidebar provides quick access to all sections:

```
ADMIN PANEL
├── Dashboard          (overview & KPIs)
├── Products          (manage product catalog)
├── Enquiries         (track customer leads)
├── Blog              (create articles)
├── Projects          (manage case studies)
├── Media Library     (manage images)
├── Reports           (analytics & exports)
└── Site Settings     (website config)
```

## Quick Actions

### Respond to a New Lead
1. Go to **Enquiries** → Click **View** on the enquiry
2. Review customer details and message
3. Click **Send Email** to reply
4. Update status to **"Contacted"**

### Add a New Product
1. Go to **Products** → Click **"Add Product"**
2. Fill in product details
3. Upload product images
4. Set pricing and specifications
5. Click **"Save"**

### Write a Blog Article
1. Go to **Blog** → Click **"Write New Article"**
2. Enter title and category
3. Write article content
4. Add meta description for SEO
5. Click **"Save Article"** and **"Publish"**

## Important Notes

### Security
- ✅ Your admin account is secured with Supabase authentication
- ✅ Passwords are encrypted and stored securely
- ✅ Sessions expire after inactivity
- ✅ Only authorized admins can access the admin panel

### Best Practices
1. Use a **strong password** (mix of uppercase, lowercase, numbers, symbols)
2. **Don't share** your admin credentials with others
3. **Logout** when finished using the admin panel
4. **Backup important data** regularly
5. **Review leads** regularly and follow up promptly

## Troubleshooting

### "Incorrect email or password"
- Check that you've typed your credentials correctly
- Ensure Caps Lock is OFF
- If you forgot your password, create a new admin account

### "Access Denied" error
- You must be logged in to access admin pages
- Login at: https://yourdomain.com/auth/admin-login

### Forms not submitting
- Ensure all required fields are filled
- Check your internet connection
- Try refreshing the page

## Support

For issues or questions:
1. Check this guide again
2. Contact your website administrator
3. Review the error message carefully

## URLs Reference

| Page | URL |
|------|-----|
| Admin Dashboard | /admin |
| Products Management | /admin/products |
| Enquiries | /admin/enquiries |
| Blog Management | /admin/blog |
| Projects Management | /admin/projects |
| Media Library | /admin/media |
| Reports | /admin/reports |
| Site Settings | /admin/settings |
| Admin Login | /auth/admin-login |
| Admin Sign Up | /auth/admin-signup |

---

**Version**: 1.0  
**Last Updated**: January 2024  
**System**: KAE Admin Panel
