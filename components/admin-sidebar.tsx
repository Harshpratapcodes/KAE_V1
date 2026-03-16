'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import {
  LayoutDashboard,
  Package,
  Mail,
  FileText,
  FolderOpen,
  Users,
  Settings,
  Image,
  BarChart3,
  Home,
  Menu,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

const menuItems = [
  {
    label: 'Dashboard',
    href: '/admin',
    icon: LayoutDashboard,
  },
  {
    label: 'Categories',
    href: '/admin/categories',
    icon: FolderOpen,
  },
  {
    label: 'Products',
    href: '/admin/products',
    icon: Package,
  },
  {
    label: 'Enquiries',
    href: '/admin/enquiries',
    icon: Mail,
  },
  {
    label: 'Blog',
    href: '/admin/blog',
    icon: FileText,
  },
  {
    label: 'Projects',
    href: '/admin/projects',
    icon: Users,
  },
  {
    label: 'Media Library',
    href: '/admin/media',
    icon: Image,
  },
  {
    label: 'Reports',
    href: '/admin/reports',
    icon: BarChart3,
  },
  {
    label: 'Site Settings',
    href: '/admin/settings',
    icon: Settings,
  },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(true)

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-0 left-0 z-50">
        <Button
          size="icon"
          variant="ghost"
          onClick={() => setOpen(!open)}
          className="mt-4 ml-4"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar */}
      <aside className={cn(
        'fixed lg:static inset-y-0 left-0 z-40 w-64 bg-gradient-to-b from-gray-900 to-gray-800 transform transition-transform duration-300 lg:translate-x-0',
        !open && '-translate-x-full'
      )}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center gap-3 px-6 py-6 border-b border-gray-700">
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">KAE</span>
            </div>
            <div>
              <h2 className="text-white font-bold">Admin Panel</h2>
              <p className="text-xs text-gray-400">Management System</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-teal-600 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  )}
                  onClick={() => setOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Quick Links */}
          <div className="px-4 py-4 border-t border-gray-700">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
            >
              <Home className="w-5 h-5" />
              <span>View Website</span>
            </Link>
          </div>

          {/* Footer */}
          <div className="px-4 py-4 border-t border-gray-700">
            <p className="text-xs text-gray-500 text-center">KAE Admin v1.0</p>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  )
}
