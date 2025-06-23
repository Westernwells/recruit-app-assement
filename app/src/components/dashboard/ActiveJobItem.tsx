import React from "react";
import HorizontalProgressBar from "./HorizontalProgressBar";

export interface ActiveJobItemProps {
  title: string;
  candidates: number;
  inPipeline: number;
  daysOpen: number;
  progress: number;
}

export default function ActiveJobItem({
  title,
  candidates,
  inPipeline,
  daysOpen,
  progress,
}: ActiveJobItemProps) {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-lg p-4 flex justify-between mb-4 last:mb-0">
      <div>
        <h6 className="font-medium text-base text-gray-600">{title}</h6>
        <p className="text-sm text-gray-500">
          {candidates} candidates — {inPipeline} in pipeline
        </p>
      </div>
      <HorizontalProgressBar
        label={`${daysOpen} days open`}
        progress={progress}
        progressColor="bg-purple-500"
        textColor="text-gray-500"
      />
    </div>
  );
}