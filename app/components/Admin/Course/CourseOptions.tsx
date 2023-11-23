import React, { FC } from "react";
import { IoMdCheckmark } from "react-icons/io";

type Props = {
  active: number;
  setActive: (active: number) => void;
};

const CourseOptions: FC<Props> = ({ active, setActive }) => {
  const options = [
    "Course Information",
    "Course Options",
    "Course Content",
    "Course Preview",
  ];
  return (
    <div>
      {options.map((option: any, index: number) => (
        <div key={index} className={`w-full flex py-5`}>
          <div
            className={`w-[35px] h-[35px] rounded-full flex items-center pl-1 ${
              active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
            } relative`}
          >
            <IoMdCheckmark className="text-[25px] flex-shrink-0" />
            {index !== options.length - 1 && (
              <div
                className={`absolute h-[30px] w-1 ml-3 ${
                  active + 1 > index ? "bg-blue-500" : "bg-[#384766]"
                } bottom-[-100%]`}
              />
            )}
            <h5
              className={`pl-3 flex-shrink-0 mb-[4px] ${
                active === index
                  ? "dark:text-white text-black"
                  : "dark:text-white text-black"
              } text-[20px]`}
            >
              {option}
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseOptions;