import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

function LogOut() {
  return (
    <button type="button" className="flex flex-row gap-4 items-center">
      <HiOutlineLogout className="text-amber-500 w-5 h-5" aria-hidden="true" />
      Log-out
    </button>
  );
}

export default LogOut;
