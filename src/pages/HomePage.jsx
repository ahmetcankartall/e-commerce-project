
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import BestSeller from '../components/BestSeller';
import SectionFive from '../components/SectionFive';

import Header from '../layout/Header';
import SectionSix from '../components/SectionSix';
import Clients from '../components/Clients';





function HomePage() {
  return (
    <div className="snap-y snap-mandatory min-h-screen">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      
      <SectionSix />
      <BestSeller />
      <Clients />
    </div>
  );
}

export default HomePage;