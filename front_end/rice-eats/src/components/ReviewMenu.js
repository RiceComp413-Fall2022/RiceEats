import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';
import Table from 'react-bootstrap/Table';
import LoadingWheel from '../components/LoadingWheel';
import Button from './Button';
import Text from './Text';
import ReviewTextInput from './ReviewTextInput';
import CommentsTextInput from './CommentsTextInput';
import { PostReview } from '../utils/APICalls';
import { useNavigate } from 'react-router';
import { getIsLoggedIn, getNetId } from '../utils/GlobalVars';
import ReviewItem from './ReviewItem';

export default function ReviewMenu(props) {
  const servery = props.servery;
  const menu = props.menu;
  const dateMeal = props.dateMeal;
  const setDateMeal = props.setDateMeal;

  const [actualReview, setActualReview] = useState();
  const [reviewComments, setReviewComments] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const menuLength = menu?.menuItemDiet?.length ?? 0;
    setActualReview(new Array(menuLength).fill(null));
    setReviewComments(new Array(menuLength));
  }, [menu, setActualReview, setReviewComments]);

  // useEffect(() => console.log(reviewComments), [reviewComments]);

  const postReview = () => {
    let localReviews = [];
    for (let i = 0; i < menu.menuItemDiet.length; i++) {
      if (actualReview[i]) { // only add items that have been reivewed
        let itemReview = {};
        itemReview["menuItemDietId"] = menu.menuItemDiet[i].id;
        itemReview["rating"] = actualReview[i];
        itemReview["comments"] = reviewComments[i] ?? "";
        localReviews.push(itemReview);
      }
    }

    // Verify that we are ready to post a review (logged in and rated at least one item)
    if (localReviews.length === 0) {
      alert("Must provide at least one star rating!");
      return;
    }

    const isLoggedIn = getIsLoggedIn();
    const netId = getNetId();
    if (!isLoggedIn) {
      alert("Must log in first!");
      return;
    }

    PostReview(servery, dateMeal[0], dateMeal[1], netId, localReviews);
    navigate("/");
  };

  return (
    <>
      {!menu &&
        <div style={{marginTop:"20%", display:"flex", justifyContent:"center"}}>
          <LoadingWheel />
        </div>
      }
      {menu &&
        <div style={{
          marginLeft: "12%",
          marginRight: "12%"
          }}>
          <div style={{marginBottom: 15}}>
            <TopBar />
          </div>
          <div style={{marginBottom: 30}}>
            <MealPicker dateMeal={dateMeal} setDateMeal={setDateMeal}/>
          </div>
          
          <div>
            {actualReview && reviewComments && menu.menuItemDiet.map((item, index) => (
              <div style={{marginBottom: "10px"}}>
                <ReviewItem 
                  item={item}
                  index={index}
                  reviewComments={reviewComments}
                  setReviewComments={setReviewComments}
                  actualReview={actualReview}
                  setActualReview={setActualReview} />
              </div>
            ))}
          </div>

          {/* <div>
            <Table striped bordered hover>
              <thead>
              <tr>
                <th>Item</th>
                <th>Current Rating</th>
                <th>My Rating</th>
                <th>Comments</th>
              </tr>
              </thead>
              <tbody>
              {actualReview && reviewComments && menu.menuItemDiet.map((item, index) => (
                <tr key={index}>
                  <td>{item.menuItem_id}</td>
                  <td>{item.rating !== -1 && <>{item.rating}</>}{item.rating === -1 && <>new!</>}</td>
                  <td><ReviewTextInput index={index} actualReview={actualReview} setActualReview={setActualReview}/></td>
                  <td><CommentsTextInput index={index} reviewComments={reviewComments} setReviewComments={setReviewComments}/></td>
                </tr>
              ))}
              </tbody>
            </Table>
          </div> */}

          <Button onClick={postReview}>
            <Text white bold>Submit</Text>
          </Button>
        </div>
      }
    </>
  );
}