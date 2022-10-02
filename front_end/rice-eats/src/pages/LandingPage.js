import React from 'react';

import { RetrieveMenus } from '../utils/APICalls';
import { serveryList, serveryName, serveryUrl, serveryColor } from '../config/config';

import ServeryCard from '../components/ServeryCard';
import TopBar from '../components/TopBar';
import MealPicker from '../components/MealPicker';

export default function LandingPage() {
  const menus = RetrieveMenus();
  return (
    <div style={{
      marginLeft: "12%",
      marginRight: "12%"
    }}>
      <div style={{marginBottom: 15}}>
        <TopBar />
      </div>

      <div style={{marginBottom: 15}}>
        <MealPicker />
      </div>
      
      <div style={{
        display: "grid", 
        gridTemplateColumns:"1fr 1fr 1fr", 
        rowGap: 15, 
        columnGap: 15
      }}>
        {serveryList.map(servery => (
          <ServeryCard
            name={serveryName[servery]}
            overallRating={menus[servery].overallRating}
            menuItems={menus[servery].menuItems}
            url={serveryUrl[servery]} />
        ))}
      </div>
    </div>
  );
}