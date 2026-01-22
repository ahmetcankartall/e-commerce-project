import ProductCard from '../components/ProductCard';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
function HomePage() {
  return (
      <div className="snap-y snap-mandatory min-h-screen">
      <Header/>
      <SectionOne />
      <SectionTwo />
     
      <ProductCard />
      <Footer/>
      </div>
  );
}

export default HomePage;