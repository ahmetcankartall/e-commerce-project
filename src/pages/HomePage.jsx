
import SectionOne from '../components/home/SectionOne';
import SectionTwo from '../components/home/SectionTwo';
import SectionThree from '../components/home/SectionThree';
import SectionFour from '../components/home/SectionFour';
import BestSeller from '../components/home/BestSeller';
import SectionFive from '../components/home/SectionFive';

import Header from '../layout/Header';
import SectionSix from '../components/home/SectionSix';
import Clients from '../components/home/Clients';





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