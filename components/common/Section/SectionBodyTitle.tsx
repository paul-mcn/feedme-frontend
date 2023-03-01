import * as React from "react";

type Props = {
  text: string;
};

const SectionBodyTitle = (props: Props) => {
  return <h3 className="text-xl font-bold text-slate-700">{props.text}</h3>;
};

export default SectionBodyTitle;
