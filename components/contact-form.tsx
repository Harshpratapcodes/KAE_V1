'use client'

import { useState } from 'react'
import { Send, AlertCircle, CheckCircle } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    message: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const industries = [
    'Manufacturing',
    'Power Systems',
    'Energy',
    'Infrastructure',
    'Other'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      // Validate form
      if (!formData.name || !formData.email || !formData.message) {
        setStatus('error')
        setErrorMessage('Please fill in all required fields')
        return
      }

      // Call the contact API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const errorData = await response.json()
        setStatus('error')
        setErrorMessage(errorData.error || 'Failed to send message. Please try again.')
        return
      }

      setStatus('success')
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        industry: '',
        message: ''
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
      }, 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
    }
  }

  return (
    <div className="bg-white rounded-xl border border-border p-8">
      <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (234) 567-8900"
            className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {/* Industry */}
        <div>
          <label htmlFor="industry" className="block text-sm font-medium text-foreground mb-2">
            Industry
          </label>
          <select
            id="industry"
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Select an industry</option>
            {industries.map(industry => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your requirements..."
            rows={5}
            className="w-full px-4 py-3 rounded-lg border border-border bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            required
          />
        </div>

        {/* Status Messages */}
        {status === 'success' && (
          <div className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
            <CheckCircle size={20} className="text-green-600 mt-0.5" />
            <div>
              <p className="font-semibold text-green-900">Message sent successfully!</p>
              <p className="text-sm text-green-800">We'll get back to you shortly.</p>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="flex items-start space-x-3 p-4 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle size={20} className="text-red-600 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900">Error</p>
              <p className="text-sm text-red-800">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {status === 'loading' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>

        <p className="text-sm text-muted-foreground text-center">
          We respect your privacy. Your information will only be used to respond to your inquiry.
        </p>
      </form>
    </div>
  )
}
