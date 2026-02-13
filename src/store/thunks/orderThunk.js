import axios from "axios";
import { clearCart } from "../actions/shoppingCartActions"; // ✅ clearCart import et
import { setPreviousOrders,setPreviousOrdersError,setPreviousOrdersLoading } from "../actions/shoppingCartActions"; // ✅ setPreviousOrders import et
import { set } from "react-hook-form";

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



export const fetchPreviousOrdersThunk = () => async (dispatch) => {
  try {
    dispatch(setPreviousOrdersLoading(true));
    setAuthHeader();

    const response = await axios.get(`${BASE_URL}/order`);

    dispatch(setPreviousOrders(response.data));

  } catch (error) {
    console.error("Önceki siparişler alınırken hata oluştu:", error);

    dispatch(
      setPreviousOrdersError(
        error.response?.data || error.message
      )
    );
  } finally {
    dispatch(setPreviousOrdersLoading(false));
  }
};
