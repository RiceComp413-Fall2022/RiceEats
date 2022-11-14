import React from "react";
import TextInput from "./TextInput";

const CommentsTextInput = props => {
  const reviewComments = props.reviewComments;
  const setReviewComments = props.setReviewComments;
  const index = props.index;

  // function editCurrentComments(currentComments, newValue) {
  //   currentComments[index] = newValue;
  //   return currentComments;
  // }

  return (
    <div>
      <TextInput value={reviewComments[index]} setValue={(newValue) => {
        setReviewComments((currentComments) => {
          let newComments = [...currentComments];
          newComments[index] = newValue;
          return newComments;
        });
      }} />
    </div>
  );
};

export default CommentsTextInput;