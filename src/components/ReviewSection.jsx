import React from 'react';

const ReviewSection = ({ reviews, averageRating, reviewCount }) => {
  // Function to render star ratings
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-lg ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-semibold font-poppins text-[#3A3A3A] mb-6">
        Customer Reviews
      </h2>
      
      {/* Average Rating Summary */}
      <div className="flex items-center gap-4 mb-8 p-6 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-3xl font-bold text-[#3A3A3A]">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex justify-center mt-1">
            {renderStars(Math.round(averageRating))}
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {reviewCount} review{reviewCount !== 1 ? 's' : ''}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-b-0">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-[#3A3A3A]">{review.user}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[#616161] mt-2">{review.comment}</p>
          </div>
        ))}
      </div>

      {/* No Reviews Message */}
      {/* {reviews.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          No reviews yet. Be the first to review this product!
        </div>
      )} */}
    </div>
  );
};

export default ReviewSection;