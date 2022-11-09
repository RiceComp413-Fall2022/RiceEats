import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { RetrieveMenus, realRetrieveMenus, PostReview } from '../utils/APICalls';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';
import ReviewTextInput from '../components/ReviewTextInput';
import CommentsTextInput from '../components/CommentsTextInput';

export default function BakerDetails() {
  const [menus, setMenus] = useState(RetrieveMenus());
  const baker_menu = menus.Baker;
  const [actualReview, setActualReview] = useState(new Array(baker_menu.menuItemDiet.length));
  const [reviewComments, setReviewComments] = useState(new Array(baker_menu.menuItemDiet.length));
  const [allReviews, setAllReviews] = useState([]);

  useEffect(() => realRetrieveMenus((response) => {
    console.log(response);
    setMenus(response.data);
    console.log(response.data);
  }), 
    [setMenus]);

  useEffect(() => {
    console.log(actualReview)
    for (let i = 0; i < baker_menu.menuItemDiet.length; i++) {
      let itemReview = {};
      itemReview["menuItemDietId"] = baker_menu.menuItemDiet[i].id;
      // console.log(baker_menu.menuItemDiet[i])
      console.log("actualreview " + actualReview[i]);
      itemReview["rating"] = actualReview[i] ?? "";
      itemReview["comments"] = reviewComments[i] ?? "";
      let localReviews = allReviews;
      localReviews[i] = itemReview;
      setAllReviews(localReviews);
    } 
  });

  function post_review() {
    console.log(allReviews);
    PostReview("Baker", allReviews);
  }

  return (
    <div style={{
      marginLeft: "12%",
      marginRight: "12%"
      }}>
    <div style={{marginBottom: 15}}>
      <TopBar />
     </div>
     <div style={{marginBottom: 30}}>
      <MealPicker />
    </div>
    <div>
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
        {baker_menu.menuItemDiet.map((item, index) => (
          <tr>
            <td>{item.menuItem_id}</td>
            <td>{item.rating}</td>
            <td><ReviewTextInput index={index} setActualReview = {setActualReview}/></td>
            <td><CommentsTextInput index={index} setReviewComments = {setReviewComments}/></td>
          </tr>
        ))}
        </tbody>
      </Table>
      <button onClick={() => post_review()} >Submit</button>
    </div>
    </div>
  );
}