# 🔐 Admin Panel Access - Quick Start

## How to Access the Admin Panel

### First Time Setup (Create Admin Account)

1. Go to: **`/auth/admin-signup`** on your website
2. Fill in:
   - Email address (e.g., admin@kae.com)
   - Password (minimum 6 characters)
   - Confirm password
3. Click **"Create Account"**
4. Verify your email (check your inbox)
5. You're ready to login!

### Login (Every Time)

1. Go to: **`/auth/admin-login`** on your website
2. Enter your email and password
3. Click **"Sign In"**
4. You'll see the admin dashboard

## Admin Panel Routes

| Feature | URL Path | Description |
|---------|----------|-------------|
| **Login** | `/auth/admin-login` | Admin login page |
| **Sign Up** | `/auth/admin-signup` | Create admin account |
| **Dashboard** | `/admin` | Overview & KPIs |
| **Products** | `/admin/products` | Manage product catalog |
| **Enquiries** | `/admin/enquiries` | Track customer leads |
| **Blog** | `/admin/blog` | Create articles |
| **Projects** | `/admin/projects` | Manage case studies |
| **Media** | `/admin/media` | Upload images |
| **Reports** | `/admin/reports` | Analytics & exports |
| **Settings** | `/admin/settings` | Website configuration |

## What Can You Do?

### 📊 Dashboard
- View key metrics and KPIs
- See recent enquiries
- Track lead trends

### 📦 Products
- Add/edit/delete products
- Manage pricing and details
- Search and filter

### 📧 Enquiries
- View all customer inquiries
- Reply to leads via email
- Track lead status (New/Contacted/Qualified)
- Take internal notes

### 📝 Blog
- Write articles
- Manage categories
- Publish/draft articles
- Track views

### 🎯 Projects
- Create case studies
- Showcase client work
- Add metrics and images

### 🖼️ Media
- Upload product images
- Organize media files
- Preview and delete

### 📊 Reports
- Export leads as CSV
- View analytics
- Download product data

### ⚙️ Settings
- Update company info
- Manage contact details
- Configure SEO settings

## Example Workflow

### Step 1: Login
```
Visit: /auth/admin-login
Email: admin@kae.com
Password: ••••••••
Click: Sign In
```

### Step 2: Check Dashboard
- See new enquiries
- Check lead trends
- View KPIs

### Step 3: Manage Leads
```
Go to: /admin/enquiries
View all customer inquiries
Reply via email or call
Update status to "Contacted"
```

### Step 4: Add Products
```
Go to: /admin/products
Click: Add Product
Fill: Name, category, price
Click: Save
```

### Step 5: Write Blog
```
Go to: /admin/blog
Click: Write New Article
Enter: Title & content
Click: Publish
```

## 🔒 Security Notes

✅ **Protected**: Admin routes require authentication  
✅ **Encrypted**: Passwords are securely hashed  
✅ **Secure Sessions**: Session cookies with httpOnly flag  
✅ **Database Level**: Row-level security enabled  

**Important**: 
- Don't share your login credentials
- Logout when done
- Use a strong password

## Need Help?

1. **Can't login?** → Check your email/password spelling
2. **Page not loading?** → Try refreshing the browser
3. **Form not submitting?** → Check all fields are filled
4. **Need admin access?** → Go to `/auth/admin-signup` to create an account

Read the full guide: **ADMIN_GUIDE.md**

---

**Next Steps**:
1. Visit `/auth/admin-signup` to create your admin account
2. Login at `/auth/admin-login`
3. Explore the dashboard
4. Start managing your business!
