import { ADD_TO_BASKET, ActionTypes, TOGGLE_BASKET } from "./actions";

export const initialValue = {
  basket: {
    items: [],
    opened: false,
  },
};

interface InitialValue {
  basket: {
    items: [];
    opened: boolean;
  };
}

// Reducer
export const reducer = (
  state: InitialValue,
  action: { type: ActionTypes; data: any }
) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: {
          ...state.basket,
          items: [...state.basket.items, action.data],
        },
      };
    case TOGGLE_BASKET:
      return {
        ...state,
        basket: {
          ...state.basket,
          opened: !state.basket.opened,
        },
      };

    default:
      return state;
  }
};
