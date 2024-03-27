"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const router = usePathname();

  const links = [
    { name: "Home", href: "/" },
    { name: "Meals", href: "/meals" },
  ];

  return (
    <div className="bg-white w-full h-20">
      <ul className="flex flex-row items-center text-gray-900 gap-4 mt-auto h-full w-4/5 mx-auto font-bold">
        {links.map((link) => (
          <li
            className={`${router === link.href ? "text-green-600" : "hover:opacity-80"}`}
            key={link.href}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
