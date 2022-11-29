import React, { useState, useEffect } from 'react';
import { realRetrieveMenus } from '../utils/APICalls';
import ReviewMenu from '../components/ReviewMenu';
import { getGlobalCurrentMeal } from '../utils/GlobalVars';

export default function SouthDetails() {
  const [menus, setMenus] = useState();
  const [dateMeal, setDateMeal] = useState(getGlobalCurrentMeal());
  const south_menu = menus?.South;

  useEffect(() => {
    if (dateMeal) {
      realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]);
    }
  }, [setMenus, dateMeal]);

  return (
    <ReviewMenu servery="South" menu={south_menu} dateMeal={dateMeal} setDateMeal={setDateMeal} />
  );
}