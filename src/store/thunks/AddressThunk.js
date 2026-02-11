import axios from "axios";
import { setAddress } from "../actions/shoppingCartActions";




const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

const setAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
};

/* ================= GET ================= */
export const fetchAddresses = () => async (dispatch) => {
  try {
    setAuthHeader();
    const res = await axios.get(`${BASE_URL}/user/address`);
    dispatch(setAddress(res.data));
  } catch (err) {
    console.error("Adresler alınamadı", err);
  }
};

/* ================= POST ================= */
export const addAddress = (data) => async (dispatch) => {
  try {
    setAuthHeader();
    await axios.post(`${BASE_URL}/user/address`, data);
    dispatch(fetchAddresses());
  } catch (err) {
    console.error("Adres eklenemedi", err);
  }
};

/* ================= PUT ================= */
export const updateAddress = (data) => async (dispatch) => {
  try {
    setAuthHeader();
    await axios.put(`${BASE_URL}/user/address`, data);
    dispatch(fetchAddresses());
  } catch (err) {
    console.error("Adres güncellenemedi", err);
  }
};

/* ================= DELETE ================= */
export const deleteAddress = (id) => async (dispatch) => {
  try {
    setAuthHeader();
    await axios.delete(`${BASE_URL}/user/address/${id}`);
    dispatch(fetchAddresses());
  } catch (err) {
    console.error("Adres silinemedi", err);
  }
};

