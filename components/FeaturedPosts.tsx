import { SectionContainer } from "./SectionContainer";
import { SectionHeader } from "./SectionHeader";
import { SectionWrapper } from "./SectionWrapper";

export const FeaturedPosts = () => {
  return (
    <SectionContainer styles="bg-zinc-900">
      <SectionWrapper elemId="featuredPosts">
        <SectionHeader
          title="Featured"
          titleLastWord="Posts"
          subtitle="our top articles"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </SectionWrapper>
    </SectionContainer>
  );
};
