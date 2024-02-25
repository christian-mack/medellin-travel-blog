import { CategoryCarousel } from "./CategoryCarousel";
import { SectionContainer } from "./SectionContainer";
import { SectionHeader } from "./SectionHeader";
import { SectionWrapper } from "./SectionWrapper";

export const AllCategories = () => {
  return (
    <SectionContainer styles="bg-brand rounded-bl-[50px] rounded-br-[50px] pb-28 flex-col">
      <SectionWrapper elemId="allCategories">
        <SectionHeader
          title="All"
          titleLastWord="Categories"
          subtitle="our interests"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </SectionWrapper>
      <CategoryCarousel />
    </SectionContainer>
  );
};
