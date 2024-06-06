import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  try {
    const tokenPayload = await fetch(`${process.env.API_HOST}/auth/register`, {
      method: "POST",
      body: formData,
    });

    if (tokenPayload.statusText === "Unauthorized") {
      return tokenPayload;
    }

    const token = await tokenPayload.json();

    const maxAge = process.env.REFRESH_TOKEN_MAX_AGE
      ? parseInt(process.env.REFRESH_TOKEN_MAX_AGE)
      : 60 * 60 * 24 * 30; // 30 days

    // Below is an example of saving information to a cookie
    const cookie = serialize("token", JSON.stringify(token), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: maxAge,
      path: "/",
    });

    return new NextResponse("Successfully set cookie!", {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
      },
    });
  } catch (error) {
    return new NextResponse("Something went wrong. Please try again.", {
      status: 500,
    });
  }
}
