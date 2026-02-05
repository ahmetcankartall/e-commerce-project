import axios from "axios";
import {
  setBestSellerList,
  setFetchStateProducts,
  setTotal,
} from "../actions/productActions";

export const bestsellerThunk = () => async (dispatch) => {
  try {
    dispatch(setFetchStateProducts("FETCHING"));

    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/products",
      {
        params: {
          sort: "sell_count:desc",
          limit: 4,
          offset: 0,
        },
      }
    );

    dispatch(setBestSellerList(response.data.products));
   
    dispatch(setFetchStateProducts("FETCHED"));
  } catch (error) {
    dispatch(setFetchStateProducts("ERROR"));
    console.error(error);
  }
};
