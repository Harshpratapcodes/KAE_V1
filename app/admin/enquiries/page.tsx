'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AdminSidebar from '@/components/admin-sidebar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Eye, LogOut, MessageSquare, Mail, Phone } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const sampleEnquiries = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    email: 'rajesh@hospital.com',
    phone: '+91 98765 43210',
    company: 'City Hospital',
    industry: 'Healthcare',
    product: 'Servo Stabilizer 50KVA',
    message: 'Need a servo stabilizer for our hospital power backup system. Please provide details and quote.',
    status: 'New',
    date: '2 hours ago',
    source: 'Contact Form',
  },
  {
    id: 2,
    name: 'Priya Sharma',
    email: 'priya@manufacturing.com',
    phone: '+91 98765 43211',
    company: 'XYZ Manufacturing',
    industry: 'Manufacturing',
    product: 'UPS 10KVA',
    message: 'Interested in your UPS systems for our facility. How long is the delivery time?',
    status: 'Contacted',
    date: '5 hours ago',
    source: 'Email',
  },
  {
    id: 3,
    name: 'Amit Patel',
    email: 'amit@datacenter.com',
    phone: '+91 98765 43212',
    company: 'DataTech Solutions',
    industry: 'IT/Data Center',
    product: 'Solar Panel 5KW',
    message: 'We are looking to install solar panels at our data center.',
    status: 'Qualified',
    date: '1 day ago',
    source: 'Contact Form',
  },
  {
    id: 4,
    name: 'Sneha Desai',
    email: 'sneha@hospital.com',
    phone: '+91 98765 43213',
    company: 'Green Hospital',
    industry: 'Healthcare',
    product: 'Battery Backup System',
    message: 'Need information about your battery backup solutions.',
    status: 'New',
    date: '2 days ago',
    source: 'Contact Form',
  },
]

export default function EnquiriesManagement() {
  const [enquiries, setEnquiries] = useState(sampleEnquiries)
  const [selectedEnquiry, setSelectedEnquiry] = useState<typeof sampleEnquiries[0] | null>(null)
  const [statusFilter, setStatusFilter] = useState('All')
  const router = useRouter()
  const supabase = createClient()

  const filteredEnquiries = enquiries.filter(e =>
    statusFilter === 'All' || e.status === statusFilter
  )

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  const updateStatus = (id: number, newStatus: string) => {
    setEnquiries(enquiries.map(e =>
      e.id === id ? { ...e, status: newStatus } : e
    ))
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="flex items-center justify-between px-6 py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
              <p className="text-sm text-gray-600">Manage customer inquiries and leads</p>
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
          {/* Filters */}
          <div className="flex gap-2 flex-wrap">
            {['All', 'New', 'Contacted', 'Qualified'].map(status => (
              <Button
                key={status}
                onClick={() => setStatusFilter(status)}
                variant={statusFilter === status ? 'default' : 'outline'}
                className={statusFilter === status ? 'bg-teal-600 text-white' : ''}
              >
                {status}
              </Button>
            ))}
          </div>

          {/* Enquiries Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredEnquiries.map((enquiry) => (
              <Card
                key={enquiry.id}
                className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-teal-600"
                onClick={() => setSelectedEnquiry(enquiry)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{enquiry.name}</CardTitle>
                      <CardDescription>{enquiry.company}</CardDescription>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      enquiry.status === 'New' ? 'bg-blue-100 text-blue-800' :
                      enquiry.status === 'Contacted' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {enquiry.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-gray-900">Product:</span> {enquiry.product}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium text-gray-900">Industry:</span> {enquiry.industry}
                    </p>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      <span className="font-medium text-gray-900">Message:</span> {enquiry.message}
                    </p>
                  </div>
                  
                  <div className="flex gap-2 pt-2 border-t border-gray-200 text-xs text-gray-500">
                    <span>{enquiry.date}</span>
                    <span>•</span>
                    <span>{enquiry.source}</span>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a href={`mailto:${enquiry.email}`} title="Send email">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                    </a>
                    <a href={`tel:${enquiry.phone}`} title="Call">
                      <Button size="sm" variant="outline" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                    </a>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex items-center gap-2"
                      onClick={() => setSelectedEnquiry(enquiry)}
                    >
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEnquiries.length === 0 && (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <p className="text-gray-600 mb-4">No enquiries found</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* Detail Modal */}
      {selectedEnquiry && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{selectedEnquiry.name}</CardTitle>
                  <CardDescription>{selectedEnquiry.company}</CardDescription>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => setSelectedEnquiry(null)}
                >
                  ✕
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <a href={`mailto:${selectedEnquiry.email}`} className="text-teal-600 hover:underline">
                    {selectedEnquiry.email}
                  </a>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Phone</label>
                  <a href={`tel:${selectedEnquiry.phone}`} className="text-teal-600 hover:underline">
                    {selectedEnquiry.phone}
                  </a>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Industry</label>
                  <p className="text-gray-900">{selectedEnquiry.industry}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Product Interest</label>
                  <p className="text-gray-900">{selectedEnquiry.product}</p>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-gray-900">{selectedEnquiry.message}</p>
                </div>
              </div>

              {/* Status & Notes */}
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Status</label>
                  <div className="flex gap-2">
                    {['New', 'Contacted', 'Qualified'].map(status => (
                      <Button
                        key={status}
                        size="sm"
                        onClick={() => updateStatus(selectedEnquiry.id, status)}
                        variant={selectedEnquiry.status === status ? 'default' : 'outline'}
                        className={selectedEnquiry.status === status ? 'bg-teal-600 text-white' : ''}
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">Internal Notes</label>
                  <textarea
                    placeholder="Add internal notes about this enquiry..."
                    className="w-full p-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-teal-600"
                    rows={3}
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <a href={`mailto:${selectedEnquiry.email}`}>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Email
                  </Button>
                </a>
                <Button
                  variant="outline"
                  onClick={() => setSelectedEnquiry(null)}
                  className="ml-auto"
                >
                  Close
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
