import * as React from "react";
import Section, {
  SectionBody,
  SectionBodyContent,
  SectionBodyTitle,
  SectionContainer,
  SectionTitle,
} from "components/common/Section";
import { CTAButton } from "components/common/Button";

const SecondaryCTASection = () => {
  return (
    <SectionContainer>
      <Section>
        <SectionTitle text="Explore" />
        <SectionBody>
          <SectionBodyContent>
            Unsure about where to start? Choose from a growing array of meals
          </SectionBodyContent>
        </SectionBody>
      </Section>
      <div className="mt-5">
        <CTAButton label="Have a browse" />
      </div>
    </SectionContainer>
  );
};

export default SecondaryCTASection;
