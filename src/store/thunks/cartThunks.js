import { setCart } from "../actions/shoppingCartActions";


export const increaseCartItemCount = (productId) => (dispatch, getState) => {
  const { cart } = getState().shop;

  const updatedCart = cart.map(item =>
    item.product.id === productId
      ? { ...item, count: item.count + 1 }
      : item
  );

  dispatch(setCart(updatedCart));
};



export const decreaseCartItemCount = (productId) => (dispatch, getState) => {
  const { cart } = getState().shop;

  const updatedCart = cart.map(item =>
    item.product.id === productId
      ? { ...item, count: item.count - 1}
      : item
  );

  dispatch(setCart(updatedCart));
};


export const deleteCartItemCount = (productId) => (dispatch, getState) => {
  const { cart } = getState().shop;

  const deletedCart = cart.filter(item =>
    item.product.id !== productId
  );

  dispatch(setCart(deletedCart));
};