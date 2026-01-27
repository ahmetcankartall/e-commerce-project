import { Routes, Route } from 'react-router-dom';


import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <>
     

      {/* Navbar sabit olduğu için padding */}
      <div className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
         <Routes>
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
