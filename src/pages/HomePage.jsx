import ProductCard from '../components/ProductCard';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import SectionEnd from '../components/sectionEnd';


function HomePage() {
  return (
      <div className="snap-y snap-mandatory min-h-screen">
      <Header/>
      <SectionOne />
      <SectionTwo />
     
      <ProductCard />
      <SectionEnd />
      <Footer/>
      </div>
  );
}

export default HomePage;