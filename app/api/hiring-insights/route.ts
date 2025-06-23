import { NextResponse } from "next/server";

export interface HiringInsight {
  num: number;
  value1: number;
  value2: number;
  value3: number;
}

function generateData(): HiringInsight[] {
  return Array.from({ length: 22 }, (_, i) => {
    const num = i + 1;
    return {
      num,
      value1: Math.min(100, Math.floor(num * 5 + Math.random() * 10)),
      value2: Math.min(100, Math.floor(num * 4 + Math.random() * 8)),
      value3: Math.min(100, Math.floor(num * 3 + Math.random() * 12)),
    };
  });
}

export async function GET() {
  // simulate 1s delay
  await new Promise((r) => setTimeout(r, 1000));
  const data = generateData();
  return NextResponse.json(data);
}