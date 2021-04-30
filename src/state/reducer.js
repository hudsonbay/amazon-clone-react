// Actions
import ADD_TO_BASKET from "./actions";

export const initialState = {
  basket: [],
};

// Selector
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, product) => product.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    default:
      return state;
  }
};
export default reducer;
