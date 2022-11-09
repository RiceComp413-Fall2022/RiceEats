import { availableServeries, mealTimes } from "../config/config";
import { subDays, addDays } from "date-fns";

export const getCurrentMeal = () => {
  const date = new Date();
  const dateString = date.toISOString().split('T')[0];
  const hour = date.getHours();
  let mealType = "Breakfast";
  if (hour >= 11) {
    mealType = "Lunch";
  }
  if (hour >= 14) {
    mealType = "Dinner";
  }
  // console.log([dateString, mealType]);
  return [dateString, mealType];
};

export const getNextMeal = (date, mealType) => { 
  if (mealType === "Breakfast") {
    return [date, "Lunch"];
  } else if (mealType === "Lunch") {
    return [date, "Dinner"];
  } else {
    const d = createDateFromDateString(date);
    const newD = addDays(d, 1);
    const dateString = newD.toISOString().split('T')[0];
    return [dateString, "Lunch"];
  }
};

export const getPrevMeal = (date, mealType) => {
  if (mealType === "Lunch") {
    const d = createDateFromDateString(date);
    const newD = subDays(d, 1);
    const dateString = newD.toISOString().split('T')[0];
    return [dateString, "Dinner"];
  } else if (mealType === "Lunch") {
    return [date, "Breakfast"];
  } else {
    return [date, "Lunch"];
  }
};

export const getMealString1 = (date, mealType) => {
  // Example: Friday, Dinner
  const day = getDayOfWeek(date);
  return day + ", " + mealType;
};

export const getMealString2 = (date, mealType) => {
  // Example: 5:30 PM - 7:30 PM
  const day = getDayOfWeek(date);
  return mealTimes[day][mealType][0] + " - " + mealTimes[day][mealType][1]
};

export const getAvailableServeries = (date, mealType) => {
  return availableServeries[getDayOfWeek(date)][mealType];
};

const getDayOfWeek = (date) => {
  const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const d = createDateFromDateString(date);
  return weekDays[d.getDay()];
};

const createDateFromDateString = (date) => {
  const dateStringParts = date.split("-");
  const d = new Date();
  d.setFullYear(dateStringParts[0]);
  d.setMonth(dateStringParts[1] - 1);
  d.setDate(dateStringParts[2]);
  return d;
};