// app/api/upcoming-interviews/route.ts

import { NextResponse } from "next/server";

export type Interview = {
  time: string;
  candidate: string;
  type: string;
};

const upcomingInterviews: readonly Interview[] = [
  {
    time: "Today, 2:00 PM",
    candidate: "John Smith - Senior Developer",
    type: "Video Interview",
  },
  {
    time: "Tomorrow, 10:00 AM",
    candidate: "Emily Brown - UX Designer",
    type: "On-site Interview",
  },
  {
    time: "Tomorrow, 2:00 PM",
    candidate: "Michael Lee - Product Manager",
    type: "On-site Interview",
  },
] as const;

export async function GET() {
  // simulate a small delay
  await new Promise((res) => setTimeout(res, 200));

  return NextResponse.json({ upcomingInterviews });
}