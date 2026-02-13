
export const SET_CART = 'SET_CART'
export const SET_PAYMENT= 'SET_PAYMENT'
export const SET_ADDRESS = 'SET_ADDRESS'
export const CLEAR_CART = 'CLEAR_CART' 
export const SET_PREVIOUS_ORDERS = "SET_PREVIOUS_ORDERS";
export const SET_PREVIOUS_ORDERS_LOADING = "SET_PREVIOUS_ORDERS_LOADING";
export const SET_PREVIOUS_ORDERS_ERROR = "SET_PREVIOUS_ORDERS_ERROR";


export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart
});

// payment object set eder
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment
});

// address object set eder
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address
});
export const clearCart = () => ({
  type: CLEAR_CART
});


export const setPreviousOrders = (orders) => ({
  type: SET_PREVIOUS_ORDERS,
  payload: orders
});

export const setPreviousOrdersLoading = (value) => ({
  type: SET_PREVIOUS_ORDERS_LOADING,
  payload: value
});

export const setPreviousOrdersError = (error) => ({
  type: SET_PREVIOUS_ORDERS_ERROR,
  payload: error
});


  