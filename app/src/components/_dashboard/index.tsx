"use client";
import React from 'react'
import Stats from './Stats'
import HeroSection from './HeroSection'
import { ActiveJobsSection } from './ActiveJobs';
import { ToDoSection } from './ToDoSection';

export default function Dashboard() {
  return (
    <>
      <Stats />
      <HeroSection />
      <div className="lg:grid lg:grid-cols-6 lg:gap-5 sm:flex flex-col gap-2.5">
        <div className="col-span-4">
          <ActiveJobsSection />
        </div>
        <div className="col-span-2">
          <ToDoSection />
        </div>
      </div>
    </>
  )
}
