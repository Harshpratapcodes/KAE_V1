export interface Product {
  id: number | string
  name: string
  description: string
  category: string
  price: string
  image: string
  specs: string[]
}

export interface BlogPost {
  id: number | string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  image: string
}

export interface Project {
  id: number | string
  title: string
  description: string
  industry: string
  client: string
  results: Record<string, string>
  image: string
  details: string
}

export interface Industry {
  id: number | string
  name: string
  description: string
  icon: any
  color: string
  stats: Record<string, string>
  services: string[]
  challenges: string[]
  solution: string
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  industry?: string
  message: string
}

export interface Enquiry {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  industry_id?: string
  message: string
  product_id?: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  created_at: string
}
