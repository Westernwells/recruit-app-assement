// src/api/hiringInsights.ts
import axios from "axios";
import { HiringInsight } from "@/app/api/hiring-insights/route";

/** Fetch the insights from our API */
export async function getHiringInsights(): Promise<HiringInsight[]> {
  const res = await axios.get<HiringInsight[]>("/api/hiring-insights");
  return res.data;
}