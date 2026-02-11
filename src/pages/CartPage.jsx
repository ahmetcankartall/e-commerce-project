import PageContent from '../layout/PageContent';
import Header from '../layout/Header';
import CartBody from '../components/cart/CartBody';

import ShopPageFooter from '../components/shoppage/ShopPageFooter';


export default function CartPage({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<ShopPageFooter />}>
    <CartBody />
    </PageContent>
  );
}
