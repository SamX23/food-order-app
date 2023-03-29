// Action Types
export const ADD_TO_BASKET = "ADD_TO_BASKET";
export const TOGGLE_BASKET = "TOGGLE_BASKET";

export type ActionTypes = typeof ADD_TO_BASKET | typeof TOGGLE_BASKET;

// Action Dispatch
export const addToBasket = (data: any) => ({
  type: ADD_TO_BASKET,
  data,
});
export const toggleBasket = () => ({
  type: TOGGLE_BASKET,
});
