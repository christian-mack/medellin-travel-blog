"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { CategorySlide } from "./CategorySlide";

interface CategoryCarouselProps {
  //
}

export const CategoryCarousel = ({}: CategoryCarouselProps) => {
  return (
    <div className="w-full">
      <Swiper
        className="mySwiper"
        slidesPerView={2.5}
        centeredSlides={true}
        spaceBetween={30}
        freeMode={true}
        rewind={true}
        navigation={{
          enabled: true,
          //   nextEl: "next",
          //   prevEl: "prev",
        }}
        modules={[FreeMode, Navigation]}
      >
        <SwiperSlide>
          <CategorySlide title="Tech" subTitle="discover the future" />
        </SwiperSlide>
        <SwiperSlide>
          <CategorySlide title="Lifestyle" subTitle="everyday habits of life" />
        </SwiperSlide>
        <SwiperSlide>
          <CategorySlide title="Pets" subTitle="our best friends" />
        </SwiperSlide>
        <SwiperSlide>
          <CategorySlide title="Nature" subTitle="breathtaking beauty" />
        </SwiperSlide>
        <SwiperSlide>
          <CategorySlide title="Eco-friendly" subTitle="save our planet" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
