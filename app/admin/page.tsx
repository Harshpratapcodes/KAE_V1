'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { LogOut, ArrowUpRight, Users, Mail, TrendingUp } from 'lucide-react'

// Sample data for charts
const leadTrendsData = [
  { date: 'Jan 1', leads: 4 },
  { date: 'Jan 8', leads: 6 },
  { date: 'Jan 15', leads: 8 },
  { date: 'Jan 22', leads: 5 },
  { date: 'Jan 29', leads: 12 },
  { date: 'Feb 5', leads: 9 },
  { date: 'Feb 12', leads: 15 },
]

const recentEnquiries = [
  { id: 1, name: 'Rajesh Kumar', email: 'rajesh@hospital.com', product: 'Servo Stabilizer 50KVA', status: 'New', date: '2 hours ago' },
  { id: 2, name: 'Priya Sharma', email: 'priya@manufacturing.com', product: 'UPS 10KVA', status: 'Contacted', date: '5 hours ago' },
  { id: 3, name: 'Amit Patel', email: 'amit@datacenter.com', product: 'Solar Panel 5KW', status: 'Qualified', date: '1 day ago' },
  { id: 4, name: 'Sneha Desai', email: 'sneha@hospital.com', product: 'Battery Backup System', status: 'New', date: '2 days ago' },
]

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        setUser(user)
      }
      setLoading(false)
    }
    getUser()
  }, [supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm text-gray-600">Welcome back, {user?.email}</p>
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
          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">New Leads (This Month)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-teal-600">24</div>
                <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Leads</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">156</div>
                <p className="text-xs text-gray-600 mt-2">All time leads</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Conversion Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-green-600">14.1%</div>
                <p className="text-xs text-gray-600 mt-2">Leads to customer</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Active Products</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">12</div>
                <p className="text-xs text-gray-600 mt-2">In catalog</p>
              </CardContent>
            </Card>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lead Trends */}
            <Card>
              <CardHeader>
                <CardTitle>Lead Trends (30 Days)</CardTitle>
                <CardDescription>Number of new enquiries received</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={leadTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip />
                    <Line type="monotone" dataKey="leads" stroke="#16a39c" strokeWidth={2} dot={{ fill: '#16a39c' }} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Leads by Product */}
            <Card>
              <CardHeader>
                <CardTitle>Leads by Product</CardTitle>
                <CardDescription>Top performing products</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={[
                    { name: 'Servo Stabilizer', leads: 45 },
                    { name: 'UPS', leads: 38 },
                    { name: 'Solar Panel', leads: 28 },
                    { name: 'Battery', leads: 22 },
                    { name: 'Panel', leads: 18 },
                  ]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" stroke="#999" angle={-45} textAnchor="end" height={80} />
                    <YAxis stroke="#999" />
                    <Tooltip />
                    <Bar dataKey="leads" fill="#16a39c" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Recent Enquiries */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Enquiries</CardTitle>
              <CardDescription>Latest customer inquiries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Email</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Product</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentEnquiries.map((enquiry) => (
                      <tr key={enquiry.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-sm font-medium text-gray-900">{enquiry.name}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{enquiry.email}</td>
                        <td className="py-3 px-4 text-sm text-gray-600">{enquiry.product}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            enquiry.status === 'New' ? 'bg-blue-100 text-blue-800' :
                            enquiry.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {enquiry.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-gray-600">{enquiry.date}</td>
                        <td className="py-3 px-4">
                          <Button size="sm" variant="outline">View</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
