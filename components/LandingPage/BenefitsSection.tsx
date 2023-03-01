import Section, {
  SectionBody,
  SectionContainer,
  SectionTitle,
} from "components/common/Section";
import SectionBodyContent from "components/common/Section/SectionBodyContent";
import SectionBodyTitle from "components/common/Section/SectionBodyTitle";
import { ImageWithFallback } from "components/common/Image/ImageWIthFallback";
import * as React from "react";

const BenefitsSection = () => {
  const content = [
    {
      title: "Customise",
      body: "Choose what you want and when you want it.",
    },
    {
      title: "Easy",
      body: "Easy to use tools to guide you through a vast array of meals and help you choose what is right for you.",
    },
    {
      title: "Fast",
      body: "In under a minute you can generate a months worth of tasty meals.",
    },
    {
      title: "Free",
      body: "No subscriptions or payments required.",
    },
  ];

  return (
    <SectionContainer>
      <div className="grid grid-cols-2 gap-7">
        <Section>
          <SectionTitle text="Less searching. More enjoying." />
          {content.map(({ title, body }) => (
            <SectionBody>
              <SectionBodyTitle text={title} />
              <SectionBodyContent>{body}</SectionBodyContent>
            </SectionBody>
          ))}
        </Section>
        <ImageWithFallback
          src="/"
          height={400}
          width={600}
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
    </SectionContainer>
  );
};

export default BenefitsSection;
