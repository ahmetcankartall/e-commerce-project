import axios from "axios";
import { clearCart } from "../actions/shoppingCartActions"; // ✅ clearCart import et


const BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

const setAuthHeader = () => {
  const token = localStorage.getItem("token");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  }
};

export const orderThunk = (orderData) => async (dispatch) => {
  try {
    setAuthHeader();
    
    const response = await axios.post(`${BASE_URL}/order`, orderData);
    
    // ✅ Sipariş başarılı - sepeti temizle (reducer localStorage'ı da temizler)
    dispatch(clearCart());
    
    
    
    return { success: true, data: response.data };
    
  } catch (error) {
    console.error("Sipariş oluşturulamadı:", error);
    
   
    
    return { success: false, error: error.response?.data || error.message };
  }
};