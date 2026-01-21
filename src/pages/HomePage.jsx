import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';

function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-screen">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default HomePage;