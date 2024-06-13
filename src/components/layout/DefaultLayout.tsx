import React from "react";

type DefaultLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function DefaultLayout(props: DefaultLayoutProps) {
  return (
    <div className="bg-gray-100 px-2 md:px-0">
      <div className="md:w-4/5 mx-auto py-16">{props.children}</div>
    </div>
  );
}
