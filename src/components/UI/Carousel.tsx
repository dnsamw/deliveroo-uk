import React, { Ref, useRef } from 'react';
import FoodItemCard from '../FoodItemCard';
import { IoReturnDownBack, IoReturnDownForward } from "react-icons/io5";

const Carousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -500, // Adjust the value as needed
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 500, // Adjust the value as needed
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:shadow-xl"
      >
        <IoReturnDownBack className='w-8 h-8 text-teal-400'/>
      </button>
      <div
        ref={scrollContainerRef}
        className="flex gap-4 p-4 bg-white overflow-x-auto no-scrollbar"
      >
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
        <FoodItemCard />
      </div>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:shadow-xl"
      >
        <IoReturnDownForward className='w-8 h-8 text-teal-400'/>
      </button>
    </div>
  );
};

export default Carousel;
