import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Token } from "./hooks/user";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const tokenString = request.cookies.get("token");
  const token: Token = JSON.parse(tokenString?.value || "{}");
  const url = new URL(request.url);

  if (url.pathname === "/auth/login" && token.access_token) {
    return NextResponse.redirect(url.origin);
  }

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

export const config = {
  matcher: ["/auth/login", "/api/users/me/:path*", "/api/file/image-upload"],
};
