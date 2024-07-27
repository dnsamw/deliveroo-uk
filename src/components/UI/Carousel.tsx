import React, { useRef } from "react";
import FoodProductCard from "../FoodProductCard";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";

const Carousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500, // Adjust the value as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full py-4 px-6">
      <h2 className="text-gray-700 text-2xl font-bold">
        Popular with other people
      </h2>
      <button
        onClick={scrollLeft}
        className="hidden sm:block absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl"
      >
        <HiOutlineArrowNarrowLeft className="w-8 h-8 text-teal-400" />
      </button>
      <div
        ref={scrollContainerRef}
        className="flex gap-4 p-4 overflow-x-auto no-scrollbar"
      >
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
        <FoodProductCard />
      </div>
      <button
        onClick={scrollRight}
        className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:shadow-xl"
      >
        <HiOutlineArrowNarrowRight className="w-8 h-8 text-teal-400" />
      </button>
    </div>
  );
};

export default Carousel;
