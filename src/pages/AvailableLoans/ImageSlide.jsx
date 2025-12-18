import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation, Autoplay } from "swiper/modules";

export default function ImageSlide() {
  return (
    <>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation, Autoplay]}
        autoplay={{ delay: 1500, disableOnInteraction: true }}
        className="mySwiper w-60 md:w-160 lg:w-110 h-50 md:h-80"
        loop={true}
      >
        <SwiperSlide>
          <img
            className="w-100 md:w-160 lg:w-110 h-50 md:h-80 rounded-2xl"
            src="https://i.ibb.co.com/hRCty91L/Gemini-Generated-Image-3zljqs3zljqs3zlj.png"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-60 md:w-160 lg:w-110 h-50 md:h-80 rounded-2xl"
            src="https://i.ibb.co.com/FLhYMp3n/Gemini-Generated-Image-scr7aqscr7aqscr7.png"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-60 md:w-160 lg:w-110 h-50 md:h-80 rounded-2xl"
            src="https://i.ibb.co.com/VW3KPrhL/Gemini-Generated-Image-3cp9gp3cp9gp3cp9.png"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
