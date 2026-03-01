'use client'

import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function ProjectsManagement() {
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
              <h1 className="text-2xl font-bold text-gray-900">Projects</h1>
              <p className="text-sm text-gray-600">Manage case studies and projects</p>
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

        <div className="p-6 space-y-6">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add New Project
          </Button>

          <Card>
            <CardHeader>
              <CardTitle>Project Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center py-12">
                Project management interface coming soon. Create and manage your case studies here.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
