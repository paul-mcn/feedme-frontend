import * as React from "react";

type Props = {
  children: React.ReactNode;
};

const SectionBodyContent = (props: Props) => {
  return <div className="mt-1">{props.children}</div>;
};

export default SectionBodyContent;
