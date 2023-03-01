import * as React from "react";
import Link from "next/link";
import { getCommonLinks } from "lib/utils";
import List from "components/common/List";

const Footer = () => {
  const linkCols = [
    [...getCommonLinks()],
    [
      {
        title: "Meals",
        link: "/meals",
      },
      {
        title: "Create a meal",
        link: "/meals/new",
      },
    ],
  ];

const LinkCol = ({ linkCol }: { linkCol: typeof linkCols[0] }) => {
    const items = linkCol.map(({ link, title }) => (
      <Link href={link} key={link}>
        {title}
      </Link>
    ));
    return <List items={items} />;
  };

  return (
    <footer className="bg-gray-50 text-gray-600 ">
      <div className="mx-auto w-4/5 p-5">
        <div className="flex flex-row justify-between">
          {linkCols.map((linkCol, idx) => (
            <LinkCol linkCol={linkCol} key={idx} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
