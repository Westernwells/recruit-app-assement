// src/components/DashboardLoaders.tsx
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function StatsLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array(4)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-lg p-4 space-y-3"
          >
            <Skeleton width={120} height={16} />
            <Skeleton width={80} height={32} />
            <div className="flex space-x-2">
              <Skeleton circle width={12} height={12} />
              <Skeleton width={100} height={12} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function HiringInsightsLoader() {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4">
      <Skeleton width={150} height={24} className="mb-4" />
      <Skeleton height={200} />
    </div>
  );
}

export function UpcomingInterviewsLoader() {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 space-y-4">
      {Array(3)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-gray-50 rounded p-3 space-y-2"
          >
            <Skeleton width={140} height={14} />
            <Skeleton width={180} height={14} />
            <Skeleton width={100} height={14} />
          </div>
        ))}
    </div>
  );
}

export function ToDoListLoader() {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 space-y-4">
      {Array(3)
        .fill(0)
        .map((_, idx) => (
          <div key={idx} className="flex items-center space-x-3 p-3 bg-gray-50 rounded">
            <Skeleton circle width={32} height={32} />
            <div className="flex-1 space-y-1">
              <Skeleton width={`60%`} height={14} />
              <Skeleton width={`40%`} height={12} />
            </div>
          </div>
        ))}
    </div>
  );
}

export function ActiveJobsLoader() {
  return (
    <div className="bg-white border border-gray-100 rounded-lg p-4 space-y-4">
      {Array(2)
        .fill(0)
        .map((_, idx) => (
          <div
            key={idx}
            className="flex justify-between items-center bg-gray-50 rounded p-4"
          >
            <div className="space-y-2">
              <Skeleton width={200} height={16} />
              <Skeleton width={140} height={12} />
            </div>
            <div className="text-right space-y-1">
              <Skeleton width={80} height={12} />
              <Skeleton width={100} height={8} />
            </div>
          </div>
        ))}
    </div>
  );
}