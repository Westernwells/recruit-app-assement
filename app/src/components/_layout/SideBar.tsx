import React from "react";
import Logo from "../Logo";
import MainNav from "./MainNav";
import LogOut from "./LogOut";

function SideBar() {
  return (
    <aside className="flex flex-col bg-[#ffffff] sm:py-[1.5rem] sm:px-[1rem] lg:py-[3rem] lg:px-[2rem] border-r border-r-gray-300 row-span-full h-full justify-between bordr-b-0">
      <div className="flex flex-col lg:gap-[2.4rem] sm:gap-[1.5rem]">
        <Logo />
        <MainNav />
      </div>
      <div>
        <LogOut />
      </div>
    </aside>
  );
}

export default SideBar;
