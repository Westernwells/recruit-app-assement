'use client';
import { Poppins } from "next/font/google";
import { QueryClientProvider } from "react-query";
import queryClient from "../../lib/queryClient";
import Header from "./Header";
import Footer from "./Footer";
import SideBar from "./SideBar";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.className}  antialiased min-h-screen flex flex-col w-full h-full bg-gray-50`}
      >
         <QueryClientProvider client={queryClient}>
        <div className="grid lg:grid-cols-[17rem_1fr] grid-rows-[auto_1fr] sm:grid-cols-[12rem_1fr]  flex-1 ">
          <SideBar />
          <div className=" flex flex-col  w-full h-full">
            <div className="w-full flex-1 flex flex-col h-full">
          <Header />
          <main className="bg-gray-50 lg:px-[2rem] lg:py-[1.5rem] sm:px-[1rem] sm:py-[1rem] overflow-auto h-full ">
            <div className="max-w-[120rem] my-0 mx-auto flex flex-col gap-5 flex-1">
              {children}
            </div>
            <div className=" lg:hidden">

<Footer />
</div>
          </main>

            </div>

          </div>
        </div>
        <div className="hidden lg:block">

            <Footer />
        </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
