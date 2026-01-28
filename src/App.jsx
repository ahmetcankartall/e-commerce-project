import { Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignupPage from  './pages/SignupPage';

function App() {
 
  return (
    <>
      <ToastContainer />

      {/* Navbar sabit olduğu için padding */}
      <div className="">
        <Routes>
      <Route path="/" element={<HomePage />} />

      {/* Shop routes */}
      <Route path="/shop" element={<ShopPage />} />
    <Route path="/signup" element={<SignupPage />} />
    </Routes>
      </div>
      
    </>
  );
}

export default App;
