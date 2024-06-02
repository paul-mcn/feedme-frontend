import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type AccordianProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};
export const Accordian = (props: AccordianProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <div className={props.className}>
      <div
        onClick={toggleOpen}
        className="flex justify-between items-center font-bold cursor-pointer select-none"
      >
        <div>{props.title}</div>
        <div>
          <ChevronRightIcon
            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-90" : ""}`}
          />
        </div>
      </div>
      <div className={`${isOpen ? "" : "hidden"}`}>{props.children}</div>
    </div>
  );
};
