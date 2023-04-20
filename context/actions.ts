// Action Types
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const TOGGLE_BASKET = "TOGGLE_BASKET";
export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";

export type ActionTypes =
  | typeof ADD_TO_BASKET
  | typeof TOGGLE_BASKET
  | typeof INCREASE_ITEM
  | typeof DECREASE_ITEM
  | typeof TOGGLE_DARK_MODE
  | typeof REMOVE_FROM_BASKET;

// Action Dispatch
export const addToBasket = (data: any) => ({
  type: ADD_TO_BASKET,
  data,
});
export const toggleBasket = () => ({
  type: TOGGLE_BASKET,
});
export const increaseItem = (data: any) => ({
  type: INCREASE_ITEM,
  data,
});
export const decreaseItem = (data: any) => ({
  type: DECREASE_ITEM,
  data,
});
export const removeFromBasket = (data: any) => ({
  type: REMOVE_FROM_BASKET,
  data,
});
export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
});
