import React from 'react';
import Text from './Text';

export default function MealPicker(props) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <Text large bold>
        {/* Left arrow */}
        <i class="bi bi-chevron-left"></i>
      </Text>

      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center"
      }}>
        {/* Meal display */}
        <Text large bold>Wednesday, Dinner</Text>
        <Text large bold>5:30 PM - 7:30 PM</Text>
      </div>

      <Text large bold>
        {/* Right arrow */}
        <i class="bi bi-chevron-right"></i>
      </Text>
    </div>
  );
}