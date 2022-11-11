import React, { useState, useEffect } from 'react';
import { realRetrieveMenus } from '../utils/APICalls';
import { getCurrentMeal } from '../utils/Meals';
import ReviewMenu from '../components/ReviewMenu';

export default function SouthDetails() {
  const [menus, setMenus] = useState();
  const [dateMeal, setDateMeal] = useState(getCurrentMeal());
  const south_menu = menus?.South;

  useEffect(() => {
    if (dateMeal) {
      realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]);
    }
  }, [setMenus, dateMeal]);

  return (
    <ReviewMenu menu={south_menu} dateMeal={dateMeal} setDateMeal={setDateMeal} />
  );
}