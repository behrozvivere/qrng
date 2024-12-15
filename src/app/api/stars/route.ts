import { getGitHubStars } from "@/lib/server/count";

export const runtime = 'nodejs';

export async function GET() {
  const star_count = await getGitHubStars();
  return Response.json({
    star_count: star_count,
  });
}
