import { useQuery, UseQueryResult } from "react-query";
import { ActiveJob } from "@/app/api/active-jobs/route";
import { fetchActiveJobs } from "../api/activeJobs";

export function useActiveJobs(): UseQueryResult<ActiveJob[], unknown> {
  return useQuery<ActiveJob[], unknown>({
    queryKey: ["active-jobs"],
    queryFn: fetchActiveJobs,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}