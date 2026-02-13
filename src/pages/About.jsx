import PageContent from '../layout/PageContent';
import Header from '../layout/Header';
import AboutUsContent from '../components/aboutuspage/AboutUsContent';
import AboutUsHero from '../components/aboutuspage/AboutUsHero';
import ShopPageFooter from '../components/shoppage/ShopPageFooter';
import AboutUsCounter from '../components/aboutuspage/AboutUsCounter';
import AboutUsVideo from '../components/aboutuspage/AboutUsVideo';  
import AboutTeam from '../components/aboutuspage/AboutTeam';
import AboutUsClients from '../components/aboutuspage/AboutUsClients';
import WorkWithUs from '../components/aboutuspage/WorkWithUs';
export default function About({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<ShopPageFooter />}>
      <AboutUsHero />
      <AboutUsContent />
    <AboutUsCounter />
    <AboutUsVideo />
    <AboutTeam />
    <AboutUsClients />
    <WorkWithUs />
    </PageContent>
  );
}
