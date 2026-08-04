export async function POST(req) {
  const { question } = await req.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5",
      max_tokens: 300,
      system: "You are a helpful assistant on Milan Budhathoki's portfolio site. Milan is a Computer Science major with a Mathematics minor at Arkansas State University. Answer visitor questions about his background, projects, and skills in a friendly and concise way.",
      messages: [{ role: "user", content: question }],
    }),
  });

  const data = await response.json();


  const answer = data.content?.[0]?.text || "Sorry, I couldn't generate a response.";

  return Response.json({ answer });
}