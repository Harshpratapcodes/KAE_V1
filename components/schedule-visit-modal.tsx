'use client'

import { useState } from 'react'
import { Calendar } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

interface ScheduleVisitModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ScheduleVisitModal({ isOpen, onClose }: ScheduleVisitModalProps) {
  const [formData, setFormData] = useState({
    companyName: '',
    phoneNumber: '',
    visitDate: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      console.log('Schedule visit request submitted:', formData)
      alert('Visit scheduled! We will contact you soon to confirm.')
      setFormData({
        companyName: '',
        phoneNumber: '',
        visitDate: '',
      })
      onClose()
    } catch (error) {
      console.error('Error scheduling visit:', error)
      alert('Error scheduling visit. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Schedule Your Free Consultation Visit</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 py-4">
          {/* Free Consultation Note */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-3">
            <p className="text-sm text-primary font-medium">
              ✓ Your first visit for consultation is absolutely free
            </p>
          </div>

          {/* Company Name */}
          <div className="space-y-2">
            <Label htmlFor="companyName" className="text-foreground font-medium">
              Company Name
            </Label>
            <Input
              id="companyName"
              name="companyName"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={handleInputChange}
              required
              className="border border-border rounded-lg"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phoneNumber" className="text-foreground font-medium">
              Phone Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="border border-border rounded-lg"
            />
          </div>

          {/* Visit Date */}
          <div className="space-y-2">
            <Label htmlFor="visitDate" className="text-foreground font-medium">
              Preferred Visit Date
            </Label>
            <Input
              id="visitDate"
              name="visitDate"
              type="date"
              value={formData.visitDate}
              onChange={handleInputChange}
              required
              className="border border-border rounded-lg"
            />
          </div>

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-primary hover:bg-primary/90 text-white"
            >
              {isSubmitting ? 'Scheduling...' : 'Schedule Visit'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
