import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  try {
    return NextResponse.json({ name: "saranya" },{status:201});
  } catch (error) {
    console.log(error);
  }
}
