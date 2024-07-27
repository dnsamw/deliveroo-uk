import React from "react";

type Props = {};

function ReviewCommentSkeleton({}: Props) {
  return (
    <div className="border-b py-4 w-full">
      <div role="status" className="animate-pulse w-full">
        <div className="h-5 bg-gray-200 rounded-full w-48 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded-full max-w-[360px] mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded-full mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded-full max-w-[330px] mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded-full max-w-[300px] mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded-full max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default ReviewCommentSkeleton;
