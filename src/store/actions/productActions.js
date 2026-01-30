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


//action creator function olustur
export const setCategories= (category)=>({
type:SET_CATEGORIES,
payload:category,
});

export const setProductList = (product)=>({
type:SET_PRODUCT_LIST,
payload:product,
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


