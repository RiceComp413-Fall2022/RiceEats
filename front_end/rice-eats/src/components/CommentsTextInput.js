import React from "react";
import TextInput from "./TextInput";

const CommentsTextInput = props => {
  const value = props.value;
  const setReviewComments = props.setReviewComments;
  const index = props.index;

  function editCurrentComments(currentComments, newValue) {
    currentComments[index] = newValue;
    return currentComments;
  }

  return (
    <div>
      <TextInput value={value} setValue={(newValue) => 
        setReviewComments((currentReviews) => 
          editCurrentComments(currentReviews, newValue))} />
    </div>
  );
};

export default CommentsTextInput;