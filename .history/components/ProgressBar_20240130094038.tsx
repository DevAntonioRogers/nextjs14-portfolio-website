import Image from "next/image";
import { StringFieldProps } from "sanity";

const ProgressBar = ({
  title,
  percentage,
  iconPath,
}: {
  title: string;
  percentage: number;
  iconPath: string;
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-center mb-2 gap-1">
        <div className="font-medium text-gray-700">
          {title}
        </div>
        <img
          src={iconPath}
          height={60}
          width={60}
          alt={`{name} icon `}
          className="w-7 h-7"
        />
      </div>
    </div>
  );
};

export default ProgressBar;
