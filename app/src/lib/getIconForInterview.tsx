import { VideoCameraIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";

const getIconForInterview = (type: string) => {
  switch (type) {
    case "Video Interview":
      return <VideoCameraIcon />;
    case "On-site Interview":
      return <BuildingOfficeIcon />;
    default:
      return null;
  }
};

export default getIconForInterview