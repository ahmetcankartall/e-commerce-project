import PageContent from '../layout/PageContent';
import Header from '../layout/Header';
import CheckoutBody from '../components/checkoutpage/CheckoutBody';

import ShopPageFooter from '../components/shoppage/ShopPageFooter';


export default function CheckoutPage({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<ShopPageFooter />}>
    <CheckoutBody />
    </PageContent>
  );
}
