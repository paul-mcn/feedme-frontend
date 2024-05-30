"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AccountDropdown from "./AccountDropdown";
import { useUser } from "@/hooks/user";

const NavBar = () => {
  const router = usePathname();
  const { data: user } = useUser();

  const links = [
    { name: "Home", href: "/" },
    { name: "Meals", href: "/meals" },
  ];

  const authLinks = [
    { name: "Login", href: "/auth/login" },
    { name: "Register", href: "/auth/register" },
  ];

  return (
    <div className="bg-white w-full h-20 sticky top-0 z-10">
      <div className="flex flex-row w-4/5 mx-auto h-full justify-between">
        <ul className="flex flex-row items-center text-gray-900 gap-4 h-full font-bold">
          {links.map((link) => (
            <li
              className={`${router === link.href ? "text-green-600" : "hover:opacity-80"}`}
              key={link.href}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-row items-center text-gray-900 gap-4 h-full">
          {user ? (
            <AccountDropdown />
          ) : (
            authLinks.map((link) => (
              <li
                className={`${router === link.href ? "text-green-600" : "hover:opacity-80"}`}
                key={link.href}
              >
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
