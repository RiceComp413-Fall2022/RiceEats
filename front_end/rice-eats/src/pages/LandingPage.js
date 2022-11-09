import React, { useState, useEffect } from 'react';

import { serveryName, serveryUrl, serveryMapUrl, getOrderedServeryList, setOrderedServeryList, getScreenSize } from '../config/config';
import { realRetrieveMenus } from '../utils/APICalls';
import { getCurrentMeal } from '../utils/Meals';

import { ErrorBoundary } from 'react-error-boundary';
import ServeryCard from '../components/ServeryCard';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';
import NoDataError from '../components/NoDataError';
import LoadingWheel from '../components/LoadingWheel';

function ServeryCards(props) {
  const gridTemplateColumns = props.gridTemplateColumns;
  const serveries = props.serveries;
  const menus = props.menus;
  const moveServeryToTop = props.moveServeryToTop;

  return (
    <div style={{
      display: "grid", 
      gridTemplateColumns: gridTemplateColumns, 
      rowGap: 15, 
      columnGap: 15
    }}>
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
  );
}

export default function LandingPage() {
  const [menus, setMenus] = useState();
  const [serveries, setServeries] = useState(getOrderedServeryList());
  const [dateMeal, setDateMeal] = useState(getCurrentMeal());

  useEffect(() => realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]), [setMenus, dateMeal]);

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
      
      {!menus &&
        <div style={{marginTop:"20%", display:"flex", justifyContent:"center"}}>
          <LoadingWheel />
        </div>
      }
      {menus &&
        <ErrorBoundary FallbackComponent={NoDataError}>
          <ServeryCards 
            gridTemplateColumns={gridTemplateColumns} 
            serveries={serveries} 
            menus={menus} 
            moveServeryToTop={moveServeryToTop}/>
        </ErrorBoundary>
      }
    </div>
  );
}