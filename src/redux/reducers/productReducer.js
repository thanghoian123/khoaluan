import * as types from "../constant/constant";

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS: {
      state = action.payLoad;
      return [...state];
    }
    case types.ADD_PRODUCT: {
      state.push(action.payLoad);
      return [...state];
    }
    case types.DEL_PRODUCT: {
      let index = state.findIndex((e) => action.payLoad == e.id);
      state.splice(index, 1);
      return [...state];
    }
    default:
      return [...state];
  }
};

export default productReducer;
