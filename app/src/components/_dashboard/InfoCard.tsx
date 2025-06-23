import { ReactNode } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

type InfoCardProps = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  iconBgClass?: string;
  iconColorClass?: string;
  onClick?: () => void;
};

function InfoCard({
  icon,
  title,
  subtitle,
  iconBgClass = "",
  iconColorClass = "",
  onClick,
}: InfoCardProps) {
  return (
    <div
      className="flex flex-row justify-between items-center border-2 border-gray-100 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition"
      onClick={onClick}
    >
      <div className="flex flex-row gap-2 items-center">
        <div
          className={clsx(
            "flex justify-center items-center p-2 rounded-md",
            iconBgClass
          )}
        >
          <div className={clsx("w-5 h-5", iconColorClass)}>{icon}</div>
        </div>
        <div className="flex flex-col">
          <span className="font-medium text-sm text-gray-500">{title}</span>
          <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
      </div>
      <ChevronRightIcon className="text-gray-400 w-5 h-5" />
    </div>
  );
}

export default InfoCard;
