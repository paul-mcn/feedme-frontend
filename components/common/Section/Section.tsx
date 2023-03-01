import * as React from "react";

type SectionProps = {
  children: React.ReactNode;
};

const Section = (props: SectionProps) => {
  
  return <div className="mx-auto border-gray-100">{props.children}</div>;
};

export default Section;
