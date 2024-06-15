import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const headerList = headers();

  cookies().set("resultsPerPAge", "20");
  const theme = request.cookies.get("theme");

  console.log(requestHeaders.get("Authorization"));
  console.log(headerList.get("Authorization"));

  console.log(theme);
  console.log(cookies().get("resultsPerPAge"));

  return new Response("<h1>GET Route</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
