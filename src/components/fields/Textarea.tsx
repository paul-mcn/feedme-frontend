import React, { HTMLProps } from "react";
import { twMerge } from "tailwind-merge";

function Textarea(
  { className, ...props }: HTMLProps<HTMLTextAreaElement>,
  ref: React.ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <textarea
      className={twMerge(
        "border border-gray-300 rounded-md px-2 py-1 placeholder:text-gray-350",
        className,
      )}
      ref={ref}
      {...props}
    ></textarea>
  );
}

export default React.forwardRef(Textarea);
