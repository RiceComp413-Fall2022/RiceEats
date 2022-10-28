import React, { useState,useEffect } from 'react';

import { serveryName, serveryUrl, serveryMapUrl, getOrderedServeryList, setOrderedServeryList, getScreenSize } from '../config/config';
import { realRetrieveMenus, RetrieveMenus } from '../utils/APICalls';
import { getCurrentMeal } from '../utils/Meals';

import ServeryCard from '../components/ServeryCard';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';

export default function LandingPage() {
  const [menus, setMenus] = useState(RetrieveMenus());
  const [serveries, setServeries] = useState(getOrderedServeryList());
  const [dateMeal, setDateMeal] = useState(getCurrentMeal());
  console.log(dateMeal[0]);
  console.log(dateMeal[1]);
  useEffect(() => realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]), [setMenus, dateMeal]);
  // PostReview();

  const moveServeryToTop = (serveryName) => {
    let newServeries = [...serveries];
    newServeries.splice(newServeries.indexOf(serveryName), 1);
    newServeries = [serveryName, ...newServeries];
    setServeries(newServeries);
    setOrderedServeryList(newServeries);
  };
  const screenSize = getScreenSize();
  const gridTemplateColumns = screenSize === "large" ? "1fr 1fr 1fr" : screenSize === "medium" ? "1fr 1fr" : "1fr";
  
  return (
    <div style={{
      marginLeft: "12%",
      marginRight: "12%"
    }}>
      <div style={{marginBottom: 15}}>
        <TopBar />
      </div>

      <div style={{marginBottom: 30}}>
        <MealPicker dateMeal={dateMeal} setDateMeal={setDateMeal} />
      </div>
      
      <div style={{
        display: "grid", 
        gridTemplateColumns: gridTemplateColumns, 
        rowGap: 15, 
        columnGap: 15
      }}>
        {menus === undefined && (
          <div> hi</div>
        )}
        {serveries.map((servery, index) => (
          <ServeryCard
            name={serveryName[servery]}
            overallRating={menus[servery].overallRating}
            menuItems={menus[servery].menuItemDiet}
            url={serveryUrl[servery]} 
            mapUrl={serveryMapUrl[servery]}
            moveToTop={() => moveServeryToTop(serveryName[servery])}
            isTop={index === 0}
            key={index}/>
        ))}
      </div>
    </div>
  );
}