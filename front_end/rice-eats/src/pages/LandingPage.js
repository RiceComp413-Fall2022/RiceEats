import React from 'react';

import { RetrieveMenus } from '../utils/APICalls';
import { serveryList, serveryName, serveryUrl, serveryColor } from '../config/config';

import ServeryCard from '../components/ServeryCard';
import TopBar from '../components/TopBar';
import CurrentMeal from '../components/CurrentMeal';

export default function LandingPage() {
  const menus = RetrieveMenus();
  return (
    <div style={{
      marginLeft: "15%",
      marginRight: "15%"
    }}>
      <TopBar style={{marginBottom: 15}}/>
      <div style={{marginBottom: 20}}>
        <CurrentMeal />
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