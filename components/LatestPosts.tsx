import Post from "@/components/Post";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import post1 from "/assets/images/post-1.jpg";
import post2 from "/assets/images/post-2.jpg";
import { PostWrapper } from "./PostWrapper";

const LatestPosts = () => {
  return (
    <>
      <div className="w-full flex flex-col max-w-6xl" id="latestPosts">
        <div className="w-full flex justify-between pb-4 mt-12">
          <div>
            <h4 className="text-5xl font-bold">
              Latest <span className="italic font-light">Posts</span>
            </h4>
          </div>
          <div>
            <p className="uppercase font-medium">Our Recent Articles</p>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <Separator className="bg-zinc-900/70 mb-12" />
        <PostWrapper>
          <Post
            title="Solo Travel Experiences"
            category="culture"
            publishDate="Nov 30, 2023"
            authorName="Christian Mack"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post1}
          />
          <Post
            title="Outdoor Activities and Adventures"
            category="nature"
            publishDate="Nov 30, 2023"
            authorName="Fred Hayes"
            avatarImgUrl="https://picsum.photos/200"
            postImgUrl={post2}
          />
        </PostWrapper>
      </div>
    </>
  );
};

export default LatestPosts;
