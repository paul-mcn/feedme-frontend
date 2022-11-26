import * as React from "react";

interface Props {
  items: { [key: string]: React.ReactNode }[];
  className?: string;
  itemClassName?: string;
  itemKey?: string;
  itemValue?: string;
}
const ObjectList = ({
  items,
  className,
  itemClassName,
  itemKey,
  itemValue,
}: Props) => {
  return (
    <ul className={className} role="list">
      {items.map((item, idx) => (
        <li
          key={itemKey ? (item[itemKey] as string) : idx}
          className={itemClassName}
        >
          {itemValue ? item[itemValue] : ""}
        </li>
      ))}
    </ul>
  );
};

<ObjectList items={[{}]} />;

export default ObjectList;
