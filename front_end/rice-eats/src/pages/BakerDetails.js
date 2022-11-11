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
  //const [allReviews, setAllReviews] = useState(new Array(baker_menu.menuItemDiet.length));
  
  useEffect(() => realRetrieveMenus((response) => {
    setMenus(response.data);
  }), 
    [setMenus]);

  // useEffect(() => {
    
  // });

  function post_review() {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;

    let localReviews = new Array(baker_menu.menuItemDiet.length);
    for (let i = 0; i < baker_menu.menuItemDiet.length; i++) {
      let itemReview = {};
      itemReview["menuItemDietId"] = baker_menu.menuItemDiet[i].id;
      // console.log(baker_menu.menuItemDiet[i])
      itemReview["rating"] = actualReview[i] ?? "";
      itemReview["comments"] = reviewComments[i] ?? "";
      localReviews[i] = itemReview;
    }
    //setAllReviews(localReviews);
    //console.log(localReviews);
    PostReview("Baker", currentDate, localReviews);
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