"use client";

import TestimonialCard from "./TestimonialCard";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const testimonials = [
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
  {
    name: "Antonio Rogers",
    work: "Vercel",
    review:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an",
  },
];

const Testimonial = () => {
  return (
    <div
      id="testimonials"
      className="w-full h-fit py-20 relative bg-white"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-center">
          <span className="bg-yellow-500 px-2 text-xl font-extrabold border uppercase rounded-md mb-5">
            Testimonials
          </span>
        </div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          speed={500}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full bg-white"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
