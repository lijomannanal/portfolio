"use client";

import * as React from "react";
import Header from "@/components/Header";
import ProfileCard from "@/components/ProfileCard";
import Sidebar from "@/components/Sidebar";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";
import { ToggleTheme } from "@/components/ToggleTheme";

import { ThemeProvider } from "next-themes";

type ThemeProviderProps = React.ComponentProps<typeof ThemeProvider>;

export function Provider({ children, ...props }: ThemeProviderProps) {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      {...props}
    >
      <section className="px-3 py-3 sm:px-6 3xl:px-10 3xl:py-10">
        <div className="mx-auto max-w-7xl rounded-2xl px-4 lg:px-6 shadow-sm relative min-h-[calc(100vh-80px)]">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          {!sidebarOpen && (
            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              <div className="relative flex-1">
                <ProfileCard />
              </div>
              <main className="relative z-99 flex-2">{children}</main>
              <Toaster position="bottom-center" />
            </div>
          )}
        </div>
      </section>
    </ThemeProvider>
  );
}
