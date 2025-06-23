import React from "react";

interface HorizontalProgressBarProps {
  label: string; 
  progress: number; 
  progressColor?: string;
  textColor?: string;
}

const HorizontalProgressBar = ({
  label,
  progress,
  progressColor = "bg-orange-500",
  textColor = "text-[#5B5B5B]",
}: HorizontalProgressBarProps &
  React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    style?: React.CSSProperties;
  }) => {
  return (
    <div className="flex flex-col font-semibold">
      <span className="text-end text-purple-500 text-sm">{label}</span>
      <div className="flex flex-row items-center gap-2">
        <div className="w-[100px] h-2 bg-[#F1F1F1] rounded">
          <div
            className={`h-2 rounded ${progressColor}`}
            style={{ width: `${progress}%` }}
          />
        </div>
        <span className={`${textColor} text-base`}>{progress}%</span>
      </div>
    </div>
  );
};

export default HorizontalProgressBar;
