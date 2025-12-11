import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    img: "https://i.ibb.co.com/hRCty91L/Gemini-Generated-Image-3zljqs3zljqs3zlj.png",
    title: "Flexible Repayment Plans",
    desc: "Tailor your repayment schedule to match your income cycle. Never miss a payment with our custom options.",
    cta: "See Options",
    link: "/dashboard/loan-applications",
  },
  {
    img: "https://i.ibb.co.com/FLhYMp3n/Gemini-Generated-Image-scr7aqscr7aqscr7.png",
    title: "Transparent Fee Structure",
    desc: "No hidden charges or surprise costs. See exactly what you'll pay with our clear, upfront fee disclosure.",
    cta: "View Fees",
    link: "/dashboard/loan-applications",
  },
  {
    img: "https://i.ibb.co.com/VW3KPrhL/Gemini-Generated-Image-3cp9gp3cp9gp3cp9.png",
    title: "Secure & Encrypted Platform",
    desc: "Your data is protected with bank-grade 256-bit encryption. Apply with complete peace of mind.",
    cta: "Learn More",
    link: "/dashboard/loan-applications",
  },
];

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[600px] ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full">
              <img
                src={s.img}
                alt="img"
                className="absolute inset-0 w-full h-full "
              />
              <Link
                to={s.link}
                className="btn absolute inset-135 bg-gradient btn-lg px-8 py-3 rounded shadow hover:shadow-xl transition"
              >
                {s.cta}
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
