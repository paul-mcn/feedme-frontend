import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Token } from "./hooks/user";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const tokenString = request.cookies.get("token")
  const token: Token = JSON.parse(tokenString?.value || "{}");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("Accept", "application/json");
  requestHeaders.set(
    "authorization",
    `${token.token_type} ${token.access_token}`,
  );

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/api/users/me/meals",
};
