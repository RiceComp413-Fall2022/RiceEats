import React from 'react';
import Accordion from './Accordion';
import CommentsTextInput from './CommentsTextInput';
import ReviewTextInput from './ReviewTextInput';
import Text from './Text';

export default function ReviewItem(props) {
  const item = props.item;
  const index = props.index;
  const reviewComments = props.reviewComments;
  const setReviewComments = props.setReviewComments;
  const actualReview = props.actualReview;
  const setActualReview = props.setActualReview;
  return (
    <div key={index}>
      <Accordion 
        headComponent={
          <div style={{
            display: "flex", 
            justifyContent: "space-between",
            width: "100%",
            gap: "10px",
            alignItems: "center"}}>
            <Text>{item.menuItem_id} ({item.rating !== -1 && <>{item.rating}</>}{item.rating === -1 && <>new!</>})</Text>
            <ReviewTextInput index={index} actualReview={actualReview} setActualReview={setActualReview}/>
          </div>
        }>
        <CommentsTextInput 
          index={index} 
          reviewComments={reviewComments} 
          setReviewComments={setReviewComments} />
      </Accordion>
    </div>
  );
}