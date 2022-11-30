import React, { useState, useEffect } from 'react';

import { serveryName, serveryUrl, serveryMapUrl, getScreenSize, getPageMargin } from '../config/config';
import { getGlobalCurrentMeal, getOrderedServeryList, setOrderedServeryList } from '../utils/GlobalVars';
import { realRetrieveMenus } from '../utils/APICalls';

import { ErrorBoundary } from 'react-error-boundary';
import ServeryCard from '../components/ServeryCard';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';
import NoDataError from '../components/NoDataError';
import LoadingWheel from '../components/LoadingWheel';
import DietaryRestrictions from '../components/DietaryRestrictions';

function ServeryCards(props) {
  const gridTemplateColumns = props.gridTemplateColumns;
  const serveries = props.serveries;
  const menus = props.menus;
  const moveServeryToTop = props.moveServeryToTop;
  const dietaryRestrictions = props.dietaryRestrictions;

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
          dietaryRestrictions={dietaryRestrictions}
          key={index}/>
      ))}
    </div>
  );
}

export default function LandingPage() {
  const [menus, setMenus] = useState();
  const [serveries, setServeries] = useState(getOrderedServeryList());
  const [dateMeal, setDateMeal] = useState(getGlobalCurrentMeal());
  const [dietaryRestrictions, setDietaryRestrictions] = useState({
    eggs: false,
    fish: false,
    gluten: false,
    milk: false,
    peanuts: false,
    shellfish: false,
    soy: false,
    treeNuts: false,
    vegan: false,
    vegetarian: false
  });

  useEffect(() => realRetrieveMenus((response) => setMenus(response.data), dateMeal[0], dateMeal[1]), [setMenus, dateMeal]);

  const moveServeryToTop = (serveryName) => {
    let newServeries = [...serveries];
    newServeries.splice(newServeries.indexOf(serveryName), 1);
    newServeries = [serveryName, ...newServeries];
    setServeries(newServeries);
    setOrderedServeryList(newServeries);
  };
  const screenSize = getScreenSize();
  const gridTemplateColumns = screenSize === "large" ? "1fr 1fr" : screenSize === "medium" ? "1fr 1fr" : "1fr";
  const pageMargin = getPageMargin();
  
  return (
    <div style={{
      marginLeft: pageMargin,
      marginRight: pageMargin
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
        <>
          <ErrorBoundary FallbackComponent={NoDataError}>
            <ServeryCards 
              gridTemplateColumns={gridTemplateColumns} 
              serveries={serveries} 
              menus={menus} 
              moveServeryToTop={moveServeryToTop} 
              dietaryRestrictions={dietaryRestrictions} />
          </ErrorBoundary>
          <div style={{marginTop: 30}}>
            <DietaryRestrictions 
              dietaryRestrictions={dietaryRestrictions}
              setDietaryRestrictions={setDietaryRestrictions} />
          </div>
        </>
      }
    </div>
  );
}