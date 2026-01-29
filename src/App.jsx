import { Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { useEffect } from 'react';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SignupPage from  './pages/SignupPage';
import SignInPage from './pages/SignInPage';
import { useDispatch } from "react-redux";
import { verifyTokenThunk } from './store/thunks/verifyTokenThunk';

function App() {
   
 const dispatch = useDispatch();
  useEffect(() => {
   dispatch(verifyTokenThunk());
  }, []);
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
    <Route path="/signin" element={<SignInPage />} />
    </Routes>
      </div>
      
    </>
  );
}

export default App;
