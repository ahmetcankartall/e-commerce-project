
export const SET_CART = 'SET_CART'
export const SET_PAYMENT= 'SET_PAYMENT'
export const SET_ADDRESS = 'SET_ADDRESS'








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