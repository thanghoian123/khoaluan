import * as types from "../constant/constant";

const initialState = [];

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS: {
      state = action.payLoad;
      return [...state];
    }

    case types.DEL_USER: {
      const index = state.findIndex((e) => (e.userName = action.payLoad));
      state.splice(index, 1);
      return [...state];
    }
    default:
      return [...state];
  }
};

export default userReducer;
