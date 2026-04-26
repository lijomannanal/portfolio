"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLElement>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) {
        return;
      }

      if (
        !sidebarOpen ||
        (target instanceof HTMLElement && sidebar.current.contains(target)) ||
        (target instanceof HTMLElement && trigger.current.contains(target))
      ) {
        return;
      }
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-20 z-[990] flex h-[calc(100vh-170px)] w-full border-r p-4 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark lg:hidden ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="flex flex-col items-center gap-4">
          {NAV_LINKS.map((menu) => {
            const { name, href } = menu;
            return (
              <Link
                key={name}
                href={href}
                className={`flex items-center gap-2 p-2 rounded-md hover:bg-blue-100 dark:hover:bg-slate-800`}
              >
                <div
                  onClick={() => setSidebarOpen(false)}
                  className={`text-2xl items-center px-2 py-1  ${
                    pathname == menu.href
                      ? "text-primary font-bold"
                      : "text-secondary font-medium"
                  }`}
                >
                  {menu.name}
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
