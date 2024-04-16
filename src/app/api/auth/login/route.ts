import { serialize } from "cookie";
import { NextResponse, type NextRequest } from "next/server";

export async function POST(req: NextRequest) {
	const formData = await req.formData()

	const tokenPayload = await fetch('http://localhost:8000/auth/token', {
		method: 'POST',
		body: formData
	})

	const token = await tokenPayload.json()

	// Below is an example of saving information to a cookie
	const cookie = serialize('token', JSON.stringify(token), {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		maxAge: 60 * 60 * 24 * 7, // One week
		path: '/',
	})

	return new NextResponse("Successfully set cookie!", {
		status: 200,
		headers: {
			'Set-Cookie': cookie,
		}
	})
}