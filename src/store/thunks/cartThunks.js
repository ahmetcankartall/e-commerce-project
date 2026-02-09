import { setCart } from "../actions/shoppingCartActions";

export const saveCartToLocalStorage = () => (dispatch, getState) => {
  const { cart } = getState().shop;
  localStorage.setItem("cart", JSON.stringify(cart));
};


export const increaseCartItemCount = (productId) => (dispatch, getState) => {
  const { cart } = getState().shop;

  const updatedCart = cart.map(item =>
    item.product.id === productId
      ? { ...item, count: item.count + 1 }
      : item
  );

  dispatch(setCart(updatedCart));
   dispatch(saveCartToLocalStorage());
};



export const decreaseCartItemCount = (productId) => (dispatch, getState) => {
  const { cart } = getState().shop;

  const updatedCart = cart.map(item =>
    item.product.id === productId
      ? { ...item, count: item.count > 1 ? item.count - 1 : 1}
      : item
  );

  dispatch(setCart(updatedCart));
   dispatch(saveCartToLocalStorage());
};


export const deleteCartItemCount = (productId) => (dispatch, getState) => {
  const { cart } = getState().shop;

  const deletedCart = cart.filter(item =>
    item.product.id !== productId
  );

  dispatch(setCart(deletedCart));
  dispatch(saveCartToLocalStorage());
};








export const addCartItem = (product) => (dispatch, getState) => {
  const { cart } = getState().shop;

  const existingItem = cart.find(item => item.product.id === product.id);

  let updatedCart;
  if (existingItem) {
    // Ürün zaten varsa count artır
    updatedCart = cart.map(item =>
      item.product.id === product.id
        ? { ...item, count: item.count + 1 }
        : item
    );
  } else {
    // Yeni ürün ekle
    updatedCart = [...cart, { count: 1, checked: true, product }];
  }

  dispatch(setCart(updatedCart));
  dispatch(saveCartToLocalStorage());
};
