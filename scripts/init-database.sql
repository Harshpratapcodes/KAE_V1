-- Initialize database schema for KAE Industrial B2B Website

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Categories/Industries table
CREATE TABLE IF NOT EXISTS industries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  icon_url VARCHAR(500),
  slug VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Products table
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  detailed_description TEXT,
  industry_id UUID REFERENCES industries(id) ON DELETE SET NULL,
  specifications JSONB,
  image_url VARCHAR(500),
  gallery_images JSONB,
  price_range VARCHAR(100),
  status VARCHAR(50) DEFAULT 'active',
  slug VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Projects/Case Studies table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  industry_id UUID REFERENCES industries(id) ON DELETE SET NULL,
  featured_image VARCHAR(500),
  gallery_images JSONB,
  results TEXT,
  client_name VARCHAR(255),
  published_at TIMESTAMP,
  slug VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Blog Posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  category VARCHAR(100),
  author VARCHAR(255),
  published_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Enquiries/Leads table
CREATE TABLE IF NOT EXISTS enquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(255),
  industry_id UUID REFERENCES industries(id) ON DELETE SET NULL,
  message TEXT NOT NULL,
  product_id UUID REFERENCES products(id) ON DELETE SET NULL,
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Admin Users table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  role VARCHAR(50) DEFAULT 'editor',
  active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_products_industry ON products(industry_id);
CREATE INDEX idx_products_slug ON products(slug);
CREATE INDEX idx_projects_industry ON projects(industry_id);
CREATE INDEX idx_projects_slug ON projects(slug);
CREATE INDEX idx_blog_slug ON blog_posts(slug);
CREATE INDEX idx_enquiries_industry ON enquiries(industry_id);
CREATE INDEX idx_enquiries_product ON enquiries(product_id);
CREATE INDEX idx_enquiries_status ON enquiries(status);
CREATE INDEX idx_enquiries_created ON enquiries(created_at);

-- Insert sample data for industries
INSERT INTO industries (name, description, slug) VALUES
('Manufacturing', 'Industrial manufacturing and production equipment', 'manufacturing'),
('Power Systems', 'Power generation and distribution systems', 'power-systems'),
('Automation', 'Automated control and monitoring systems', 'automation'),
('Energy', 'Renewable and conventional energy solutions', 'energy');

-- Insert sample products
INSERT INTO products (name, description, industry_id, slug, status) 
SELECT 'Advanced Control Systems', 'Professional control and monitoring solutions for industrial processes', id, 'advanced-control-systems', 'active'
FROM industries WHERE slug = 'automation'
LIMIT 1;

INSERT INTO products (name, description, industry_id, slug, status)
SELECT 'Power Distribution Units', 'Industrial-grade power distribution and management equipment', id, 'power-distribution-units', 'active'
FROM industries WHERE slug = 'power-systems'
LIMIT 1;

-- Insert sample admin user (password: admin123, hashed)
INSERT INTO admin_users (email, password_hash, name, role) 
VALUES ('admin@kae.com', '$2a$10$GhIEJULmxhCcKtZBTVvf8ead0lZ5z.D8.J8n8n7.Q7L8K7L8K7L8K', 'Admin User', 'admin')
ON CONFLICT (email) DO NOTHING;
