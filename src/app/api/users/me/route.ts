import { Token } from "@/hooks/user";
import { cookies } from "next/headers";

export async function GET() {
  const tokenString = cookies().get("token");
  const token: Token = JSON.parse(tokenString?.value || "{}");
  try {
    const payload = await fetch(`${process.env.API_HOST}/users/me`, {
      headers: {
        Accept: "application/json",
        authorization: `${token.token_type} ${token.access_token}`,
      },
      cache: "no-store",
    });
    const user = await payload.json();

    return new Response(JSON.stringify(user));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}
