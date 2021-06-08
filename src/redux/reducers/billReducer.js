import * as types from "../constant/constant";

const initialState = [];

const billReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_BILLS: {
      state = action.payLoad;
      return [...state];
    }
    case types.ADD_BILL: {
      state.push(action.payLoad);
      return [...state];
    }
    case types.DEL_BILL: {
      let index = state.findIndex((e) => action.payLoad == e.id);
      state.splice(index, 1);
      return [...state];
    }
    default:
      return [...state];
  }
};

export default billReducer;
