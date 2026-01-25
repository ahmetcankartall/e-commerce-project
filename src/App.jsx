import { Routes, Route } from 'react-router-dom';
import Footer from './layout/Footer';

import HomePage from './pages/HomePage';

function App() {
  return (
    <>
     

      {/* Navbar sabit olduğu için padding */}
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
       <Footer/>
    </>
  );
}

export default App;
