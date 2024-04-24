import { serialize } from "cookie";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  const tokenPayload = await fetch("http://localhost:8000/auth/token", {
    method: "POST",
    body: formData,
  });

  if (tokenPayload.statusText === "Unauthorized") {
    return tokenPayload;
  }

  const token = await tokenPayload.json();

  // Below is an example of saving information to a cookie
  const cookie = serialize("token", JSON.stringify(token), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 30, // 30 minutes
    path: "/",
  });

  return new NextResponse("Successfully set cookie!", {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
    },
  });
}
