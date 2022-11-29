import React, { useEffect, useState } from 'react';
import { realRetrieveMenus } from '../utils/APICalls';
import ReviewMenu from '../components/ReviewMenu';
import { getGlobalCurrentMeal } from '../utils/GlobalVars';

export default function BakerDetails() {
  const [menus, setMenus] = useState();
  const [dateMeal, setDateMeal] = useState(getGlobalCurrentMeal());
  const baker_menu = menus?.Baker;

  useEffect(() => {
    if (dateMeal) {
      realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]);
    }
  }, [setMenus, dateMeal]);

  return (
    <ReviewMenu servery="Baker" menu={baker_menu} dateMeal={dateMeal} setDateMeal={setDateMeal} />
  );
}