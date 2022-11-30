import React from 'react';
import { getScreenSize } from '../config/config';
import Button from './Button';
import Text from './Text';

export default function DietaryRestrictions(props) {
  const dietaryRestrictions = props.dietaryRestrictions;
  const setDietaryRestrictions = props.setDietaryRestrictions;

  const onToggleRestriction = (restriction) => {
    let newDietaryRestrictions = {...dietaryRestrictions};
    newDietaryRestrictions[restriction] = ! newDietaryRestrictions[restriction];
    setDietaryRestrictions(newDietaryRestrictions);
  };

  const gridTemplateColumns = getScreenSize() === "large" ? "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr" : "1fr 1fr 1fr";

  const onColor = "#B1AEEB";
  const offColor = "#8D8E93";

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: gridTemplateColumns,
      rowGap: 10,
      columnGap: 10
    }}>
      <Button color={dietaryRestrictions.eggs ? onColor : offColor} onClick={() => onToggleRestriction("eggs")}><Text white bold>Eggs</Text></Button>
      <Button color={dietaryRestrictions.fish ? onColor : offColor} onClick={() => onToggleRestriction("fish")}><Text white bold>Fish</Text></Button>
      <Button color={dietaryRestrictions.gluten ? onColor : offColor} onClick={() => onToggleRestriction("gluten")}><Text white bold>Gluten</Text></Button>
      <Button color={dietaryRestrictions.milk ? onColor : offColor} onClick={() => onToggleRestriction("milk")}><Text white bold>Milk</Text></Button>
      <Button color={dietaryRestrictions.peanuts ? onColor : offColor} onClick={() => onToggleRestriction("peanuts")}><Text white bold>Peanuts</Text></Button>
      <Button color={dietaryRestrictions.treeNuts ? onColor : offColor} onClick={() => onToggleRestriction("treeNuts")}><Text white bold>Tree Nuts</Text></Button>
      <Button color={dietaryRestrictions.shellfish ? onColor : offColor} onClick={() => onToggleRestriction("shellfish")}><Text white bold>Shellfish</Text></Button>
      <Button color={dietaryRestrictions.vegan ? onColor : offColor} onClick={() => onToggleRestriction("vegan")}><Text white bold>Vegan</Text></Button>
      <Button color={dietaryRestrictions.vegetarian ? onColor : offColor} onClick={() => onToggleRestriction("vegetarian")}><Text white bold>Vegetarian</Text></Button>
    </div>
  )
}