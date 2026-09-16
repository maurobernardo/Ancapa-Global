import { NextRequest, NextResponse } from "next/server";
import { opportunities } from "@/lib/data";

export function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const region = searchParams.get("region")?.toLowerCase();
  const sector = searchParams.get("sector")?.toLowerCase();
  const data = opportunities.filter(o => (!region || o.region.toLowerCase() === region) && (!sector || o.sector.toLowerCase() === sector));
  return NextResponse.json({ count: data.length, data });
}
