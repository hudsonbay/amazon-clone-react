// Actions
import { REMOVE_FROM_BASKET, ADD_TO_BASKET, SET_USER } from "./actions";

export const initialState = {
  basket: [],
  user: null,
  loginStatus: false,
};

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, product) => product.price + amount, 0);
};

const reducer = (state, action) => {
  console.log("action:", action);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    }
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};
export default reducer;
