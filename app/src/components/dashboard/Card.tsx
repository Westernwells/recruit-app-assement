import { ReactNode } from "react";

type CardProps = {
  title?: string;
  actionText?: string;
  children: ReactNode;
};

function Card({ title = "", actionText = "", children }: CardProps) {
  return (
    <div className="bg-white border-2 border-gray-100 rounded-lg p-4 flex flex-col gap-2.5">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 cursor-pointer hover:underline">
          {actionText}
        </p>
      </div>
      {children}
    </div>
  );
}

export default Card;
