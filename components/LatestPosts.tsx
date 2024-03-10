import { Post } from "@/components/Post";
import { Separator } from "@/components/ui/separator";
import { TwoColumnPostWrapper } from "@/components/TwoColumnPostWrapper";

import post1 from "/assets/images/post-1.jpg";
import post2 from "/assets/images/post-2.jpg";
import post3 from "/assets/images/post-3.jpg";
import post4 from "/assets/images/post-4.jpg";
import post5 from "/assets/images/post-5.jpg";
import { SectionHeader } from "./SectionHeader";
import { SectionWrapper } from "./SectionWrapper";

export const LatestPosts = () => {
  return (
    <>
      <SectionWrapper elemId="latestPosts">
        <SectionHeader
          title="Latest"
          titleLastWord="Posts"
          subtitle="our recent articles"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <TwoColumnPostWrapper>
          <Post
            title="Solo Travel Experiences that need to be tested to try out for sure"
            category="culture"
            publishDate="Nov 30, 2023"
            authorName="Christian Mack"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post1}
            postUrl="https://www.google.com"
          />
          <Post
            title="Outdoor Activities and Adventures just testing"
            category="nature"
            publishDate="Nov 30, 2023"
            authorName="Fred Hayes"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post2}
            postUrl="https://www.yahoo.com"
          />
          <Post
            title="Zero-Waste Lifestyle"
            category="eco-friendly"
            publishDate="Nov 30, 2023"
            authorName="Chelsey Mack"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post3}
            postUrl="https://www.walmart.com"
          />
          <Post
            title="DIY and Craft Projects that we're all using"
            category="eco-friendly"
            publishDate="Nov 30, 2023"
            authorName="Kai Moore"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post4}
            postUrl="https://www.apple.com"
          />
          <Post
            title="Seasonal Pet Care here's what it would look like"
            category="nature"
            publishDate="Nov 30, 2023"
            authorName="Fred Hayes"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post5}
            postUrl="https://www.bestbuy.com"
          />
        </TwoColumnPostWrapper>
      </SectionWrapper>
    </>
  );
};
