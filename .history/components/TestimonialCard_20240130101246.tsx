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
    </div>
  );
};

export default TestimonialCard;
