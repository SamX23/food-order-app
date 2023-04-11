// Action Types
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const TOGGLE_BASKET = "TOGGLE_BASKET";
export const INCREASE_ITEM = "INCREASE_ITEM";
export const DECREASE_ITEM = "DECREASE_ITEM";
export const REMOVE_FROM_BASKET = "REMOVE_FROM_BASKET";

export type ActionTypes =
  | typeof ADD_TO_BASKET
  | typeof TOGGLE_BASKET
  | typeof INCREASE_ITEM
  | typeof DECREASE_ITEM
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
