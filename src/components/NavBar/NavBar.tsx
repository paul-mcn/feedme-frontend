"use client";
import AccountDropdown from "./AccountDropdown";
import NavBarLinks from "./NavBarLinks";
import { useUser } from "@/hooks/user";

const links = [
  { name: "Home", href: "/" },
  { name: "Meals", href: "/meals" },
  { name: "Explore", href: "/explore" },
];

const authLinks = [
  { name: "Login", href: "/auth/login" },
  { name: "Register", href: "/auth/register" },
];

const NavBar = () => {
  const user = useUser();

  const filteredLinks = user.isSuccess
    ? links
    : links.filter((link) => link.name === "Home");

  return (
    <div className="bg-white w-full h-[12vh] z-10">
      <div className="flex flex-row w-4/5 mx-auto h-full justify-between">
        <NavBarLinks links={filteredLinks} />
        <ul className="flex flex-row items-center text-gray-900 gap-4 h-full z-20">
          {user.data ? <AccountDropdown /> : <NavBarLinks links={authLinks} />}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
