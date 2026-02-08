 export const selectCartTotalCount = (state) => {
let total = 0;

state.shop.cart.map((item) => {
total +=item.count;




} );
return total;

 }
 



 export const selectCartGrandTotal = (state) => {
  let total = 0;

  state.shop.cart.map((item) => {
    total += item.count * item.product.price;
  });

  return total;
};
