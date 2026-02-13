
import Header from '../layout/Header';
import PageContent from '../layout/PageContent';
import Footer from '../layout/Footer';
import PreviousOrderBody from '../components/previousorder/PreviousOrderBody';






export default function HomePage({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<Footer />}>
      
   <PreviousOrderBody />
    </PageContent>
  );
}
