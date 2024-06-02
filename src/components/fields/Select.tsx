import React from "react";
import { twMerge } from "tailwind-merge";
type Option = {
  label: string;
  value: string;
};

type SelectProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Option[];
  isMulti?: boolean;
  ref: React.ForwardedRef<HTMLSelectElement>;
};

const Select = ({ options, isMulti, className, ...props }: SelectProps) => {
  return (
    <select
      {...props}
      className={twMerge("border rounded-lg p-1", className)}
      multiple={isMulti}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default React.forwardRef(Select);
