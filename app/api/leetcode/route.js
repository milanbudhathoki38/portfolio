export async function GET() {
  const query = `
    query getUserStats($username: String!) {
      matchedUser(username: $username) {
        submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
          }
        }
      }
    }
  `;

  const response = await fetch("https://leetcode.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Referer": "https://leetcode.com",
    },
    body: JSON.stringify({
      query,
      variables: { username: "milanbudhathoki38" },
    }),
  });

  const data = await response.json();
  const stats = data.data.matchedUser.submitStatsGlobal.acSubmissionNum;

  const result = {
    total: stats.find(s => s.difficulty === "All")?.count ?? 0,
    easy: stats.find(s => s.difficulty === "Easy")?.count ?? 0,
    medium: stats.find(s => s.difficulty === "Medium")?.count ?? 0,
    hard: stats.find(s => s.difficulty === "Hard")?.count ?? 0,
  };

  return Response.json(result);
}