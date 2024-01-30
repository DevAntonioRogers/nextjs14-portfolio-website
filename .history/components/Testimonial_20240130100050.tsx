"use clinet"

import TestimonialCard from "./TestimonialCard"
import { Autoplay } from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"

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
        
      </div>
    </div>
  )
};

export default Testimonial;
