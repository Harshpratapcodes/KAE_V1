'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

interface QuoteFormModalProps {
  isOpen: boolean
  productName: string
  onClose: () => void
  onSubmit: (formData: QuoteFormData) => void
}

export interface QuoteFormData {
  name: string
  email: string
  phone: string
  company: string
  productName: string
  message: string
}

export default function QuoteFormModal({
  isOpen,
  productName,
  onClose,
  onSubmit,
}: QuoteFormModalProps) {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    productName: productName,
    message: '',
  })

  const handleSubmit = () => {
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      alert('Please fill in all required fields')
      return
    }

    onSubmit(formData)
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      productName: productName,
      message: '',
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-foreground mb-2">Request a Quote</h2>
        <p className="text-muted-foreground mb-6">
          Fill in your details and we'll get back to you shortly.
        </p>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="+1 (234) 567-890"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Company Name
            </label>
            <input
              type="text"
              placeholder="Your Company"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Product
            </label>
            <input
              type="text"
              value={formData.productName}
              disabled
              className="w-full px-4 py-2 border border-border rounded-lg bg-muted text-muted-foreground"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Additional Requirements
            </label>
            <textarea
              placeholder="Tell us more about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              rows={3}
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-border rounded-lg font-medium text-foreground hover:bg-muted transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Send Request
          </button>
        </div>
      </div>
    </div>
  )
}
