import * as React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
};

const SectionContainer = (props: SectionContainerProps) => {
  return <div className="w-4/5 mx-auto mt-40">{props.children}</div>;
};

export default SectionContainer;
