import React, { useState, useEffect } from 'react';
import Text from './Text';
import Button from "./Button";
import { getMealString1, getMealString2, getMealString3, getNextMeal, getPrevMeal } from '../utils/Meals';
import { setGlobalCurrentMeal } from '../utils/GlobalVars';

export default function MealPicker(props) {
  // TODO: make this do something lol
  const dateMeal = props.dateMeal;
  const setDateMeal = (dm) => {
    setGlobalCurrentMeal(dm);
    props.setDateMeal(dm);
  };
  // const [dateMeal, setDateMeal] = useState(getCurrentMeal());
  const [mealString1, setMealString1] = useState("Friday, Dinner");
  const [mealString2, setMealString2] = useState("5:30 PM - 7:30 PM");
  const [mealString3, setMealString3] = useState("11/16/22");

  useEffect(() => {
    setMealString1(getMealString1(dateMeal[0], dateMeal[1]));
    setMealString2(getMealString2(dateMeal[0], dateMeal[1]));
    setMealString3(getMealString3(dateMeal[0], dateMeal[1]));
  }, [dateMeal]);

  const onClickPrevMeal = () => {
    const [date, meal] = getPrevMeal(dateMeal[0], dateMeal[1]);
    setDateMeal([date, meal]);
  };

  const onClickNextMeal = () => {
    const [date, meal] = getNextMeal(dateMeal[0], dateMeal[1]);
    setDateMeal([date, meal]);
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      {/* Left arrow */}
      <Button invisible onClick={onClickPrevMeal}>
        <Text large bold>
          <i className="bi bi-chevron-left"></i>
        </Text>
      </Button>

      {/* Meal display */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center"
      }}>
        <Text large bold centerText>{mealString3}</Text>
        <Text large bold centerText>{mealString1}</Text>
        <Text large bold centerText>{mealString2}</Text>
      </div>

      {/* Right arrow */}
      <Button invisible onClick={onClickNextMeal}>
        <Text large bold>
          <i className="bi bi-chevron-right"></i>
        </Text>
      </Button>
    </div>
  );
}