import PageContent from '../layout/PageContent';
import Header from '../layout/Header';
import ShopPageFooter from '../components/shoppage/ShopPageFooter';
import PricingBreadCrumb from '../components/pricing/PricingBreadCrumb';
import PricingBody from '../components/pricing/PricingBody';
import PricingClients from '../components/pricing/PricingClients';
import FreeTrial from '../components/teampage/FreeTrial';
export default function About({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<ShopPageFooter />}>
      <PricingBreadCrumb />
      <PricingBody />
      <PricingClients />
      <FreeTrial />
    </PageContent>
  );
}
