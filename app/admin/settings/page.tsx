'use client'

import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { LogOut, Save } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function Settings() {
  const router = useRouter()
  const supabase = createClient()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Site Settings</h1>
              <p className="text-sm text-gray-600">Manage website content and configuration</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </Button>
          </div>
        </header>

        <div className="p-6 space-y-6 max-w-4xl">
          {/* General Settings */}
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic website information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <Input defaultValue="KAE" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Email</label>
                <Input type="email" defaultValue="contact@kae.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <Input defaultValue="+91 98765 43210" />
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* Contact Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Update contact details displayed on website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Office Address</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-600"
                  rows={3}
                  defaultValue="123 Industrial Park, Mumbai, Maharashtra 400001"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">WhatsApp Number</label>
                  <Input defaultValue="+91 98765 43210" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business Hours</label>
                  <Input defaultValue="Mon - Fri, 9AM - 6PM" />
                </div>
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>

          {/* SEO Settings */}
          <Card>
            <CardHeader>
              <CardTitle>SEO Settings</CardTitle>
              <CardDescription>Optimize your website for search engines</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-600"
                  rows={2}
                  defaultValue="KAE provides innovative industrial equipment and automation solutions for manufacturing, power systems, and energy sectors."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keywords (comma-separated)</label>
                <Input defaultValue="industrial equipment, servo stabilizer, UPS, solar panels, batteries" />
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
