import { NextResponse } from "next/server";

export async function GET() {
	return new NextResponse("Successfully logged out", {
		headers: {
			'Set-Cookie': 'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT',
		},
	})
}
