import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  const body = await request.json()
  const { name, email, message } = body

  if (!name || !email || !message) {
    return Response.json(
      { error: 'All fields are required' },
      { status: 400 }
    )
  }

  // 1. Save to Supabase
  const { error: dbError } = await supabase
    .from('contacts')
    .insert([{ name, email, message }])

  if (dbError) {
    console.error('Supabase error:', dbError)
    return Response.json(
      { error: 'Failed to save message' },
      { status: 500 }
    )
  }

  // 2. Send email via Resend
  const { error: emailError } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'cantrell38jerry@gmail.com',
    subject: `New message from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  })

  if (emailError) {
    console.error('Resend error:', emailError)
  }

  return Response.json(
    { success: true, message: 'Message received!' },
    { status: 200 }
  )
}