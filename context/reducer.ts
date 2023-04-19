import { FoodData } from "@/interfaces/food";
import {
  ADD_TO_BASKET,
  ActionTypes,
  INCREASE_ITEM,
  DECREASE_ITEM,
  TOGGLE_BASKET,
  REMOVE_FROM_BASKET,
} from "./actions";
import { storeToLocal } from "@/utils/useLocalStorage";

export const initialValue: InitialValue = {
  basket: [],
  isBasketOpened: false,
};

interface InitialValue {
  basket: FoodData[];
  isBasketOpened: boolean;
}

// Reducer
export const reducer = (
  state: InitialValue,
  action: { type: ActionTypes; data: any }
) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      const isExist = state.basket.find((item) => item.id === action.data.id);

      if (!isExist) {
        storeToLocal("basket", [...state.basket, action.data]);
        return {
          ...state,
          basket: [...state.basket, action.data],
        };
      } else {
        return { ...state };
      }

    case TOGGLE_BASKET:
      return {
        ...state,
        isBasketOpened: !state.isBasketOpened,
      };

    case INCREASE_ITEM:
      storeToLocal("basket", [
        ...state.basket.map((item) =>
          item.id === action.data.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      ]);

      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.data.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case DECREASE_ITEM:
      if (action.data.quantity === 1) {
        return { ...state };
      }

      storeToLocal("basket", [
        ...state.basket.map((item) =>
          item.id === action.data.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      ]);

      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.data.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

    case REMOVE_FROM_BASKET:
      storeToLocal("basket", [
        ...state.basket.filter((item) => item.id !== action.data.id),
      ]);

      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.data.id),
      };

    default:
      return state;
  }
};
