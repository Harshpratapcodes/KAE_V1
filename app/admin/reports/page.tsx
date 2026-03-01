'use client'

import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, LogOut } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function Reports() {
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
              <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
              <p className="text-sm text-gray-600">Analytics and performance reports</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2 h-auto p-4">
              <Download className="w-4 h-4" />
              <div className="text-left">
                <div className="font-medium">Export Leads</div>
                <div className="text-xs opacity-90">Download CSV format</div>
              </div>
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white flex items-center gap-2 h-auto p-4">
              <Download className="w-4 h-4" />
              <div className="text-left">
                <div className="font-medium">Export Products</div>
                <div className="text-xs opacity-90">Download product catalog</div>
              </div>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Report Generation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-center py-12">
                Advanced reporting interface coming soon. Generate detailed reports on leads, products, and sales here.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
