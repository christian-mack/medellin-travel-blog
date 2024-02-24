/**
 * This file could be split into two if needs change but they are virtually identical as of now
 *
 */
import Image, { StaticImageData } from "next/image";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";
interface PostProps {
  title: string;
  category: string;
  authorName: string;
  postUrl: string;
  publishDate: string;
  avatarImgUrl: string;
  postImgUrl: string | StaticImageData;
  postImgAltText?: string;
  columns: string;
}

export const Post = ({
  title,
  category,
  authorName,
  postUrl,
  postImgUrl,
  publishDate,
  avatarImgUrl,
  postImgAltText,
  columns,
}: PostProps) => {
  let cols;
  let arrow;

  switch (columns) {
    case "two":
      cols = "md:col-span-3";
      arrow = (
        <div className="bg-brand absolute bottom-8 right-8 rounded-full">
          <ArrowTopRightIcon width={20} height={20} className="m-2" />
        </div>
      );
      break;
    case "three":
      cols = "md:col-span-2";
      arrow = (
        <div className="bg-brand absolute top-8 right-8 rounded-full">
          <PlusIcon width={20} height={20} className="m-2" />
        </div>
      );
      break;
    default:
      cols = "md:col-span-3";
      arrow = (
        <div className="bg-brand absolute bottom-8 right-8 rounded-full">
          <ArrowTopRightIcon width={20} height={20} className="m-2" />
        </div>
      );
  }

  return (
    <div
      className={cn("flex flex-col col-span-6 items-center justify-top", cols)}
    >
      <Link href={postUrl}>
        {/* post image */}
        <div className="w-full h-96 relative">
          <Image
            src={postImgUrl}
            alt={postImgAltText || "related alt text"}
            fill
            className="rounded-3xl"
          />
          {arrow}
        </div>

        {/* post details */}
        <div className="flex justify-between items-center w-full mt-4">
          <div className="flex items-center gap-3">
            <Badge
              className="uppercase tracking-widest font-normal text-sm"
              variant="brand"
            >
              {category}
            </Badge>
            <p className="text-sm">{publishDate}</p>
          </div>
          <div className="hidden md:flex flex-1 md:px-6">
            <Separator className="bg-zinc-400" />
          </div>
          <div className="flex items-center gap-2">
            <Avatar>
              {/* "https://picsum.photos/200" */}
              <AvatarImage src={avatarImgUrl} className="shadow-xl" />
              <AvatarFallback>MTB</AvatarFallback>
            </Avatar>
            <p className="uppercase tracking-wider font-normal text-sm">
              {authorName}
            </p>
          </div>
        </div>

        {/* title */}
        <div className="w-full pt-2">
          <p className="text-3xl text-zinc-900 font-normal tracking-tight">
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
};
