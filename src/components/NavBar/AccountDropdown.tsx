import React from "react";
import { UserCircleIcon, ArrowLeftStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  {
    name: "Profile",
    href: "/profile",
    icon: <Cog6ToothIcon className="w-5 h-5" />,
  },
  {
    name: "Logout",
    href: "/auth/logout",
    icon: <ArrowLeftStartOnRectangleIcon className="w-5 h-5" />,
  },
];

export default function AccountDropdown() {
  return (
    <div className="relative group">
      <UserCircleIcon className="w-8 h-8 text-gray-400 cursor-pointer" />
      <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block p-1">
        <ul className="rounded-xl bg-white shadow-lg p-2 flex flex-col gap-1 border border-gray-200">
          {links.map((link) => (
            <li
              key={link.name}
              className="text-slate-900 hover:text-green-600 hover:bg-green-100 rounded-md text-sm"
            >
              <Link className="px-3 py-2 flex gap-2" href={link.href}>
                <div>{link.icon}</div>
								<div>{link.name}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
