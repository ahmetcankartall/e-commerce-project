import PageContent from '../layout/PageContent';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ContactHero from '../components/contactpage/ContactHero';





export default function Contact({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<Footer />}>
      <ContactHero />
    
    </PageContent>
  );
}
