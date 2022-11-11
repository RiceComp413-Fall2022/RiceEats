import React, { useState, useEffect } from 'react';
import { realRetrieveMenus } from '../utils/APICalls';
import { getCurrentMeal } from '../utils/Meals';
import ReviewMenu from '../components/ReviewMenu';

export default function WestDetails() {
  const [menus, setMenus] = useState();
  const [dateMeal, setDateMeal] = useState(getCurrentMeal());
  const west_menu = menus?.West;

  useEffect(() => {
    if (dateMeal) {
      realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]);
    }
  }, [setMenus, dateMeal]);

  return (
    <ReviewMenu menu={west_menu} dateMeal={dateMeal} setDateMeal={setDateMeal} />
  );
}