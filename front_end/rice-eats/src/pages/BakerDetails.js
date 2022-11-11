import React, { useEffect, useState } from 'react';
import { RetrieveMenus, realRetrieveMenus } from '../utils/APICalls';
import { getCurrentMeal } from '../utils/Meals';
import ReviewMenu from '../components/ReviewMenu';

export default function BakerDetails() {
  const [menus, setMenus] = useState();
  const [dateMeal, setDateMeal] = useState(getCurrentMeal());
  const baker_menu = menus?.Baker;

  useEffect(() => {
    if (dateMeal) {
      realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]);
    }
  }, [setMenus, dateMeal]);

  return (
    <ReviewMenu menu={baker_menu} dateMeal={dateMeal} setDateMeal={setDateMeal} />
  );
}