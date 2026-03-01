import { NextRequest, NextResponse } from 'next/server'
import type { ContactFormData } from '@/lib/types'

// This is a simple contact form handler
// In production, you would integrate with your database and email service
export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // TODO: In production, you would:
    // 1. Save the enquiry to your Supabase database
    // 2. Send notification emails to admin and user
    // 3. Send WhatsApp notification if phone is provided
    // 4. Log the submission for analytics

    console.log('Contact form submission:', {
      timestamp: new Date().toISOString(),
      ...body
    })

    // For now, return a success response
    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for reaching out! We will contact you soon.',
        id: `contact-${Date.now()}`
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}

// Handle CORS for preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
