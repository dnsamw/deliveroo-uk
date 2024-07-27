import React, { useEffect, useState } from "react";
import SharedModalLayout from "../../layouts/SharedModalLayout";
import ModalHeader from "../UI/ModalParts/ModalHeader";
import { ModalType } from "../../types";
import ReviewCommentSkeleton from "../UI/Skeletons/ReviewCommentSkeleton";
import { fakeReviews, Review } from "../_testdata/fakeData";
import FoodProductReview from "../FoodProductReview";
import CenterModalContainerLayout from "../../layouts/CenterModalContainerLayout";
import FoodRatingSummary from "../FoodRatingSummary";

type Props = {
  onClose: () => void;
};

function RestaurantReviewsModal({ onClose }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
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
        <CenterModalContainerLayout>
          <div className="animate-zoom mb-32 mt-[60px] w-full xl:w-[600px] bg-white h-full xl:max-h-[90%] rounded flex flex-col overflow-y-scroll">
            <ModalHeader
              modalType={ModalType.RestaurantReviews}
              onClose={handleClose}
              modalTitle="Reviews"
            />
            <div className="modal-body p-4">
              {loading ? (
                <div className="reviews">
                  <ReviewCommentSkeleton />
                  <ReviewCommentSkeleton />
                  <ReviewCommentSkeleton />
                </div>
              ) : (
                <>
                  <FoodRatingSummary />
                  <h4 className="text-xl font-semibold p-4">All reviews</h4>
                  {reviews.map((review, index) => (
                    <FoodProductReview key={index} review={review} />
                  ))}
                </>
              )}
            </div>
            <div className="modal-footer absolute bottom-0 w-full xl:w-[600px] min-h-32 bg-white p-4 flex justify-center items-center border-t">
              <button className="bg-teal-400 hover:bg-teal-500 text-lg text-white font-semibold border px-4 py-3 rounded-md w-full cursor-pointer">
                Back to menu
              </button>
            </div>
          </div>
        </CenterModalContainerLayout>
      </SharedModalLayout>
    </>
  );
}

export default RestaurantReviewsModal;
