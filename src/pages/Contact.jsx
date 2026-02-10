import PageContent from '../layout/PageContent';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ContactHero from '../components/contactpage/ContactHero';
import ContactVisit from '../components/contactpage/ContactVisit';
import Talk from '../components/contactpage/Talk';
import ShopPageFooter from '../components/shoppage/ShopPageFooter';


export default function Contact({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<ShopPageFooter />}>
      <ContactHero />
    <ContactVisit />
    <Talk />
    </PageContent>
  );
}
