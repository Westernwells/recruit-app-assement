import { ReactNode } from "react";

type InterviewItemProps = {
  time: string;
  candidate: string;
  type: string;
  icon: ReactNode;
};

function InterviewItem({ time, candidate, type, icon }: InterviewItemProps) {
  return (
    <div className="flex flex-col gap-2 bg-gray-100 rounded-e-lg border-l-4 border-purple-500 p-3" data-testid="interview-item">
      <div className="flex flex-col">
        <span>{time}</span>
        <span>{candidate}</span>
      </div>
      <div className="flex flex-row gap-1.5 items-center">
        <div className="w-5 h-5 text-purple-500">{icon}</div>
        <p>{type}</p>
      </div>
    </div>
  );
}

export default InterviewItem;
