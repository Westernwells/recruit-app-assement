// src/hooks/useStats.ts
import { useQuery, UseQueryResult } from "react-query";
import { StatItem } from "@/app/api/stats/route";
import { fetchStats } from "../api/stats";

export function useStats(): UseQueryResult<StatItem[], unknown> {
  return useQuery<StatItem[], unknown>({
    queryKey: ["stats"],
    queryFn: fetchStats,
    staleTime: 1000 * 60 * 5, // cache 5m
    retry: 1,
  });
}