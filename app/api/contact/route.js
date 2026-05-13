export async function POST(request) {
  const body = await request.json()
  const { name, email, message } = body

  if (!name || !email || !message) {
    return Response.json(
      { error: 'All fields are required' },
      { status: 400 }
    )
  }

  // For now we just log it — we'll connect email later
  console.log('New message from:', name, email, message)

  return Response.json(
    { success: true, message: 'Message received!' },
    { status: 200 }
  )
}