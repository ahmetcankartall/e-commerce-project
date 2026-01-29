import axios from "axios";
import { setProductList,  setFetchStateProducts,setTotal } from "../actions/productActions";

export const productsThunk = () => async (dispatch, getState) => {
  const { limit, offset } = getState().product;

  try {
    dispatch(setFetchStateProducts("FETCHING"));

    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/products",
      {
        params: { limit, offset }
      }
    );

    dispatch(setProductList(response.data.products));
    dispatch(setTotal(response.data.total));
    dispatch(setFetchStateProducts("FETCHED"));
  } catch (error) {
    dispatch(setFetchStateProducts("ERROR"));
    console.error(error);
  }
};

