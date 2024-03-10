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
import { bebas } from "@/app/fonts";
interface PostProps {
  title: string;
  category: string;
  authorName: string;
  postUrl: string;
  publishDate: string;
  avatarImgUrl: string;
  postImgUrl: string | StaticImageData;
  postImgAltText?: string;
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
}: PostProps) => {
  return (
    <Link href={postUrl} className="relative pl-6 pr-16 sm:pr-20 pb-6 h-80">
      <div className="h-full w-full">
        <Image
          src={postImgUrl}
          alt={postImgAltText || "related alt text"}
          fill
          className="z-[-1]"
        />

        <div className="flex flex-col w-full h-full justify-end">
          <div>
            <p className="uppercase tracking-wide font-normal text-sm text-white">
              {category}
            </p>
          </div>
          <p className="text-xl sm:text-3xl text-white font-normal">{title}</p>
        </div>
      </div>
    </Link>
  );
};
