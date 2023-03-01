import * as React from "react";

type SectionTitleProps = {
  text: string;
};

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <h2 className="text-3xl font-semibold text-slate-900 mb-4">
      {props.text}
    </h2>
  );
};

export default SectionTitle;
