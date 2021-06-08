import * as types from "../constant/constant";

export const getProducts = (products) => {
  return {
    type: types.GET_PRODUCTS,
    payLoad: products,
  };
};

export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    payLoad: product,
  };
};

export const delProduct = (id) => {
  return {
    type: types.DEL_PRODUCT,
    payLoad: id,
  };
};

export const updProduct = (id, product) => {
  return {
    type: types.UPD_PRODUCT,
    payLoad: { id, product },
  };
};

// cart
export const getCarts = (carts) => {
  return {
    type: types.GET_CARTS,
    payLoad: carts,
  };
};

export const addCart = (cart) => {
  return {
    type: types.ADD_CART,
    payLoad: cart,
  };
};

export const delCart = (id) => {
  return {
    type: types.DEL_CART,
    payLoad: id,
  };
};
// User

export const getUsers = (Urers) => {
  return {
    type: types.GET_USERS,
    payLoad: Urers,
  };
};

export const addUser = (user) => {
  return {
    type: types.ADD_USER,
    payLoad: user,
  };
};

export const delUser = (userName) => {
  return {
    type: types.DEL_USER,
    payLoad: userName,
  };
};

// Bill

export const getBills = (bills) => {
  return {
    type: types.GET_BILLS,
    payLoad: bills,
  };
};

export const addBill = (bill) => {
  return {
    type: types.ADD_BILL,
    payLoad: bill,
  };
};

export const delBill = (id) => {
  return {
    type: types.DEL_BILL,
    payLoad: id,
  };
};
