
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import SectionFive from '../components/SectionFive';
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
    <SectionFive />
     
     <SectionSix />
      <Footer/>
      </div>
  );
}

export default HomePage;