import axios from "axios";
import {
  setGenderBestSellerList,setFetchStateProducts,
 } from "../actions/productActions";

export const genderBestSellerThunk = (gender) => async (dispatch, getState) => {
  const { categories } = getState().product;

  if (!categories || categories.length === 0) {
    return; // 👈 ÇOK KRİTİK
  }

  try {
    dispatch(setFetchStateProducts("FETCHING"));

    const categoryIds = categories
      .filter(cat => cat.gender === gender)
      .map(cat => cat.id);

    const responses = await Promise.all(
      categoryIds.map(id =>
        axios.get(
          "https://workintech-fe-ecommerce.onrender.com/products",
          {
            params: {
              category: id,
              sort: "sell_count:desc",
              limit: 6,
            },
          }
        )
      )
    );

    const products = responses
      .flatMap(r => r.data.products)
      .sort((a, b) => b.sell_count - a.sell_count)
      .slice(0, 6);

    dispatch(setGenderBestSellerList(products));
    dispatch(setFetchStateProducts("FETCHED"));
  } catch {
    dispatch(setFetchStateProducts("ERROR"));
  }
};
