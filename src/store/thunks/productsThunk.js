import axios from "axios";
import {
  setProductList,
  setFetchStateProducts,
  setTotal,
} from "../actions/productActions";

export const productsThunk = () => async (dispatch, getState) => {
  const {
    limit,
    offset,
    category,
    filter,
    sort,
  } = getState().product;

  try {
    dispatch(setFetchStateProducts("FETCHING"));

    //dolu alanları eklıyoruz boşsa ona göre query atıyor
    const params = {
      limit,
      offset,
    };

    if (category) {
      params.category = category;
    }

    if (filter) {
      params.filter = filter;
    }

    if (sort) {
      params.sort = sort;
    }

    const response = await axios.get(
      "https://workintech-fe-ecommerce.onrender.com/products",
      { params }
    );

    dispatch(setProductList(response.data.products));
    dispatch(setTotal(response.data.total));
    dispatch(setFetchStateProducts("FETCHED"));
  } catch (error) {
    dispatch(setFetchStateProducts("ERROR"));
    console.error(error);
  }
};
