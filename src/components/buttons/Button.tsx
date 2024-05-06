import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label: React.ReactNode;
};

export default function Button(props: ButtonProps) {
  const { label, className, ...rest } = props;
  return (
    <button className={twMerge("font-bold", className)} {...rest}>
      {props.label}
    </button>
  );
}
