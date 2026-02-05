
import { SET_BESTSELLER_LIST,SET_CATEGORIES,SET_PRODUCT_LIST,SET_TOTAL,SET_FETCH_STATE_CATEGORIES,SET_FETCH_STATE_PRODUCTS,SET_LIMIT,SET_OFFSET,SET_FILTER,SET_CATEGORY,SET_SORT,SET_PRODUCT} from "../actions/productActions";

const initialState = {
  categories: [],
  productList: [],
  bestSellerList: [],
  total: 0,
  product:null,
  limit: 12,
  offset: 0,

  category: null, 
  filter: "",
  sort: "",

  fetchStateCategories: "NOT_FETCHED",
  fetchStateProducts: "NOT_FETCHED",
};





export default function productReducer(state = initialState, action) {
   switch(action.type) {
    case SET_PRODUCT:
      return {...state, product:action.payload};

case SET_BESTSELLER_LIST:
  return { ...state, bestSellerList: action.payload };

  case SET_CATEGORIES:
    return { ...state, categories: action.payload };

  case SET_PRODUCT_LIST:
    return { ...state, productList: action.payload };

  case SET_TOTAL:
    return { ...state, total: action.payload };

  case SET_FETCH_STATE_CATEGORIES:
    return { ...state, fetchStateCategories: action.payload };

  case SET_FETCH_STATE_PRODUCTS:
    return { ...state, fetchStateProducts: action.payload };

  case SET_LIMIT:
    return { ...state, limit: action.payload };

  case SET_OFFSET:
    return { ...state, offset: action.payload };

  case SET_FILTER:
    return { ...state, filter: action.payload,offset: 0, };

    case SET_CATEGORY:
  return {
    ...state,
    category: action.payload,
    offset: 0, 
  };

case SET_SORT:
  return {
    ...state,
    sort: action.payload,
    offset: 0,
  };


  default:
    return state;
}
 
    }


