
import { SET_CATEGORIES,SET_PRODUCT_LIST,SET_TOTAL,SET_FETCH_STATE_CATEGORIES,SET_FETCH_STATE_PRODUCTS,SET_LIMIT,SET_OFFSET,SET_FILTER} from "../actions/productActions";

const initialState = {
  categories: [],     // array
  productList: [],    // array
  total: 0,           // number
  limit: 12,          // number
  offset: 0,          // number
  filter: "",         // string
  fetchStateCategories: "NOT_FETCHED", // categories fetch durumu
  fetchStateProducts: "NOT_FETCHED",   // products fetch durumu
};





export default function productReducer(state = initialState, action) {
   switch(action.type) {
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
    return { ...state, filter: action.payload };

  default:
    return state;
}
 
    }


