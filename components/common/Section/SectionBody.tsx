import * as React from "react";

type SectionBodyProps = {
  children: React.ReactNode;
};

const SectionBody = (props: SectionBodyProps) => {
  return <div className="mt-3">{props.children}</div>;
};

export default SectionBody;
