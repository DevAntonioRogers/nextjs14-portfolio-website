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
  return <div>TestimonialCard</div>;
};

export default TestimonialCard;
