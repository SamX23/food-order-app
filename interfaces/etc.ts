import {
  ADD_TO_BASKET,
  DECREASE_ITEM,
  INCREASE_ITEM,
  REMOVE_FROM_BASKET,
  TOGGLE_BASKET,
  TOGGLE_DARK_MODE,
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
