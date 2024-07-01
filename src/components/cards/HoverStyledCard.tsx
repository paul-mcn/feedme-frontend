import React from "react";
import { twMerge } from "tailwind-merge";

type HoverStyledCardProps = {
  children: React.ReactNode;
  className: string;
};

export default function HoverStyledCard(props: HoverStyledCardProps) {
  return (
    <div
      className={twMerge(
        "hover:bg-white transition-colors rounded-xl w-min p-2 border border-transparent hover:border-slate-300",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
