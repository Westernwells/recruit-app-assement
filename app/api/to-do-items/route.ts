import { NextResponse } from "next/server";

export type ToDoItem = {
  id: string;
  title: string;
  subtitle: string;
  iconBg: string;
  iconColor: string;
};

const toDoItems: ToDoItem[] = [
  {
    id: "job-approval",
    title: "Job approval",
    subtitle: "0 pending approvals",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    id: "interview-feedback",
    title: "Interview feedback",
    subtitle: "0 pending feedback",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-500",
  },
  {
    id: "offer-approval",
    title: "Offer approval",
    subtitle: "0 pending approvals",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
  },
];

export async function GET() {
  await new Promise((r) => setTimeout(r, 200));
  return NextResponse.json(toDoItems);
}