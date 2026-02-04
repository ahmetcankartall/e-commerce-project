import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesThunk } from '../store/thunks/categoriesThunk';
import { Search, ShoppingBasket, Heart, Menu, LogOut, ChevronDown, } from 'lucide-react';
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

  // Kategorileri cinsiyete göre filtrele
  const womenCategories = categories.filter(cat => cat.gender === 'k');
  const menCategories = categories.filter(cat => cat.gender === 'e');

  // State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);

  

  // Handlers
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsShopOpen(false);
  };

  const handleShopOpen = (e) => {
    e.stopPropagation();
    setIsShopOpen(!isShopOpen);
    setIsUserMenuOpen(false);
  };

  const handleUserMenuOpen = (e) => {
    e.stopPropagation();
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsShopOpen(false);
  };

  const logout = () => {
    dispatch(setUser({}));
    localStorage.removeItem('token');
    toast.success('Logged out successfully!');
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
  };

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isShopOpen && !event.target.closest('.shop-dropdown-container')) {
        setIsShopOpen(false);
      }
      if (isUserMenuOpen && !event.target.closest('.user-menu-container')) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isShopOpen, isUserMenuOpen]);

  
  useEffect(() => {
    if (fetchStateCategories === 'NOT_FETCHED') {
      dispatch(categoriesThunk());
    }
  }, [dispatch, fetchStateCategories]);

  return (
    <nav className=' w-full flex justify-center relative'>
      <div className='w-full lg:max-w-[1050px] max-w-[414px] h-[91px] flex justify-center items-center lg:gap-6 '>

        
        <div className="w-[187px] h-[58px] flex items-center">
          <Link to="/" className="font-bold text-2xl md:text-3xl text-gray-900 font-montserrat hover:text-[#23a6f0] transition-colors">
            Bandage
          </Link>
        </div>

        
        <div className="lg:w-[815px] h-[58px] w-[187px] flex items-center lg:justify-between justify-center">

         
          <div className="hidden w-[361px] lg:flex items-center justify-between">
            <Link to="/" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-[#23a6f0] transition-colors'>
              Home
            </Link>

          
            <div className="relative shop-dropdown-container">
              <button
                onClick={handleShopOpen}
                className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-[#23a6f0] transition-colors flex items-center gap-1'
              >
                Shop <ChevronDown size={16} className={isShopOpen ? "rotate-180 transition-transform" : "transition-transform"} />
              </button>

              {isShopOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md py-3 z-50 ">
                 
                  <Link
                    to="/shop"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#23a6f0] transition-colors"
                    onClick={() => setIsShopOpen(false)}
                  >
                    All Products
                  </Link>

                  {[
                    { title: "Women", categories: womenCategories },
                    { title: "Men", categories: menCategories }
                  ].map(({ title, categories }) =>
                    categories.length > 0 && (
                      <div key={title} className="border-t pt-2 mt-2">
                        <p className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {title}
                        </p>
                        {categories.map(category => (
                          <Link
                            key={category.id || category._id} // id varsa kullan, yoksa _id
                            to={`/shop/${category.gender}/${category.title}/${category.id}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#23a6f0] transition-colors"
                            onClick={() => setIsShopOpen(false)}
                          >
                            {category.title}
                          </Link>
                        ))}
                      </div>
                    )
                  )}


                </div>
              )}
            </div>

            <Link to="/about" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-[#23a6f0] transition-colors'>
              About
            </Link>
            <Link to="/blog" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-[#23a6f0] transition-colors'>
              Blog
            </Link>
            <Link to="/contact" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-[#23a6f0] transition-colors'>
              Contact
            </Link>
            <Link to="/pages" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center hover:text-[#23a6f0] transition-colors'>
              Pages
            </Link>
          </div>

         
          <div className="flex flex-row justify-center items-center">

           
            {!user.email && (
              <div className="hidden lg:flex items-center gap-2 mr-4">
                <Link to="/signin" className="text-[#23a6f0] hover:text-blue-700 font-medium px-2 py-2 rounded-lg transition-colors">
                  Login
                </Link>
                <span className="text-gray-300">/</span>
                <Link to="/signup" className="text-[#23a6f0] hover:text-blue-700 font-medium px-2 py-2 rounded-lg transition-colors">
                  Register
                </Link>
              </div>
            )}

            {user.email && (
              <div className="hidden relative lg:flex items-center gap-2 mr-4 user-menu-container">
                <button
                  onClick={handleUserMenuOpen}
                  className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                >
                  <span className='text-[#737373] text-sm font-medium'>{user.name}</span>
                  <Gravatar email={user.email} size={30} className="rounded-full" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-40 bg-white  rounded-lg shadow-lg z-50 flex flex-col py-2">
                    <Link
                      to="/profile"
                      className="px-4 py-2 text-left hover:bg-gray-50 text-sm text-gray-700"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="px-4 py-2 text-left hover:bg-gray-50 text-sm text-gray-700"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={logout}
                      className="px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm text-gray-700 border-t mt-1"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}

           
            <button className="w-[46px] h-[46px] text-black lg:text-[#23a6f0] lg:hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg flex justify-center items-center transition-colors">
              <Search size={18} />
            </button>

            <button className="w-[46px] h-[46px] lg:text-[#23a6f0] text-black lg:hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative flex justify-center items-center transition-colors">
              <ShoppingBasket size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
            </button>

            <button className="hidden w-[46px] h-[46px] text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg lg:flex justify-center items-center transition-colors">
              <Heart size={20} />
            </button>

            
            <button
              className="lg:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer ml-2 transition-colors"
              onClick={handleMenuOpen}
            >
              <Menu size={24} className="text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-40 max-h-[calc(100vh-91px)] overflow-y-auto border-t">
            <div className="flex flex-col items-center py-6 gap-4 text-lg">
              <Link
                to="/"
                className="text-gray-700 hover:text-[#23a6f0] font-montserrat py-2 transition-colors w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Shop Dropdown */}
              <div className="w-full flex flex-col items-center border-t border-b py-2">
                <button
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="text-gray-700 hover:text-[#23a6f0] font-montserrat flex items-center gap-2 py-2"
                >
                  Shop <ChevronDown size={16} className={isShopOpen ? "rotate-180 transition-transform" : "transition-transform"} />
                </button>

                {isShopOpen && (
                  <div className="mt-2 flex flex-col items-center gap-2 w-full px-4">
                    <Link
                      to="/shop/all-products"
                      className="text-gray-600 hover:text-[#23a6f0] text-base py-1 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      All Products
                    </Link>

                    {/* Women Categories Mobile */}
                    {womenCategories.length > 0 && (
                      <div className="w-full text-left">
                        <p className="text-sm font-semibold text-gray-500 mt-2 mb-1">Women</p>
                        {womenCategories.map(category => (
                          <Link
                            key={category._id}
                            to={`/shop/category/${category._id}`}
                            className="block text-gray-600 hover:text-[#23a6f0] text-sm py-1 pl-4 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Men Categories Mobile */}
                    {menCategories.length > 0 && (
                      <div className="w-full text-left">
                        <p className="text-sm font-semibold text-gray-500 mt-2 mb-1">Men</p>
                        {menCategories.map(category => (
                          <Link
                            key={category._id}
                            to={`/shop/category/${category._id}`}
                            className="block text-gray-600 hover:text-[#23a6f0] text-sm py-1 pl-4 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    <Link
                      to="/shop/sale"
                      className="text-red-600 hover:text-red-700 text-base py-1 font-semibold transition-colors mt-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sale
                    </Link>
                  </div>
                )}
              </div>

              <Link
                to="/about"
                className="text-gray-700 hover:text-[#23a6f0] font-montserrat py-2 transition-colors w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-[#23a6f0] font-montserrat py-2 transition-colors w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-[#23a6f0] font-montserrat py-2 transition-colors w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/pages"
                className="text-gray-700 hover:text-[#23a6f0] font-montserrat py-2 transition-colors w-full text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Pages
              </Link>

              {/* Mobile Auth Links */}
              <div className="border-t w-full pt-4 mt-2">
                {!user.email ? (
                  <div className="flex flex-col items-center gap-3">
                    <Link
                      to="/signin"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="text-[#23a6f0] hover:text-blue-700 font-medium py-2 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Register
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="flex items-center gap-3 mb-2">
                      <Gravatar email={user.email} size={40} className="rounded-full" />
                      <div>
                        <p className="font-semibold text-gray-800">{user.name}</p>
                        <p className="text-sm text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    <Link
                      to="/profile"
                      className="text-gray-700 hover:text-[#23a6f0] font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Profile
                    </Link>
                    <Link
                      to="/orders"
                      className="text-gray-700 hover:text-[#23a6f0] font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      My Orders
                    </Link>
                    <button
                      onClick={logout}
                      className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 mt-2 pt-2 border-t"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}