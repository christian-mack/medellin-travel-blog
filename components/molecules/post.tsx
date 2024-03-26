import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface PostProps {
  title: string;
  category: string;
  authorName?: string;
  postUrl: string;
  publishDate?: string;
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
  postImgAltText,
}: PostProps) => {
  return (
    <Link href={postUrl} className="relative">
      <div className="image-overlay h-[60%] bottom-0 w-screen absolute z-[0] bg-gradient-to-b from-transparent to-zinc-900/90" />
      <div className="h-80 w-full pl-6 pr-16 sm:pr-20 pb-6">
        <Image
          src={postImgUrl}
          alt={postImgAltText || "related alt text"}
          fill
          className="z-[-1]"
        />

        <div className="flex flex-col w-full h-full justify-end relative z-[1]">
          <div>
            <p className="uppercase tracking-wide font-normal text-sm text-white/80">
              {category}
            </p>
          </div>
          <p className="text-xl sm:text-3xl text-white/90 tracking-wide font-normal">
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};
