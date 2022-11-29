import React from 'react';
import Button from './Button';

export default function DietaryRestrictions(props) {
  const dietaryRestrictions = props.dietaryRestrictions;
  const setDietaryRestrictions = props.setDietaryRestrictions;

  const onToggleRestriction = (restriction) => {
    let newDietaryRestrictions = {...dietaryRestrictions};
    newDietaryRestrictions[restriction] = ! newDietaryRestrictions[restriction];
    setDietaryRestrictions(newDietaryRestrictions);
  };

  return (
    <div style={{
      display: "grid"
    }}>
      <Button onClick={() => onToggleRestriction("eggs")}>Eggs</Button>
      <Button onClick={() => onToggleRestriction("fish")}>Fish</Button>
      <Button onClick={() => onToggleRestriction("gluten")}>Gluten</Button>
      <Button onClick={() => onToggleRestriction("milk")}>Milk</Button>
      <Button onClick={() => onToggleRestriction("peanuts")}>Peanuts</Button>
      <Button onClick={() => onToggleRestriction("shellfish")}>Shellfish</Button>
      <Button onClick={() => onToggleRestriction("vegan")}>Vegan</Button>
      <Button onClick={() => onToggleRestriction("vegetarian")}>Vegetarian</Button>
    </div>
  )
}