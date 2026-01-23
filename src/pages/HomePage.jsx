import SectionFour from '../components/SectionFour';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import SectionEnd from '../components/sectionEnd';
import SectionSix from '../components/SectionSix';


function HomePage() {
  return (
      <div className="snap-y snap-mandatory min-h-screen">
      <Header/>
      <SectionOne />
      <SectionTwo />
     
      <SectionFour />
      
      <SectionSix />
      <Footer/>
      </div>
  );
}

export default HomePage;