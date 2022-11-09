import React, { useState, useEffect } from 'react';
import { realRetrieveMenus, RetrieveMenus } from '../utils/APICalls';
import { getCurrentMeal } from '../utils/Meals';
import ReviewMenu from '../components/ReviewMenu';

export default function NorthDetails() {
  const [menus, setMenus] = useState();
  const [dateMeal, setDateMeal] = useState(getCurrentMeal());
  const north_menu = menus?.North;

  useEffect(() => {
    if (dateMeal) {
      // console.log("what");
      // console.log(dateMeal);
      realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]);
    }
  }, [setMenus, dateMeal]);

  return (
    <ReviewMenu menu={north_menu} dateMeal={dateMeal} setDateMeal={setDateMeal} />
  );
}