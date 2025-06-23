"use client";

import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import {
  HiOutlineBriefcase,
  HiOutlineChartBarSquare,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineUserGroup,
} from "react-icons/hi2";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  subItems?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    name: "Dashboard",
    href: "/",
    icon: <HiOutlineHome className="w-5 h-5" aria-hidden="true" />,
  },
  {
    name: "Job Management",
    href: "#",
    icon: <HiOutlineBriefcase className="w-5 h-5" aria-hidden="true" />,
    subItems: [],
  },
  {
    name: "Candidates",
    href: "#",
    icon: <HiOutlineUserGroup className="w-5 h-5" aria-hidden="true" />,
    subItems: [],
  },
  {
    name: "Messages",
    href: "#",
    icon: <HiOutlineMail className="w-5 h-5" aria-hidden="true" />,
  },
  {
    name: "Settings",
    href: "#",
    icon: <HiOutlineUser className="w-5 h-5" aria-hidden="true" />,
    subItems: [],
  },
  {
    name: "Analytics & Insights",
    href: "#",
    icon: <HiOutlineChartBarSquare className="w-5 h-5" aria-hidden="true" />,
  },
];

export default function MainNav() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const matched = NAV_ITEMS.find((item) =>
      item.subItems?.some((sub) => sub.href === pathname)
    );
    if (matched) {
      setExpanded(matched.name);
    }
  }, [pathname]);

  return (
    <nav aria-label="Main Navigation" className="w-full">
      <ul className="flex flex-col">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === item.href ||
            item.subItems?.some((sub) => sub.href === pathname);
          const isExpanded = expanded === item.name;
          const hasSubItems = item.subItems && item.subItems.length > 0;

          return (
            <li key={item.name}>
              {hasSubItems ? (
                <button
                  type="button"
                  aria-expanded={isExpanded}
                  aria-controls={`${item.name}-submenu`}
                  onClick={() =>
                    setExpanded((prev) =>
                      prev === item.name ? null : item.name
                    )
                  }
                  className={clsx(
                    "w-full text-left flex items-center justify-between px-2 py-2.5 rounded-md transition-all duration-300 hover:bg-gray-100",
                    isActive ? "bg-gray-100 text-gray-600" : "text-gray-700"
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                  {isExpanded ? (
                    <ChevronDownIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronRightIcon
                      className="h-4 w-4 text-gray-400"
                      aria-hidden="true"
                    />
                  )}
                </button>
              ) : (
                <a
                  href={item.href}
                  className={clsx(
                    "flex items-center justify-between px-2 py-2.5 rounded-md transition-all duration-300 hover:bg-gray-100",
                    isActive ? "bg-gray-100 text-gray-600" : "text-gray-700"
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-500">{item.icon}</span>
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                </a>
              )}

              {hasSubItems && (
                <AnimatePresence>
                  {isExpanded && (
                    <motion.ul
                      id={`${item.name}-submenu`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-10"
                    >
                      {item?.subItems?.map((subItem) => {
                        const isActiveSub = pathname === subItem.href;
                        return (
                          <motion.li
                            key={subItem.name}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            <a
                              href={subItem.href}
                              className={clsx(
                                "block px-3 py-1.5 text-sm rounded-md transition-all",
                                isActiveSub
                                  ? "bg-indigo-100 text-indigo-600"
                                  : "text-gray-600 hover:bg-gray-100"
                              )}
                            >
                              {subItem.name}
                            </a>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  )}
                </AnimatePresence>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
