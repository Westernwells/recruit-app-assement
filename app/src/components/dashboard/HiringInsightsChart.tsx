"use client";

import { useHiringInsights } from "@/app/src/hooks/useHiringInsights";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { HiringInsightsLoader } from "../Loader";

export default function HiringInsightsChart() {
  const { data, isLoading, isError } = useHiringInsights();

  if (isError && !isLoading) return <div>Failed to load insights.</div>;

  return (
    <div className="w-full h-80">
      {isLoading ? (
        <HiringInsightsLoader />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis
              dataKey="num"
              tick={{ fill: "#6B7280", fontSize: 12 }}
              label={{ position: "insideBottomRight", offset: -5 }}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: "#6B7280", fontSize: 12 }}
              tickFormatter={(v) => `${v}%`}
            />
            <Tooltip formatter={(value: number) => `${value}%`} />
            <Legend
            className="ml-8"
              content={({ payload }) => (
                <ul className="flex gap-6 mt-2  ml-10 ">
                  {payload?.map((entry, index) => (
                    <li
                      key={`item-${index}`}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <span
                        className="inline-block w-3 h-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      {entry.value}
                    </li>
                  ))}
                </ul>
              )}
            />
            <Line
              type="monotone"
              dataKey="value1"
              name="Application to Interview Rate"
              stroke="#10B981"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="value2"
              name="Offer Acceptance Rate"
              stroke="#6366F1"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="value3"
              name="Rejection Rate"
              stroke="#EF4444"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
