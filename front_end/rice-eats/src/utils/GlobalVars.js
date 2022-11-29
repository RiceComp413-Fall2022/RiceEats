import { serveryList } from "../config/config";
import { getCurrentMeal } from "./Meals";

export const getOrderedServeryList = () => {
  try {
      const serializedState = localStorage.getItem('orderedServeryList');
      if (serializedState == null) {
          return serveryList;
      } else {
          return JSON.parse(serializedState)
      }
  } catch (e) {
      console.log("ERROR in getOrderedServeryList");
  }
};

export const setOrderedServeryList = (newList) => {
  try {
      const serializedState = JSON.stringify(newList);
      localStorage.setItem('orderedServeryList', serializedState);
  } catch (e) {
      console.log("ERROR in setOrderedServeryList");
  }
};

export const getIsLoggedIn = () => {
  try {
      const serializedState = localStorage.getItem('isLoggedIn');
      if (serializedState == null) {
          return false;
      } else {
          return JSON.parse(serializedState)
      }
  } catch (e) {
      console.log("ERROR in getIsLoggedIn");
  }
};

export const setIsLoggedIn = (loggedIn) => {
  try {
    const serializedState = JSON.stringify(loggedIn);
    localStorage.setItem('isLoggedIn', serializedState);
  } catch (e) {
      console.log("ERROR in setIsLoggedIn");
  }
};

export const getNetId = () => {
  try {
      const serializedState = localStorage.getItem('netId');
      if (serializedState == null) {
          return null;
      } else {
          return JSON.parse(serializedState)
      }
  } catch (e) {
      console.log("ERROR in getNetId");
  }
};

export const setNetId = (netId) => {
  try {
    const serializedState = JSON.stringify(netId);
    localStorage.setItem('netId', serializedState);
  } catch (e) {
      console.log("ERROR in setNetId");
  }
};

export const getGlobalCurrentMeal = () => {
  try {
    const serializedState = localStorage.getItem('currentMeal');
    if (serializedState == null) {
        return null;
    } else {
        return JSON.parse(serializedState)
    }
  } catch (e) {
      console.log("ERROR in getGlobalCurrentMeal");
  }
};

export const setGlobalCurrentMeal = (currentMeal) => {
  try {
    const serializedState = JSON.stringify(currentMeal);
    localStorage.setItem('currentMeal', serializedState);
  } catch (e) {
      console.log("ERROR in setCurrentMeal");
  }
};

export const resetGlobalCurrentMeal = () => {
  setGlobalCurrentMeal(getCurrentMeal());
}