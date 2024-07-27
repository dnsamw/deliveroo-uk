import React from 'react'
import { Review } from './_testdata/fakeData';
import { IoStarSharp } from 'react-icons/io5';

type Props = {
    review:Review
}

function FoodProductReview({review}: Props) {
    return (
        <div className="border-b p-4 rounded">
          <div className="flex items-center mb-4">
            <img src={review.avatar} alt="User profile" className="w-6 h-6 rounded-full mr-3" />
            <div>
              <h2 className="text-sm font-medium">{review.name}</h2>
              
            </div>
          </div>
          <div className="flex items-center mb-2">
            {[...Array(review.rating)].map((_, index) => (
              <IoStarSharp key={index} className="text-xl text-green-700" />
            ))}
            <p className="pl-2 text-sm text-gray-500">{review.date}</p>
          </div>
          <p className="text-md">{review.comment}</p>   
        </div>
      );
}

export default FoodProductReview