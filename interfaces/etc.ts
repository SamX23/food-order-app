import {
  ADD_TO_BASKET,
  TOGGLE_BASKET,
  INCREASE_ITEM,
  DECREASE_ITEM,
  TOGGLE_DARK_MODE,
  REMOVE_FROM_BASKET,
} from "@/context/actions";
import { FoodData } from "./food";

export type ActionTypes =
  | typeof ADD_TO_BASKET
  | typeof TOGGLE_BASKET
  | typeof INCREASE_ITEM
  | typeof DECREASE_ITEM
  | typeof TOGGLE_DARK_MODE
  | typeof REMOVE_FROM_BASKET;

export interface InitialValue {
  basket: FoodData[];
  isBasketOpened: boolean;
  darkMode: boolean;
}
