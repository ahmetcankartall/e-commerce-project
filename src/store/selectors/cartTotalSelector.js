export const selectCheckedCartItems = (state) =>
  state.shop.cart.filter(item => item.checked);

export const selectCartTotalCount = (state) =>
  state.shop.cart.reduce((total, item) => total + item.count, 0);

export const selectCartGrandTotal = (state) =>
  state.shop.cart
    .filter(item => item.checked)
    .reduce(
      (total, item) => total + item.count * item.product.price,
      0
    );
