import axios from "axios";
let baseUrl = process.env.REACT_APP_API_URL;

const getListCategory = async () => {
  return axios.get(`${baseUrl}category`);
};

const getListProduct = async (page, size) => {
  return axios.get(`${baseUrl}product?page=${page}&size=${size}`);
};

const createProduct = async (product, accessToken) => {
  var config = {
    method: "post",
    url: `${baseUrl}product`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    data: product,
  };
  return axios(config);
};

const delProduct = async (id, accessToken) => {
  var config = {
    method: "delete",
    url: `${baseUrl}product/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  };
  return axios(config);
};

const updProduct = async (id, accessToken, product) => {
  var config = {
    method: "put",
    url: `${baseUrl}product/${id}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    data: product,
  };
  return axios(config);
};

const getProductById = async (id) => {
  return axios.get(`${baseUrl}product/${id}`);
};

const searchProduct = async (page, size, key) => {
  return axios.get(
    `${baseUrl}product/search?nameProduct=${key}&page=${page}&size=${size}`
  );
};

// account
const onLogin = async (user) => {
  var config = {
    method: "post",
    url: `${baseUrl}auth/login`,
    headers: {
      "Content-Type": "application/json",
    },
    data: user,
  };
  return axios(config);
};
const onSingup = async (user) => {
  return axios.post(`${baseUrl}auth/signup`, user);
};
//
// user
const getListUser = async (page, size, accessToken) => {
  var config = {
    method: "get",
    url: `${baseUrl}user?page=${page}&size=${size}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios(config);
};

const delUser = async (userName, accessToken) => {
  var config = {
    method: "delete",
    url: `${baseUrl}user/${userName}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return axios(config);
};
//

// bill
const getListBill = async (page, size) => {
  return axios.get(`${baseUrl}bill?page=${page}&size=${size}`);
};

const updBill = async (username, id, data, accessToken) => {
  var config = {
    method: "put",
    url: `${baseUrl}bill/${username}?billid=${id}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    data: data,
  };
  return axios(config);
};

const onCreateBill = async (bill, userName, accessToken) => {
  var config = {
    method: "post",
    url: `${baseUrl}bill/${userName}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    data: bill,
  };
  return axios(config);
};

const findBill = async (username, page, size) => {
  return axios.get(
    `${baseUrl}bill/search?username=${username}&page=${page}&size=${size}`
  );
};

const getBillById = async (id) => {
  return axios.get(`${baseUrl}bill/${id}`);
};

//

const findProductByName = async (name) => {
  return axios.get(`${baseUrl}product/search?nameProduct=${name}`);
};

//

const getDataByMonth = async (month, year) => {
  return axios.get(`${baseUrl}statistic/month?month=${month}&year=${year}`);
};

const getDataByYear = async (year) => {
  return axios.get(`${baseUrl}statistic/year?year=${year}`);
};

export {
  getListCategory,
  getListProduct,
  createProduct,
  onLogin,
  getProductById,
  delProduct,
  updProduct,
  onCreateBill,
  findProductByName,
  onSingup,
  getListUser,
  getListBill,
  searchProduct,
  delUser,
  findBill,
  getBillById,
  updBill,
  getDataByMonth,
  getDataByYear,
};
