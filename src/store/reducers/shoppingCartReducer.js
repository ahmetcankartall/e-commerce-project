import { SET_CART, SET_PAYMENT, SET_ADDRESS,CLEAR_CART } from "../actions/shoppingCartActions";

// localStorage'dan çek
const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const initialState = {
  cart: cartFromStorage, // <- burada localStorage kullanıyoruz
  payment: {},
  address: [],
};

export default function shoppingCartReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CART:
      return { ...state, cart: action.payload };

    case SET_PAYMENT:
      return { ...state, payment: action.payload };

    case SET_ADDRESS:
      return { ...state, address: action.payload };
      case CLEAR_CART:
      // localStorage'dan da temizle
      localStorage.removeItem("cart");
      return { 
        ...state, 
        cart: [] 
      };

    default:
      return state;
  }
}
