import React from 'react';
import ServeryCard from '../components/ServeryCard';
import TopBar from '../components/TopBar';
import CurrentMeal from '../components/CurrentMeal';
import { RetrieveMenus } from '../utils/APICalls';

export default function LandingPage() {
  const menus = RetrieveMenus();
  return (
    <div>
      <TopBar style={{marginBottom: 15}}/>
      <CurrentMeal style={{marginBottom: 30}}/>
      <div style={{display: "grid", gridTemplateColumns:"1fr 1fr 1fr", rowGap: 15}}>
        <ServeryCard 
          name="South" 
          overallRating={menus.south.overallRating} 
          menuItems={menus.south.menuItems} 
          url="/south"/>
        <ServeryCard
          name="West" 
          overallRating={menus.west.overallRating} 
          menuItems={menus.west.menuItems}
          url="/west"/>
        <ServeryCard 
          name="North" 
          overallRating={menus.north.overallRating} 
          menuItems={menus.north.menuItems}
          url="/north"/>
        <ServeryCard 
          name="Seibel" 
          overallRating={menus.seibel.overallRating} 
          menuItems={menus.seibel.menuItems}
          url="/seibel"/>
        <ServeryCard 
          name="Baker" 
          overallRating={menus.baker.overallRating} 
          menuItems={menus.baker.menuItems}
          url="/baker"/>
      </div>
    </div>
  );
}