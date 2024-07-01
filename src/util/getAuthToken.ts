import { Token } from "@/hooks/user";
import { cookies } from "next/headers";

const getAuthToken = (): Token | undefined => {
  const tokenAsString = cookies().get("token")?.value;
  if (!tokenAsString) return undefined;
  const token = JSON.parse(tokenAsString);
  return token;
};

export default getAuthToken;
