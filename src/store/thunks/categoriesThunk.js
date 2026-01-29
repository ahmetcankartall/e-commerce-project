import axios from "axios";
import { setCategories, setFetchStateCategories } from "../actions/productActions";

export const categoriesThunk = () => async (dispatch) => {
  try {
    dispatch(setFetchStateCategories("LOADING"));  // fetch başladığını store’a bildir
    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/categories"
    );
    const categories = response.data;

    dispatch(setCategories(categories));
    dispatch(setFetchStateCategories("FETCHED")); // başarılı fetch
  } catch (error) {
    dispatch(setFetchStateCategories("ERROR"));   // hata durumu
    console.error("Fetching categories failed:", error);
  }
};
