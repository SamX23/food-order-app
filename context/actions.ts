// Action Types
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const TOGGLE_BASKET = "TOGGLE_BASKET";
export const INCREASE_ITEM = "INCREASE_ITEM";

export type ActionTypes =
  | typeof ADD_TO_BASKET
  | typeof TOGGLE_BASKET
  | typeof INCREASE_ITEM;

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
