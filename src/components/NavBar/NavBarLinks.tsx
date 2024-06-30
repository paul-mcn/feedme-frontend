"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type NavBarLinksProps = {
  links: {
    name: string;
    href: string;
  }[];
};

export default function NavBarLinks(props: NavBarLinksProps) {
  const pathname = usePathname();
  return (
    <ul className="flex flex-row items-center text-gray-900 gap-4 h-full font-bold">
      {props.links.map((link) => (
        <li
          className={`${pathname === link.href ? "text-green-600" : "hover:opacity-80"}`}
          key={link.href}
        >
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}
