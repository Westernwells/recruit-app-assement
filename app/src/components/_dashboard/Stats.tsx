"use client";

import React from "react";
import { useStats } from "@/app/src/hooks/useStats";
import { StatCard } from "./StatCard";
import { StatsLoader } from "../Loader";

export default function Stats() {
  const { data: stats, isLoading, isError } = useStats();

  if (isLoading) return <StatsLoader />;
  if (isError) return <div>Failed to load stats.</div>;

  return (
    <div className="grid grid-cols-[1fr_1fr]  lg:grid-cols-[1fr_1fr_1fr_1fr] gap-4 lg:gap-8">
      {stats!.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
}