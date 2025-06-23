'use client";'
import HiringInsights from "./HiringInsights";
import Interview from "./Interview";

function HeroSection() {
  return (
    <div className="lg:grid lg:grid-cols-6 lg:gap-5 sm:flex flex-col gap-2.5">
      <div className="col-span-4">
        <div className="bg-white border border-gray-100 rounded-lg p-4 flex flex-col">
          <HiringInsights />
        </div>
      </div>
      <div className="col-span-2">
      <Interview />
      </div>
    </div>
  );
}

export default HeroSection;