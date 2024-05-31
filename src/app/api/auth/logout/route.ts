import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST() {
  // const res = NextResponse.json({ success: true });
  // res.cookies.delete("token");
  cookies().delete("token");
  return NextResponse.json({ success: true });
}
