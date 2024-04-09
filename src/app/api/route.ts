import { cookies, headers } from "next/headers"

export async function GET() {
	console.log(headers()?.get("Authorization"))
	return new Response('Hello, Next.js!')
}
