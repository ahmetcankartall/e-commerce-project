import {
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
  CLEAR_CART,
  SET_PREVIOUS_ORDERS,
  SET_PREVIOUS_ORDERS_ERROR,
  SET_PREVIOUS_ORDERS_LOADING
} from "../actions/shoppingCartActions";

// localStorage'dan çek
const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cart: cartFromStorage,
  payment: {
    cards: []
  },
  address: [],
  previousOrders: [],
  loading: false,
  error: null
};

export default function shoppingCartReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };

    case CLEAR_CART:
      localStorage.removeItem("cart");
      return { ...state, cart: [] };

    case SET_PREVIOUS_ORDERS:
      return { ...state, previousOrders: action.payload };

    case SET_PREVIOUS_ORDERS_LOADING:
      return { ...state, loading: action.payload };

    case SET_PREVIOUS_ORDERS_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
}
