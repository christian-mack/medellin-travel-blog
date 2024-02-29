// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Image, { StaticImageData } from "next/image";

import cornerSvg from "/assets/images/corner.svg";

interface CategorySlideProps {
  title: string;
  subTitle: string;
  bgImage?: string | StaticImageData;
  bgColor?: string;
}

export const CategorySlide = ({
  title,
  subTitle,
  bgImage,
  bgColor,
}: CategorySlideProps) => {
  return (
    <div className="relative">
      <Image
        src="https://picsum.photos/540"
        alt=""
        width={540}
        height={320}
        className="rounded-3xl max-h-[320px]"
        layout="responsive"
      />

      <div className="max-w-3/4 flex items-center absolute top-0 left-0 bg-brand rounded-br-xl py-2 px-4 gap-4">
        <p className="text-3xl text-zinc-900 font-medium tracking-tight">
          {title}
        </p>
        <p className="text-md text-zinc-900 font-light tracking-wide">
          {subTitle}
        </p>
      </div>
      {/* corner below the details */}
      <Image
        src={cornerSvg}
        alt=""
        className="absolute top-[52px] left-0"
        width={20}
        height={30}
      />
    </div>
  );
};
