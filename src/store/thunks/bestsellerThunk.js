import axios from "axios";
import {
  setBestSellerList,
  setFetchStateProducts,
 
} from "../actions/productActions";

export const bestsellerThunk = () => async (dispatch) => {
  try {
    dispatch(setFetchStateProducts("FETCHING"));

    const params = {
      sort: "sell_count:desc",
      limit: 4,
      offset: 0,
    };

  

    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/products",
      { params }
    );

    dispatch(setBestSellerList(response.data.products));
    dispatch(setFetchStateProducts("FETCHED"));
  } catch (error) {
    dispatch(setFetchStateProducts("ERROR"));
    console.error(error);
  }
};

