import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { FaEye } from "react-icons/fa";

export default function CardProducts() {
  return (
    <a href="" className="w-full flex flex-col gap-2 rounded-lg overflow-hidden">
      <img
        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt=""
        className="bg-cover"
      />

      <div className="flex flex-col">
        <p className="font-medium text-xl text-gray-800">Lorem</p>
        <p className="font-medium text-base text-gray-400">
          Lorem ipsum dolor sit amet
        </p>
      </div>

      <div className="flex justify-end gap-3">
        {/* Star Start */}
        <div className="flex items-center gap-1">
          <p className="text-gray-400 font-semibold">2</p>
          <BsFillStarFill />
        </div>
        {/* Star End */}

        {/* Eye Start */}
        <div className="flex items-center gap-1">
          <p className="text-gray-400 font-semibold">20.8K</p>
          <FaEye />
        </div>
        {/* Eye End */}
      </div>
    </a>
  );
}
