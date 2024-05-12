import { serialize } from "cookie";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  try {
    const tokenPayload = await fetch(`${process.env.API_HOST}/auth/token`, {
      method: "POST",
      body: formData,
    });

    if (tokenPayload.statusText === "Unauthorized") {
      return tokenPayload;
    }

    const token = await tokenPayload.json();
    console.log("parsed token", token);

    // Below is an example of saving information to a cookie
    const cookie = serialize("token", JSON.stringify(token), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60, // 60 minutes
      path: "/",
    });

    return new NextResponse("Successfully set cookie!", {
      status: 200,
      headers: {
        "Set-Cookie": cookie,
      },
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Something went wrong. Please try again.", {
      status: 500,
    });
  }
}
