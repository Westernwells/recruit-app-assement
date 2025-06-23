// src/api/upcomingInterviews.ts
import axios from 'axios';

export type Interview = {
  time: string;
  candidate: string;
  type: string;
};

/**
 * Fetches the list of upcoming interviews from your Next.js API.
 */
export async function fetchUpcomingInterviews(): Promise<Interview[]> {
  const response = await axios.get<{ upcomingInterviews: Interview[] }>(
    '/api/upcoming-interviews'
  );
  return response.data.upcomingInterviews;
}