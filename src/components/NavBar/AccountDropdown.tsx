import React from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function AccountDropdown() {
  return (
    <div className="relative group">
      <UserCircleIcon className="w-8 h-8 text-gray-400 cursor-pointer" />
      <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block p-1">
        <ul className="rounded-full bg-white shadow-lg py-2">
          <li className="px-4 w-full">
            <Link href="/auth/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
