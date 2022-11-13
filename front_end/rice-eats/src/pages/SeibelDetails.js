import React, { useState, useEffect } from 'react';
import { realRetrieveMenus } from '../utils/APICalls';
import { getCurrentMeal } from '../utils/Meals';
import ReviewMenu from '../components/ReviewMenu';

export default function SeibelDetails() {
  const [menus, setMenus] = useState();
  const [dateMeal, setDateMeal] = useState(getCurrentMeal());
  const seibel_menu = menus?.Seibel;

  useEffect(() => {
    if (dateMeal) {
      realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]);
    }
  }, [setMenus, dateMeal]);

  return (
    <ReviewMenu servery="Seibel" menu={seibel_menu} dateMeal={dateMeal} setDateMeal={setDateMeal} />
  );
}