import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesThunk } from '../store/thunks/categoriesThunk';
import { Home, Info, Mail, Search, ShoppingBasket, Heart, Menu, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import Gravatar from 'react-gravatar';
import { setUser } from '../store/actions/clientActions';

export default function Header() {
  const dispatch = useDispatch();

  // Redux store'dan kategoriler ve fetch state
  const categories = useSelector((state) => state.product.categories);
  const fetchStateCategories = useSelector((state) => state.product.fetchStateCategories);

  // Kullanıcı bilgisi
  const user = useSelector((state) => state.client.user);
  
  // kategoriler
  const womenCategories = categories.filter(cat => cat.gender === 'k');
  const menCategories = categories.filter(cat => cat.gender === 'e');
  
  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  
  // Handlers
  const handleMenuOpen = () => setIsMenuOpen(!isMenuOpen);
  const handleUserMenuOpen = () => setIsUserMenuOpen(!isUserMenuOpen);

  const notify = () => toast('Wow so easy !');

  const logout = () => {
    dispatch(setUser({}));
    localStorage.removeItem('token');
    toast.success('Logged out successfully!');
    setIsUserMenuOpen(false);
  };

  // Fetch categories on mount
  useEffect(() => {
    if (fetchStateCategories === 'NOT_FETCHED') {
      dispatch(categoriesThunk());
    }
  }, [dispatch, fetchStateCategories]);

  return (
    <nav className="bg-white w-full shadow-sm h-[91px] md:h-[91px] flex lg:justify-center">
      <div className="w-full h-full lg:max-w-[1100px] flex items-center justify-between px-4 md:px-8">

        {/* Logo ve Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={handleMenuOpen}
          >
            <Menu size={24} className="text-gray-700" />
          </button>
          <span className="font-bold text-2xl md:text-3xl text-gray-900 font-montserrat">Bandage</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-2 lg:gap-4 relative">

            <Link to="/" className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Home size={18} />
              <span className="hidden lg:inline font-montserrat">HOME</span>
            </Link>

            <div className="relative">
              <button
                className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                onClick={() => setIsShopOpen(!isShopOpen)}
              >
                <Info size={18} />
                <span className="hidden lg:inline font-montserrat">SHOP</span>
              </button>

              {isShopOpen && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border rounded shadow-md z-50 p-2">
                  {fetchStateCategories === 'LOADING' && <p className="p-2">Loading...</p>}
                  {fetchStateCategories === 'ERROR' && <p className="p-2">Error loading categories</p>}

                  {/* KADIN Bölümü */}
                  {fetchStateCategories === 'FETCHED' && womenCategories.length > 0 && (
                    <div className="mb-2">
                      <h4 className="px-2 py-1 font-bold text-gray-800 border-b">KADIN</h4>
                      {womenCategories.map(cat => (
                        <Link
                          key={cat.id}
                          to={`/shop/kadin/${cat.title}/${cat.id}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsShopOpen(false)}
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* ERKEK Bölümü */}
                  {fetchStateCategories === 'FETCHED' && menCategories.length > 0 && (
                    <div>
                      <h4 className="px-2 py-1 font-bold text-gray-800 border-b">ERKEK</h4>
                      {menCategories.map(cat => (
                        <Link
                          key={cat.id}
                          to={`/shop/erkek/${cat.title}/${cat.id}`}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsShopOpen(false)}
                        >
                          {cat.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <Link to="/about" className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Mail size={18} />
              <span className="hidden lg:inline font-montserrat">ABOUT</span>
            </Link>

            <Link to="/blog" className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Home size={18} />
              <span className="hidden lg:inline font-montserrat">BLOG</span>
            </Link>

            <Link to="/contact" className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Info size={18} />
              <span className="hidden lg:inline font-montserrat">CONTACT</span>
            </Link>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3 md:gap-6 flex-wrap">

          <button onClick={notify} className="text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg">
            <Search size={18} />
          </button>

          <button onClick={notify} className="hidden md:flex text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative">
            <ShoppingBasket size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>

          <button onClick={notify} className="hidden md:flex text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg">
            <Heart size={20} />
          </button>

          {!user.email && (
            <div className="flex items-center gap-2">
              <Link to="/signin" className="text-[#23a6f0] hover:text-blue-700 font-medium px-2 py-2 rounded-lg">Login</Link>
              <Link to="/signup" className="text-[#23a6f0] hover:text-blue-700 font-medium px-2 py-2 rounded-lg">Register</Link>
            </div>
          )}

          {user.email && (
            <div className="relative flex items-center gap-2 cursor-pointer" onClick={handleUserMenuOpen}>
              <span>{user.name}</span>
              <Gravatar email={user.email} size={40} className="rounded-full" />

              {isUserMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-32 bg-white border rounded shadow-md z-50 flex flex-col">
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2"
                  >
                    <LogOut size={16} /> Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Cart */}
          <button onClick={notify} className="md:hidden text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative">
            <ShoppingBasket size={16} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[91px] left-0 w-full bg-white shadow-md z-40">
          <div className="flex flex-col items-center py-6 gap-6 text-lg">
            <Link to="/" className="text-gray-700 hover:text-[#23a6f0] font-montserrat" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-[#23a6f0] font-montserrat" onClick={() => setIsMenuOpen(false)}>Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#23a6f0] font-montserrat" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#23a6f0] font-montserrat" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#23a6f0] font-montserrat" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            {!user.email && <Link to="/signup" className="text-gray-700 hover:text-[#23a6f0] font-montserrat" onClick={() => setIsMenuOpen(false)}>Register</Link>}
          </div>
        </div>
      )}
    </nav>
  );
}