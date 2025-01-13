import { NextResponse } from "next/server";

export async function GET() {
    console.log('toto');
    return NextResponse.json({ message: "API Route Working!" });
}