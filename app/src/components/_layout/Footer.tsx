import { Copyright } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-5 p-5 ">
      <span className="text-xs text-gray-400 flex flex-row items-center gap-1">
        Powered by Fellor - Recruiting with Bull&apos;s Eye
        <Copyright className="w-3 h-3" />
        Precision 2025
      </span>
      <div className="flex flex-row gap-2 text-xs text-gray-400">
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
      </div>
    </div>
  );
}

export default Footer;
