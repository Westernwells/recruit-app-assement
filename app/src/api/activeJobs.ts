import axios from "axios";
import { ActiveJob } from "@/app/api/active-jobs/route";

/** Fetches the active jobs array */
export async function fetchActiveJobs(): Promise<ActiveJob[]> {
  const res = await axios.get<ActiveJob[]>("/api/active-jobs");
  return res.data;
}