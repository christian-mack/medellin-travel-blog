import Image, { StaticImageData } from "next/image";

import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
interface PostProps {
  title: string;
  category: string;
  authorName: string;
  publishDate: string;
  avatarImgUrl: string;
  postImgUrl: string | StaticImageData;
  postImgAltText?: string;
}

const Post = ({
  title,
  category,
  authorName,
  postImgUrl,
  publishDate,
  avatarImgUrl,
  postImgAltText,
}: PostProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-96 relative">
        <Image
          src={postImgUrl}
          alt={postImgAltText || "related alt text"}
          fill
          className="rounded-3xl"
        />
      </div>
      <div className="flex justify-between items-center w-full mt-2">
        <div className="flex gap-3">
          <Badge className="uppercase tracking-widest">{category}</Badge>
          <p>{publishDate}</p>
        </div>
        <div className="w-1/5">
          <Separator className="bg-zinc-400" />
        </div>
        <div className="flex items-center gap-2">
          <Avatar>
            {/* "https://picsum.photos/200" */}
            <AvatarImage src={avatarImgUrl} />
            <AvatarFallback>MTB</AvatarFallback>
          </Avatar>
          <p className="uppercase tracking-wider">{authorName}</p>
        </div>
      </div>
      <div className="w-full pt-2">
        <p className="text-3xl text-zinc-900 font-normal tracking-tight">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Post;
