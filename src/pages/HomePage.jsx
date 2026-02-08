
import SectionOne from '../components/home/SectionOne';
import SectionTwo from '../components/home/SectionTwo';
import SectionThree from '../components/home/SectionThree';
import SectionFour from '../components/home/SectionFour';
import BestSeller from '../components/home/BestSeller';
import SectionFive from '../components/home/SectionFive';
import HomePageBlog from '../components/home/HomePageBlog';
import Header from '../layout/Header';
import SectionSix from '../components/home/SectionSix';
import Clients from '../components/home/Clients';
import PageContent from '../layout/PageContent';
import Footer from '../layout/Footer';







export default function HomePage({ onCartOpen }) {
  return (
    <PageContent header={<Header  onCartOpen={onCartOpen}/>} footer={<Footer />}>
      
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <BestSeller />
      
      <Clients />
      <HomePageBlog />
    </PageContent>
  );
}
