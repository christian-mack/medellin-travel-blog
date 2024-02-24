import { Post } from "@/components/Post";
import { Separator } from "@/components/ui/separator";
import { TwoColumnPostWrapper } from "@/components/TwoColumnPostWrapper";

import post1 from "/assets/images/post-1.jpg";
import post2 from "/assets/images/post-2.jpg";
import post3 from "/assets/images/post-3.jpg";
import post4 from "/assets/images/post-4.jpg";
import post5 from "/assets/images/post-5.jpg";

const LatestPosts = () => {
  return (
    <>
      <div className="w-full flex flex-col max-w-6xl" id="latestPosts">
        <div className="w-full flex justify-between pb-4 mt-12">
          <div>
            <h4 className="text-5xl font-bold">
              Latest{" "}
              <span className="italic font-light tracking-tight">Posts</span>
            </h4>
          </div>
          <div>
            <p className="uppercase font-normal tracking-widest">
              Our Recent Articles
            </p>
            <p className="font-light tracking-wide">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <Separator className="bg-zinc-900/70 mb-12" />
        <TwoColumnPostWrapper>
          <Post
            title="Solo Travel Experiences that need to be tested to try out for sure"
            category="culture"
            publishDate="Nov 30, 2023"
            authorName="Christian Mack"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post1}
            columns="two"
            postUrl="https://www.google.com"
          />
          <Post
            title="Outdoor Activities and Adventures just testing"
            category="nature"
            publishDate="Nov 30, 2023"
            authorName="Fred Hayes"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post2}
            columns="two"
            postUrl="https://www.yahoo.com"
          />
          <Post
            title="Zero-Waste Lifestyle"
            category="eco-friendly"
            publishDate="Nov 30, 2023"
            authorName="Chelsey Mack"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post3}
            columns="three"
            postUrl="https://www.walmart.com"
          />
          <Post
            title="DIY and Craft Projects that we're all using"
            category="eco-friendly"
            publishDate="Nov 30, 2023"
            authorName="Kai Moore"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post4}
            columns="three"
            postUrl="https://www.apple.com"
          />
          <Post
            title="Seasonal Pet Care here's what it would look like"
            category="nature"
            publishDate="Nov 30, 2023"
            authorName="Fred Hayes"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post5}
            columns="three"
            postUrl="https://www.bestbuy.com"
          />
        </TwoColumnPostWrapper>
      </div>
    </>
  );
};

export default LatestPosts;
