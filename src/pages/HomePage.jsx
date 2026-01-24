
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import SectionSix from '../components/SectionSix';
import Footer from '../layout/Footer';
import Header from '../layout/Header';





function HomePage() {
  return (
      <div className="snap-y snap-mandatory min-h-screen">
      <Header/>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      
      <SectionSix />
      <Footer/>
      </div>
  );
}

export default HomePage;