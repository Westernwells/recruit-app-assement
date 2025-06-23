// src/hooks/useUpcomingInterviews.ts
import { useQuery } from 'react-query';
import { fetchUpcomingInterviews  } from '../api/upcomingInterviews';


/**
 * React Query hook to load upcoming interviews.
 */
export function useUpcomingInterviews() {
  return useQuery(["upcoming-interviews"], fetchUpcomingInterviews)
}