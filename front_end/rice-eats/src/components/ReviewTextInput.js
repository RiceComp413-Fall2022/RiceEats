import React, { useState, useEffect } from "react";
import Rating from '@mui/material/Rating';

const ReviewTextInput = props => {
  const actualReview = props.actualReview;
  const setActualReview = props.setActualReview;
  const index = props.index;
  const [rating, setRating] = useState(0);
  
  useEffect(() => setRating(actualReview[index] ?? 0), 
    [actualReview, index]);

  return (
    <div>
      <Rating 
        value={rating} 
        onChange={(event, rating) => 
          setActualReview((currentReviews) => {
            const newReviews = [...currentReviews];
            newReviews[index] = rating;
            return newReviews;
          })
        }
        />
    </div>
  );
};

export default ReviewTextInput;