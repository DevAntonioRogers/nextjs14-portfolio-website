import { MdReviews } from "react-icons/md";

interface TestimonialProps {
  name: string;
  work: string;
  review: string;
}

const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps;
}) => {
  return (
    <div className="bg-white p-10 text-black flex flex-col text-center gap-5 border">
      <div className="flex justify-center">
        <MdReviews className="bg-black text-yellow-500 p-1 text-3xl rounded-md" />
      </div>
      <div className="flex flex-col gap-1">
        <span>{testimonial.name}</span>
        <span className="text-sm font-thin">
          {testimonial.work}
        </span>
      </div>
      <p className="font-light">{testimonial.review}</p>
    </div>
  );
};

export default TestimonialCard;
