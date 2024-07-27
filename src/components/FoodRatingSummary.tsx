import React from "react";
import { IoStarSharp } from "react-icons/io5";

type Props = {};

const ratingsBreakdown = [
  { stars: 5, percentage: 80 },
  { stars: 4, percentage: 10 },
  { stars: 3, percentage: 5 },
  { stars: 2, percentage: 3 },
  { stars: 1, percentage: 2 },
];
const averageRating = 3.5;
const totalReviews = 1000;

function FoodRatingSummary({}: Props) {
  return (
    <div className="border-b w-full">
      <div className="flex items-center mb-4">
        <div className="text-4xl font-bold text-green-700 mr-2">
          {averageRating.toFixed(1)}
        </div>
        <div className="flex flex-col">
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <IoStarSharp key={index} className="text-xl text-green-700" />
            ))}
          </div>
          <div className="text-sm text-gray-500">{totalReviews}+ reviews</div>
        </div>
      </div>
      <div>
        {ratingsBreakdown.map(({ stars, percentage }) => (
          <div key={stars} className="flex items-center mb-1">
            <div className="text-sm text-gray-500 mr-2">{stars}</div>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="bg-green-700 h-2 rounded-full"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodRatingSummary;
