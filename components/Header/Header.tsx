import * as React from "react";
import { getCommonLinks, getAuthLinks } from "lib/utils";
import Link from "next/link";
import { useRouter } from "next/router";

type Props = {
  header: "default" | "plain";
  className?: string;
};

const Header = ({ header = "default", className }: Props) => {
  const router = useRouter();
  const headerClassName = `${
    header === "plain" ? className : "bg-primary"
  } p-5`;

  const isCurrentLink = (link: string) => {
    return link === router.pathname;
  };


  const underlineStyle = { width: "100%" };
  const LinkButton = ({ link, title }: { link: string; title: string }) => (
    <Link href={link} key={link}>
      <div className="cursor-pointer relative group ">
        <div className="font-semibold">{title}</div>
        <div
          className="absolute w-0 h-[4px] bottom-[-2px] transition-all group-hover:w-full bg-red-500"
          style={isCurrentLink(link) ? underlineStyle : {}}
        ></div>
      </div>
    </Link>
  );
  return (
    <header className={headerClassName}>
      <div className="flex flex-row mx-auto w-4/5">
        <div className="flex flex-row gap-6">
          {getCommonLinks().map(({ link, title }) => (
            <LinkButton key={link} link={link} title={title} />
          ))}
        </div>
        <div className="flex flex-row ml-auto gap-6">
          {getAuthLinks().map(({ link, title }) => (
            <LinkButton key={link} link={link} title={title} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
