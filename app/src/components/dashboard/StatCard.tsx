import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/16/solid";

export interface StatChange {
  amount: number;
  direction: "up" | "down";
  label: string;
  color: string;
}

export interface StatItem {
  id: string;
  title: string;
  value: string;
  change: StatChange | null;
  label?: string;
}

interface StatCardProps {
  stat: StatItem;
}

export function StatCard({ stat }: StatCardProps) {
  return (
    <section
      key={stat.id}
      role="region"
      aria-labelledby={stat.id}
      className="bg-white border border-gray-100 rounded-lg p-4"
    >
      <div className="flex flex-col gap-3">
        <h5
          id={stat.id}
          className="text-base tracking-[0.4px] font-semibold text-gray-500"
        >
          {stat.title}
        </h5>

        <span className="text-2xl leading-none font-bold text-gray-900">
          {stat.value}
        </span>

        <div className="text-sm leading-none flex flex-row space-x-1 text-gray-700 font-medium">
          {stat.change ? (
            <>
              <span className={`flex items-center text-${stat.change.color}-500`}>
                {stat.change.direction === "up" ? (
                  <ArrowUpIcon className="w-3 h-3 mr-1" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="w-3 h-3 mr-1" aria-hidden="true" />
                )}
                {stat.change.amount} {stat.change.label}
              </span>
              <span>than last month</span>
            </>
          ) : (
            <span>{stat.label}</span>
          )}
        </div>
      </div>
    </section>
  );
}