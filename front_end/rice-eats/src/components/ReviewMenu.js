import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';
import LoadingWheel from '../components/LoadingWheel';
import Button from './Button';
import Text from './Text';
import { PostReview } from '../utils/APICalls';
import { useNavigate } from 'react-router';
import { getIsLoggedIn, getNetId } from '../utils/GlobalVars';
import ReviewItem from './ReviewItem';
import { getPageMargin } from '../config/config';
import { getCurrentMeal } from '../utils/Meals';
import { Snackbar } from '@mui/material';

export default function ReviewMenu(props) {
  const servery = props.servery;
  const menu = props.menu;
  const dateMeal = props.dateMeal;
  const setDateMeal = props.setDateMeal;
  const pageMargin = getPageMargin();

  const [actualReview, setActualReview] = useState();
  const [reviewComments, setReviewComments] = useState();
  const [copyAlertOpen, setCopyAlertOpen] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const menuLength = menu?.menuItemDiet?.length ?? 0;
    setActualReview(new Array(menuLength).fill(null));
    setReviewComments(new Array(menuLength));
  }, [menu, setActualReview, setReviewComments]);

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
    if (dateMeal[0] !== getCurrentMeal()[0]) {
      alert("Can't submit ratings for non current meals!");
      return;
    }
    
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

    PostReview(servery, dateMeal[0], dateMeal[1], netId, localReviews, () => navigate("/"));
  };

  const shareMenu = () => {
    let shareText = "";
    shareText += servery;
    shareText += " " + dateMeal[1];
    shareText += "\n";
    menu.menuItemDiet.foreach((item) => {
      shareText += "\n" + item.menuItem_id;
    });
    shareText += "\n\nView the current menu at: https://www.rice-eats.com/";
    navigator.clipboard.writeText(shareText);
    setCopyAlertOpen(true);
    // alert("Menu info copied to clipboard!!");
  };

  const snackbarAction = (
    <Button invisible onClick={() => setCopyAlertOpen(false)}>
      <i className="bi bi-x-circle-fill" />
    </Button>
  );

  return (
    <>
      {!menu &&
        <div style={{marginTop:"20%", display:"flex", justifyContent:"center"}}>
          <LoadingWheel />
        </div>
      }
      {menu &&
        <div style={{
          marginLeft: pageMargin,
          marginRight: pageMargin
          }}>
          <div style={{marginBottom: 15}}>
            <TopBar />
          </div>
          <div style={{marginBottom: 30}}>
            <MealPicker dateMeal={dateMeal} setDateMeal={setDateMeal}/>
          </div>
          
          <div>
            {actualReview && reviewComments && menu.menuItemDiet.map((item, index) => (
              <div key={index} style={{marginBottom: "10px"}}>
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

          <div style={{marginBottom: 15}}>
            <Button onClick={postReview}>
              <Text white bold>Submit</Text>
            </Button>
          </div>

          <Button onClick={shareMenu}>
            <Text white bold>Share Menu!   <i className="bi bi-share" /></Text>
          </Button>

          <Snackbar
            open={copyAlertOpen}
            autoHideDuration={5000}
            onClose={() => setCopyAlertOpen(false)}
            message="Menu info copied to the clipboard"
            action={snackbarAction} />
        </div>
      }
    </>
  );
}