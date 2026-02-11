import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
import CartPage from './pages/CartPage'; // cart sayfan

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
    if (location.pathname === "/cart") {
      // Zaten cart sayfasındaysam açmaya çalıştığımda sadece sayfayı yenilemiş gibi olsun, cart drawer açılmasın
      navigate("/cart", { replace: true });
  
    } else {
      setIsCartOpen(true);
    }
  }, [location.pathname, navigate]);

  return (
    <>
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
      </Routes>

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}

export default App;
