import { NextResponse } from "next/server";

export type ActiveJob = {
  id: string;
  title: string;
  candidates: number;
  inPipeline: number;
  daysOpen: number;
  progress: number;
};

const activeJobs: ActiveJob[] = [
  {
    id: "senior-frontend-dev",
    title: "Senior Frontend Developer",
    candidates: 32,
    inPipeline: 8,
    daysOpen: 12,
    progress: 75,
  },
  {
    id: "product-manager",
    title: "Product Manager",
    candidates: 28,
    inPipeline: 5,
    daysOpen: 8,
    progress: 50,
  },
];

export async function GET() {
  // simulate latency
  await new Promise((r) => setTimeout(r, 200));
  return NextResponse.json(activeJobs);
}