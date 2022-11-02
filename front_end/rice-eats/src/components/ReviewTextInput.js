import React from "react";

const ReviewTextInput = props => {
  const setActualReview = props.setActualReview
  const index = props.index

  function editCurrentReviews(currentReviews, newValue) {
    currentReviews[index] = newValue
    return currentReviews
  }

  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => setActualReview((currentReviews) => 
          {return editCurrentReviews(currentReviews, event.target.value)})}
      />
    </div>
  );
};

export default ReviewTextInput;