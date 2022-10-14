import React from 'react';
import Text from './Text';
import Button from "./Button";

export default function MealPicker(props) {
  // TODO: make this do something lol
  const onClickPrevMeal = () => {

  };

  const onClickNextMeal = () => {

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
        <Text large bold>Friday, Dinner</Text>
        <Text large bold>5:30 PM - 7:30 PM</Text>
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