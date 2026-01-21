import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import Footer from '../layout/Footer';
function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-screen">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default HomePage;