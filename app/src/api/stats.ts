// src/api/stats.ts
import axios from "axios";
import { StatItem } from "@/app/api/stats/route";

export async function fetchStats(): Promise<StatItem[]> {
  const res = await axios.get<{ stats: StatItem[] }>("/api/stats");
  return res.data.stats;
}