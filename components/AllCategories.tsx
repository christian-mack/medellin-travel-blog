import { SectionContainer } from "./SectionContainer";
import { SectionHeader } from "./SectionHeader";
import { SectionWrapper } from "./SectionWrapper";

export const AllCategories = () => {
  return (
    <SectionContainer styles="bg-brand">
      <SectionWrapper elemId="allCategories">
        <SectionHeader
          title="All"
          titleLastWord="Categories"
          subtitle="our interests"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        {/* TODO: loop through categories data to render these cards */}
      </SectionWrapper>
    </SectionContainer>
  );
};
