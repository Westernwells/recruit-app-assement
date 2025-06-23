// src/hooks/useHiringInsights.ts
import { useQuery, UseQueryResult } from "react-query";
import { HiringInsight } from "@/app/api/hiring-insights/route";
import { getHiringInsights } from "../api/hiringInsights";

/** React-Query hook to load the chart data */
export function useHiringInsights(): UseQueryResult<HiringInsight[], unknown> {
  return useQuery<HiringInsight[], unknown>({
    queryKey: ["hiring-insights"],
    queryFn: getHiringInsights,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}