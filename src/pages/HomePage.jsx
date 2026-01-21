import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import Footer from '../layout/Footer';
import Header from '../layout/Header';
function HomePage() {
  return (
    <div className="snap-y snap-mandatory h-screen">
      <Header/>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
}

export default HomePage;