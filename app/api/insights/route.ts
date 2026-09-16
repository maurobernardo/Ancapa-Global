import { NextResponse } from "next/server";
import { insights } from "@/lib/data";
export function GET(){ return NextResponse.json({ count: insights.length, data: insights }); }
