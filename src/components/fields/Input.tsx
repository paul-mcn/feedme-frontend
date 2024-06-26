import React, { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

function Input(
  {
    className,
    ...props
  }: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
    <input
      className={twMerge(
        "border border-gray-300 rounded-md px-2 py-1 placeholder:text-gray-350",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
}

export default React.forwardRef(Input);
