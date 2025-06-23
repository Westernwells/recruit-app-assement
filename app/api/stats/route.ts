// app/api/stats/route.ts
import { NextResponse } from "next/server";

export type StatItem = {
  id: string;
  title: string;
  value: string;
  change: {
    amount: number;
    direction: "up" | "down";
    label: string;
    color: string;
  } | null;
  label?: string; // Optional label for cases without change
};

const stats: StatItem[] = [
  {
    id: "total-candidates",
    title: "Total Candidates",
    value: "1,234",
    change: { amount: 10, direction: "up", label: "more", color: "green" },
  },
  {
    id: "active-jobs",
    title: "Active Jobs",
    value: "42",
    change: { amount: 10, direction: "up", label: "more", color: "green" },
  },
  {
    id: "interviews-this-week",
    title: "Interviews This Week",
    value: "28",
    change: { amount: 5, direction: "down", label: "fewer", color: "red" },
  },
  {
    id: "time-to-hire",
    title: "Time to Hire",
    value: "18 days",
    change: null,
    label: "same as last month",
  },
] as const;

export async function GET() {
  // optional: simulate network latency
  await new Promise((r) => setTimeout(r, 200));
  return NextResponse.json({ stats });
}