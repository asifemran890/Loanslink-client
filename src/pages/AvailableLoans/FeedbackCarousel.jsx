import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const FeedbackCarousel = () => {
  const feedbacks = [
    {
      name: "John Smith",
      comment: "The loan process was fast and easy!"
    },
    {
      name: "Sarah Johnson",
      comment: "Great service and friendly support team."
    },
    {
      name: "Michael Lee",
      comment: "The approval time was super quick!"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        Customer Feedback
      </h2>

      <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 3000 }}>
        {feedbacks.map((fb, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white shadow-md border rounded-xl p-6 text-center">
              <p className="text-gray-700 italic mb-4">"{fb.comment}"</p>
              <h4 className="font-semibold text-lg">{fb.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeedbackCarousel;
