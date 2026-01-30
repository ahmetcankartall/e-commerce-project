import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { categoriesThunk } from '../store/thunks/categoriesThunk';
import {  Search, ShoppingBasket, Heart, Menu, LogOut } from 'lucide-react';
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
   <nav className='border w-full flex justify-center relative'>
    <div className='border w-full lg:max-w-[1440px] max-w-[414px] h-[91px] flex justify-center items-center lg:gap-6'>
        <div className="border w-[187px] h-[58px] flex items-center">
            <h3 className="font-bold text-2xl md:text-3xl text-gray-900 font-montserrat">Bandage</h3> 
            </div>
        <div className="border lg:w-[815px] h-[58px] w-[187px] flex items-center lg:justify-between justify-center">
            <div className="hidden border w-[361px] lg:flex items-center justify-between">
                <Link to="/" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center'>Home</Link>
                <Link to="/shop" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center' >Shop</Link>
                <Link to="/" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center' >About</Link>
                <Link to="/" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center' >Blog</Link>
                 <Link to="/" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center' >Contact</Link>
                  <Link to="/" className='text-[#737373] font-montserrat font-bold text-sm leading-6 tracking-[0.2px] text-center' >Pages</Link>
                </div>
                <div className="border flex flex-row  justify-center ">
                      {!user.email && (
                                 <div className="hidden lg:flex items-center gap-2">
                                   <Link to="/signin" className="text-[#23a6f0] hover:text-blue-700 font-medium px-2 py-2 rounded-lg">Login</Link>
                                   <Link to="/signup" className="text-[#23a6f0] hover:text-blue-700 font-medium px-2 py-2 rounded-lg">Register</Link>
                                 </div>
                               )}
                     
                               {user.email && (
                                 <div className="hidden relative lg:flex items-center gap-2 cursor-pointer" onClick={handleUserMenuOpen}>
                                   <span className='text-[#737373] text-xl'>{user.name}</span>
                                   <Gravatar email={user.email} size={30} className="rounded-full" />
                     
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
                     
                     
                      <button  className="w-[46px] h-[46px] text-black lg:text-[#23a6f0] lg:hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg flex justify-center items-center">
            <Search size={18} />
          </button>
            
          <button  className="w-[46px] h-[46px] lg:text-[#23a6f0] text-black lg:hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative flex justify-center items-center">
            <ShoppingBasket size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center ">2</span>
          </button>

          <button  className="hidden w-[46px] h-[46px] text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg lg:flex justify-center items-center">
            <Heart size={20} />
          </button>
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Menu size={24} onClick={handleMenuOpen} className="text-gray-700" />
          </button>

                </div>
    
        </div>
         {isMenuOpen && (
      <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-md z-40 max-h-[calc(100vh-91px)] overflow-y-auto">
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

    </div>
   </nav>
  );
}