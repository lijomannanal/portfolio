import { NAV_LINKS } from "@/constants";
import { Menu, X as Close } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ToggleTheme } from "../ToggleTheme";

export default function Header(props: {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}) {
  const pathname = usePathname();
  return (
    <div className="sticky top-0 pb-4 z-998 bg-background px-4 lg:px-6">
      <ToggleTheme />
      <nav className="flex items-center justify-end lg:hidden">
        {props.sidebarOpen ? (
          <Close
            className="h-6 w-6"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
          />
        ) : (
          <Menu
            className="h-6 w-6"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
          />
        )}
      </nav>
      <nav className="hidden justify-end gap-6 text-sm font-medium lg:flex">
        {NAV_LINKS.map((item) => (
          <Link key={item.name} href={item.href}>
            <span
              className={`cursor-pointer rounded-full px-4 py-2 ${
                pathname === item.href
                  ? "bg-primary text-background"
                  : "hover:text-primary"
              }`}
            >
              {item.name.toUpperCase()}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
