import {
  ADD_TO_BASKET,
  ActionTypes,
  INCREASE_ITEM,
  TOGGLE_BASKET,
} from "./actions";

export const initialValue = {
  basket: [],
  isBasketOpened: false,
};

interface InitialValue {
  basket: [];
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
        return {
          ...state,
          basket: [...state.basket, action.data],
        };
      }
    case TOGGLE_BASKET:
      return {
        ...state,
        isBasketOpened: !state.isBasketOpened,
      };

    default:
      return state;
  }
};
