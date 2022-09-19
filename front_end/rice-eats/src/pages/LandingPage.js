import React from 'react';
import ServeryCard from '../components/ServeryCard';
import { RetrieveMenus } from '../utils/APICalls';

export default function LandingPage() {
  const menus = RetrieveMenus();
  return (
    <div>
      {menus.map((servery) => (
        <ServeryCard />
      ))}
    </div>
  );
}