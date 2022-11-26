import * as React from "react";

type Props = {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
};

const List = (props: Props): JSX.Element => {
  const { items, className, itemClassName } = props;
  return (
    <ul className={className} role="list">
      {items.map((item, idx) => {
        return (
          <li key={idx} className={itemClassName}>
            {React.isValidElement(item) && item}
          </li>
        );
      })}
    </ul>
  );
};
export default List;
