import React, { useEffect, useState } from "react";
import SharedModalLayout from "../../layouts/SharedModalLayout";
import ModalHeader from "../UI/ModalParts/ModalHeader";
import { ModalType } from "../../types";
import ReviewCommentSkeleton from "../UI/Skeletons/ReviewCommentSkeleton";
import { fakeReviews, Review } from "../_testdata/fakeData";
import FoodProductReview from "../FoodProductReview";

type Props = {
  onClose: () => void;
};

function RestaurantReviewsModal({ onClose }: Props) {
  const [reviews, setReviews] = useState<Review []>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      // Mimic an API call
      setTimeout(() => {
        setReviews(fakeReviews);
        setLoading(false);
      }, 2000); // 2 seconds delay
    };

    fetchData();
  }, []);
  const handleClose = () => {
    onClose();
  };
  return (
    <>
      <SharedModalLayout>
        <div className="animate-zoom w-[600px] bg-gray-100 h-screen xl:max-h-[90%] max-w[85%] overflow-x-scroll rounded flex flex-col">
          <ModalHeader
            modalType={ModalType.RestaurantReviews}
            onClose={handleClose}
            modalTitle="Reviews"
          />
          <div className="modal-body p-4">
            {loading ?<div className="reviews">
                <ReviewCommentSkeleton />
                <ReviewCommentSkeleton />
                <ReviewCommentSkeleton />
            </div> : reviews.map((review, index) => (
              <FoodProductReview key={index} review={review} />
            ))}
          </div>
          <div className="modal-footer"></div>
        </div>
      </SharedModalLayout>
    </>
  );
}

export default RestaurantReviewsModal;
