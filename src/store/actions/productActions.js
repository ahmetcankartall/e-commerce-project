//action constant olustur

export const SET_CATEGORIES = 'SET_CATEGORIES'
export const SET_PRODUCT_LIST= 'SET_PRODUCT_LIST'
export const SET_TOTAL = 'SET_TOTAL'
export const SET_FETCH_STATE_CATEGORIES = 'SET_FETCH_STATE_CATEGORIES'
export const SET_FETCH_STATE_PRODUCTS = 'SET_FETCH_STATE_PRODUCTS'
export const SET_LIMIT = 'SET_LIMIT'
export const SET_OFFSET = 'SET_OFFSET'
export const SET_FILTER= 'SET_FILTER'
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_SORT = "SET_SORT";
export const SET_PRODUCT="SET_PRODUCT";
export const SET_BESTSELLER_LIST = "SET_BESTSELLER_LIST";
export const RESET_FILTERS = "RESET_FILTERS";
export const SET_GENDER_BESTSELLER_LIST = "SET_GENDER_BESTSELLER_LIST";
//action creator function olustur

export const setProduct = (product) => ({
  type: SET_PRODUCT,
  payload: product,
});
export const setBestSellerList = (products) => ({
  type: SET_BESTSELLER_LIST,
  payload: products,
});

export const setGenderBestSellerList = (list) => ({
  type: SET_GENDER_BESTSELLER_LIST,
  payload: list,
});


export const resetFilters = () => ({
  type: RESET_FILTERS,
});
export const setCategories= (category)=>({
type:SET_CATEGORIES,
payload:category,
});

export const setProductList = (products)=>({
type:SET_PRODUCT_LIST,
payload:products,
});


export const setTotal = (total)=>({
type:SET_TOTAL,
payload:total,
});

export const setFetchStateCategories = (state) => ({
  type: "SET_FETCH_STATE_CATEGORIES",
  payload: state,
});

export const setFetchStateProducts = (state) => ({
  type: "SET_FETCH_STATE_PRODUCTS",
  payload: state,
});


export const setLimit = (limit)=>({
type:SET_LIMIT,
payload:limit,
});

export const setOffset = (offset)=>({
type:SET_OFFSET,
payload:offset,
});

export const setFilter = (filter)=>({
type:SET_FILTER,
payload:filter,
});

export const setCategory = (categoryId) => ({
  type: SET_CATEGORY,
  payload: categoryId,
});

export const setSort = (sort) => ({
  type: SET_SORT,
  payload: sort,
});


