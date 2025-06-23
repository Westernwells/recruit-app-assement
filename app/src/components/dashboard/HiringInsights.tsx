"use client";

import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import HiringInsightsChart from "./HiringInsightsChart";

const options = [
  { label: "Last 30 days", value: "30" },
  { label: "Last 60 days", value: "60" },
  { label: "Last 90 months", value: "90" },
];

export default function HiringInsights() {
  const [selectedRange, setSelectedRange] = useState(options[1]);

  return (
    <div className="space-y-4">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Hiring Insights</h2>

        <Listbox value={selectedRange} onChange={setSelectedRange}>
          <div className="relative">
            <ListboxButton className="flex items-center gap-1.5 py-1 px-3 text-sm text-gray-700 border border-gray-200 rounded-md bg-white shadow-sm hover:bg-gray-50">
              {selectedRange.label}
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
            </ListboxButton>

            <ListboxOptions className="absolute right-0 z-10 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option}
                  className={({ active }) =>
                    `px-4 py-2 text-sm cursor-pointer ${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    }`
                  }
                >
                  {option.label}
                </ListboxOption>
              ))}
            </ListboxOptions>
          </div>
        </Listbox>
      </div>

      <HiringInsightsChart />
    </div>
  );
}
