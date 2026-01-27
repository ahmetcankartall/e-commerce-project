import { useState } from 'react';
import { Home, Info, Mail, Search, ShoppingBasket, Heart, UserIcon, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-white w-full shadow-sm h-[91px] md:h-[91px] flex lg:justify-center">
      <div className=" w-full h-full lg:max-w-[1100px]  flex items-center justify-between px-4 md:px-8">

        {/* Logo ve Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            onClick={handleMenuOpen}
          >
            <Menu size={24} className="text-gray-700" />
          </button>

          {/* Logo */}
          <span className="font-bold text-2xl md:text-3xl text-gray-900 font-montserrat">Bandage</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-2 lg:gap-4">
            <Link
              to="/"
              className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Home size={18} />
              <span className="hidden lg:inline font-montserrat">HOME</span>
            </Link>
            <Link
              to="/shop"
              className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Info size={18} />
              <span className="hidden lg:inline font-montserrat">Shop</span>
            </Link>
            <Link
              to="/about"
              className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Mail size={18} />
              <span className="hidden lg:inline font-montserrat">About</span>
            </Link>
            <Link
              to="/blog"
              className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Home size={18} />
              <span className="hidden lg:inline font-montserrat">Blog</span>
            </Link>
            <Link
              to="/contact"
              className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
            >
              <Info size={18} />
              <span className="hidden lg:inline font-montserrat">Contact</span>
            </Link>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3 md:gap-6 flex-wrap">

          {/* Search */}
          <button className="text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg">
            <Search size={18} />
          </button>

          {/* Cart - Desktop */}
          <button className="hidden md:flex text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative">
            <ShoppingBasket size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
          </button>

          {/* Wishlist - Desktop */}
          <button className="hidden md:flex text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg">
            <Heart size={20} />
          </button>

          {/* Login */}
          <button className="text-[#23a6f0] hover:text-blue-700 font-medium flex items-center gap-1 md:gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <UserIcon size={18} />
            <span className="hidden md:inline font-montserrat hover:cursor-pointer">Login/Register</span>
            <span className="md:hidden text-xs hover:cursor-pointer">Login</span>
          </button>

          {/* Mobile Cart */}
          <button className="md:hidden text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative">
            <ShoppingBasket size={16} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[91px] left-0 w-full bg-white shadow-md z-40">
          <div className="flex flex-col items-center py-6 gap-6 text-lg">
            <Link to="/" className="text-gray-700 hover:text-[#23a6f0] font-montserrat">Home</Link>
            <Link to="/shop" className="text-gray-700 hover:text-[#23a6f0] font-montserrat">Shop</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#23a6f0] font-montserrat">About</Link>
            <Link to="/blog" className="text-gray-700 hover:text-[#23a6f0] font-montserrat">Blog</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#23a6f0] font-montserrat">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
