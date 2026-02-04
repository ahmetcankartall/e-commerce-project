import axios from "axios";
import {
  setProduct,
  setFetchStateProducts,
} from "../actions/productActions";

export const productDetailThunk = (productId) => async (dispatch) => {
  try {
    dispatch(setFetchStateProducts("FETCHING"));

    // --- TEST İÇİN GECİKME EKLE (2 Saniye) ---
    // Bu satır thunk'ın 2 saniye boyunca burada durmasını sağlar.
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // -----------------------------------------

    const response = await axios.get(
      `https://workintech-fe-ecommerce.onrender.com/products/${productId}`
    );

    dispatch(setProduct(response.data));
    dispatch(setFetchStateProducts("FETCHED"));
  } catch (error) {
    dispatch(setFetchStateProducts("ERROR"));
    console.error(error);
  }
};