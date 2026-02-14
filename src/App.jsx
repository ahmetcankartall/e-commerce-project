import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ScrollToTop from './components/ScrollToTop';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from "react-redux";
import { verifyTokenThunk } from './store/thunks/verifyTokenThunk';
import CheckoutPage from './pages/CheckoutPage';
import Contact from './pages/Contact';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import SignupPage from './pages/SignupPage';
import SignInPage from './pages/SignInPage';
import CartDrawer from './components/cart/CartDrawer';
import CartPage from './pages/CartPage'; 
import PreviousOrders from './pages/PreviousOrders';
import About from './pages/About';
import Team from './pages/Team';
import Pricing from './pages/Pricing';
function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(verifyTokenThunk());
  }, [dispatch]);

  // 🔥 TEK YERDEN CART AÇMA KONTROLÜ
  const handleCartOpen = useCallback(() => {
    if (location.pathname === "/cart" || location.pathname === "/checkout") {
      // Zaten cart sayfasındaysam açmaya çalıştığımda sadece sayfayı yenilemiş gibi olsun, cart drawer açılmasın
      navigate("/cart", { replace: true });
  
    } else {
      setIsCartOpen(true);
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <ScrollToTop />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<HomePage onCartOpen={handleCartOpen} />} />
        <Route path="/contact" element={<Contact onCartOpen={handleCartOpen} />} />
        <Route path="/shop" element={<ShopPage onCartOpen={handleCartOpen} />} />
        <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage onCartOpen={handleCartOpen} />} />
        <Route path="/signup" element={<SignupPage onCartOpen={handleCartOpen} />} />
        <Route path="/signin" element={<SignInPage onCartOpen={handleCartOpen} />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage onCartOpen={handleCartOpen} />} />
        <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" element={<ProductDetail onCartOpen={handleCartOpen} />} />
        <Route path="/previousorders" element={<PreviousOrders onCartOpen={handleCartOpen} />} />
        <Route path="/about" element={<About onCartOpen={handleCartOpen} />} />
        <Route path="/team" element={<Team onCartOpen={handleCartOpen} />} />
        <Route path="/pricing" element={<Pricing onCartOpen={handleCartOpen} />} />
      </Routes>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default App;
