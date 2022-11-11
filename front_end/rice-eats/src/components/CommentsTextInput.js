import React from "react";

const CommentsTextInput = props => {
  const setReviewComments = props.setReviewComments;
  const index = props.index;

  function editCurrentComments(currentComments, newValue) {
    currentComments[index] = newValue;
    return currentComments;
  }

  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => setReviewComments((currentReviews) => 
          {return editCurrentComments(currentReviews, event.target.value)})}
      />
    </div>
  );
};

export default CommentsTextInput;