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

  useEffect(() => realRetrieveMenus((response) => setMenus(response.data)), 
    [setMenus]);

  useEffect(() => {
    let itemReview = new Array(3);
    for (let i = 0; i < baker_menu.menuItemDiet.length; i++) {
      itemReview[0] = baker_menu.menuItemDiet[i].menuItem_id
      itemReview[1] = actualReview[i]
      itemReview[2] = reviewComments[i]
      console.log(itemReview)
      PostReview("Baker", itemReview)
    } 
  });

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
      <a href='/'><button>Submit</button></a>
    </div>
    </div>
  );
}