import {
  BellIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { BiDoorOpen } from "react-icons/bi";

function Header() {
  return (
    <header className="bg-[#ffffff] lg:py-[1.2rem] lg:px-[2.5rem] sm:py-[1rem] sm:px-[1.2rem] border border-gray-200 flex items-center justify-between">
      <div
        className="flex flex-row items-center justify-center gap-2 text-xl text-gray-600 font-medium cursor-pointer hover:text-gray-800"
        aria-label="Homepage"
      >
        <BiDoorOpen
          className="text-gray-500 w-5 h-5 hover:text-gray-800"
          aria-hidden="true"
          focusable="false"
        />
        <span>Home</span>
      </div>

      <div className="flex flex-row gap-2.5">
        <button
          aria-label="Notifications"
          className="flex items-center justify-center border border-gray-100 p-2 rounded cursor-pointer"
        >
          <BellIcon className="text-gray-600 w-5 h-5" aria-hidden="true" />
        </button>

        <button
          aria-label="Search"
          className="flex items-center justify-center border border-gray-100 p-2 rounded cursor-pointer"
        >
          <MagnifyingGlassIcon
            className="w-5 h-5 text-gray-600"
            aria-hidden="true"
          />
        </button>

        <button
          aria-haspopup="true"
          aria-expanded="false"
          aria-label="Quick actions menu"
          className="flex flex-row items-center justify-center gap-1.5 py-0.5 px-2 text-gray-50 bg-gray-800 border border-gray-800 shadow rounded-md cursor-pointer hover:bg-gray-900"
        >
          <span className="hidden lg:inline">Quick Actions</span>
          <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}

export default Header;
