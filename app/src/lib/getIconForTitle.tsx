import { BriefcaseIcon, UsersIcon } from "@heroicons/react/16/solid";
import { CalendarIcon } from "lucide-react";
export function getIconForTitle(title: string) {
  switch (title) {
    case "Job approval":
      return <BriefcaseIcon />;
    case "Interview feedback":
      return <CalendarIcon />;
    case "Offer approval":
      return <UsersIcon />;
    default:
      return null;
  }
}