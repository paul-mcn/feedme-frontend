import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { Token } from "./hooks/user";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const tokenString = request.cookies.get("token");
	const token: Token = JSON.parse(tokenString?.value || "{}");


	const requestHeaders = new Headers(request.headers);
	requestHeaders.set("Accept", "application/json");
	requestHeaders.set(
		"authorization",
		`${token.token_type} ${token.access_token}`,
	);

	const res = NextResponse.next({
		request: { headers: requestHeaders },
	});
	return res;
}

export const config = {
	matcher: ["/auth/login", "/api/users/me/:path*", "/api/file/image-upload"],
};
