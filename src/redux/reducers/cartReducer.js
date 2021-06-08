import * as types from "../constant/constant";

const initialState = [];

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CARTS: {
      state = action.payLoad;
      return [...state];
    }
    case types.ADD_CART: {
      const tempItem = action.payLoad;
      const index = state.findIndex((e) => e.id == tempItem.id);
      if (index !== -1) {
        state[index].quantity += tempItem.quantity;
      } else {
        state.push(tempItem);
      }
      return [...state];
    }
    case types.DEL_CART: {
      const index = state.findIndex((item) => item.id == action.payLoad);
      if (index > 0) {
        state.splice(index, 1);
      }
      return [...state];
    }
    default:
      return [...state];
  }
};

export default carReducer;
