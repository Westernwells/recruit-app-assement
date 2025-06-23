'use client';
import "./globals.css";
import 'react-loading-skeleton/dist/skeleton.css';
import DashboardLayout from "./src/components/layout";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <DashboardLayout>
    {children}
  </DashboardLayout>
  );
}
