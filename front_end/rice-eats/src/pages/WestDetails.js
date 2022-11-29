import React, { useState, useEffect } from 'react';
import { realRetrieveMenus } from '../utils/APICalls';
import ReviewMenu from '../components/ReviewMenu';
import { getGlobalCurrentMeal } from '../utils/GlobalVars';

export default function WestDetails() {
  const [menus, setMenus] = useState();
  const [dateMeal, setDateMeal] = useState(getGlobalCurrentMeal());
  const west_menu = menus?.West;

  useEffect(() => {
    if (dateMeal) {
      realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]);
    }
  }, [setMenus, dateMeal]);

  return (
    <ReviewMenu servery="West" menu={west_menu} dateMeal={dateMeal} setDateMeal={setDateMeal} />
  );
}