import { Routes, Route } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import { useEffect,useState } from 'react';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import SignupPage from  './pages/SignupPage';
import SignInPage from './pages/SignInPage';
import { useDispatch } from "react-redux";
import { verifyTokenThunk } from './store/thunks/verifyTokenThunk';
import CartDrawer from './components/cart/CartDrawer';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
   
 const dispatch = useDispatch();
  useEffect(() => {
   dispatch(verifyTokenThunk());
  }, [dispatch]);
  return (
    <>
      <ToastContainer />

     
      <div className="">
        <Routes>
      <Route path="/" element={<HomePage onCartOpen={() => setIsCartOpen(true)} />} />
      <Route path="/contact" element={<Contact onCartOpen={() => setIsCartOpen(true)} />} />
      {/* Shop routes */}
      <Route path="/shop" element={<ShopPage onCartOpen={() => setIsCartOpen(true)} />} />
<Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage  onCartOpen={() => setIsCartOpen(true)}/>} />

    <Route path="/signup" element={<SignupPage onCartOpen={() => setIsCartOpen(true)}/>} />
    <Route path="/signin" element={<SignInPage onCartOpen={() => setIsCartOpen(true)}/>} />
    <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" element={<ProductDetail onCartOpen={() => setIsCartOpen(true)}/>} />
    <Route path="/product" element={<ProductDetail  onCartOpen={() => setIsCartOpen(true)}/>} />
    </Routes>
      </div>
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      
    </>
  );
}

export default App;
