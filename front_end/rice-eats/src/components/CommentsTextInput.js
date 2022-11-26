import React from "react";
import TextInput from "./TextInput";

const CommentsTextInput = props => {
  const reviewComments = props.reviewComments;
  const setReviewComments = props.setReviewComments;
  const index = props.index;

  return (
    <div style={{width:"100%"}}>
      <TextInput fullWidth value={reviewComments[index]} setValue={(newValue) => {
        setReviewComments((currentComments) => {
          let newComments = [...currentComments];
          newComments[index] = newValue;
          return newComments;
        });
      }} label="Comments"/>
    </div>
  );
};

export default CommentsTextInput;