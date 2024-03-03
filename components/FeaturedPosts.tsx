import Image from "next/image";

import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Post } from "@/components/Post";

import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import colombianMtns from "/assets/images/colombian-mountains.jpg";
import featuredPost1 from "/assets/images/post-5.jpg";
import featuredPost2 from "/assets/images/post-4.jpg";
import featuredPost3 from "/assets/images/post-3.jpg";
import featuredPost4 from "/assets/images/post-2.jpg";

export const FeaturedPosts = () => {
  return (
    <SectionContainer styles="bg-zinc-900 rounded-tl-[40px] rounded-tr-[40px] pb-20">
      <SectionWrapper elemId="featuredPosts">
        <SectionHeader
          title="Featured"
          titleColor="text-white"
          titleLastWord="Posts"
          titleLastWordColor="text-brand"
          subtitle="our top articles"
          subtitleColor="text-white"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          descriptionColor="text-white"
          separatorColor="bg-brand"
        />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mx-8">
          <div className="col-span-1 md:col-span-4 relative">
            <div className="flex items-center gap-3  mt-5">
              <Badge
                className="uppercase tracking-widest font-normal text-sm"
                variant="brand"
              >
                Culture
              </Badge>
              <p className="text-sm text-white tracking-wide">Nov 30, 2023</p>
            </div>
            <div className="">
              <p className="text-[54px] text-white/90 bg-zinc-900 font-normal tracking-tight rounded-br-3xl">
                Cultural Events and Creative Projects
              </p>
            </div>

            <div className="relative">
              <Image
                src={colombianMtns}
                alt=""
                width={1000}
                height={1000}
                className="rounded-2xl"
              />
              <div className="flex items-center gap-2 absolute bottom-8 left-8 bg-zinc-900/95 rounded-full px-3 py-2">
                <Avatar>
                  {/* "https://picsum.photos/200" */}
                  <AvatarImage
                    src="https://picsum.photos/200"
                    className="shadow-xl"
                  />
                  <AvatarFallback>MTB</AvatarFallback>
                </Avatar>
                <p className="tracking-wide font-light uppercase text-white/90">
                  Christian Mack
                </p>
              </div>
              <div className="absolute bottom-8 right-8 flex rounded-full bg-brand items-center justify-center w-8 h-8">
                <ArrowTopRightIcon
                  className="text-zinc-900"
                  width={17}
                  height={17}
                />
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <Post
              title="Minimalism in Everyday Life"
              category="lifestyle"
              publishDate="Nov 30, 2023"
              authorName="Liezel Smith"
              avatarImgUrl="https://picsum.photos/200"
              postImgUrl={featuredPost1}
              columns="three"
              postUrl="https://www.bestbuy.com"
            />
          </div>
        </div>
      </SectionWrapper>
    </SectionContainer>
  );
};
