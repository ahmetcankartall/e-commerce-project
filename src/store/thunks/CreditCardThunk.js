import axios from "axios";
import { setPayment } from "../actions/shoppingCartActions";

const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

const setAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
};

/* ================= GET CARDS ================= */
export const fetchCards = () => async (dispatch) => {
  try {
    setAuthHeader();
    const res = await axios.get(`${BASE_URL}/user/card`);
    dispatch(setPayment(res.data));
  } catch (err) {
    console.error("Kartlar alınamadı", err);
  }
};

/* ================= ADD CARD ================= */
export const addCard = (data) => async (dispatch) => {
  try {
    setAuthHeader();
    await axios.post(`${BASE_URL}/user/card`, data);
    dispatch(fetchCards());
  } catch (err) {
    console.error("Kart eklenemedi", err);
  }
};

/* ================= UPDATE CARD ================= */
export const updateCard = (data) => async (dispatch) => {
  try {
    setAuthHeader();
    await axios.put(`${BASE_URL}/user/card`, data);
    dispatch(fetchCards());
  } catch (err) {
    console.error("Kart güncellenemedi", err);
  }
};

/* ================= DELETE CARD ================= */
export const deleteCard = (id) => async (dispatch) => {
  try {
    setAuthHeader();
    await axios.delete(`${BASE_URL}/user/card/${id}`);
    dispatch(fetchCards());
  } catch (err) {
    console.error("Kart silinemedi", err);
  }
};
