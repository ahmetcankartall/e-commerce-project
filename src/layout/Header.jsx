import { Home, Info, Mail, Search, ShoppingBasket, Heart, UserIcon, Menu } from 'lucide-react';
import { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full fixed top-0 left-0 z-50 shadow-sm h-[91px] md:h-[91px]">
      <div className="md:max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">

        {/* Logo ve Mobile Menu Button */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={handleMenuOpen}>
            <Menu size={24} className="text-gray-700" />
          </button>

          {/* Logo */}
          <span className="font-bold text-2xl md:text-3xl text-gray-900">STORE</span>
        </div>

        {/* Desktop Menu - Ortada */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-2 lg:gap-4">
            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Home size={18} />
              <span className="hidden lg:inline">HOME</span>
            </button>
            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Info size={18} />
              <span className="hidden lg:inline">About</span>
            </button>
            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Mail size={18} />
              <span className="hidden lg:inline">Contact</span>
            </button>
            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Home size={18} />
              <span className="hidden lg:inline">Products</span>
            </button>
            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Info size={18} />
              <span className="hidden lg:inline">Services</span>
            </button>
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
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>

          {/* Wishlist - Desktop */}
          <button className="hidden md:flex text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg">
            <Heart size={20} />
          </button>

          {/* Login */}
          <button className="text-[#23a6f0] hover:text-blue-700 font-medium flex items-center gap-1 md:gap-2 px-3 py-2 rounded-lg hover:bg-gray-100">
            <UserIcon size={18} />
            <span className="hidden md:inline">Login/Register</span>
            <span className="md:hidden text-xs">Login</span>
          </button>

          {/* Mobile Cart */}
          <button className="md:hidden text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative">
            <ShoppingBasket size={16} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[91px] left-0 w-screen bg-white shadow-md z-40">
          <div className="flex flex-col items-center py-6 gap-6 text-lg">
            <button className="text-gray-700 hover:text-[#23a6f0]">Home</button>
            <button className="text-gray-700 hover:text-[#23a6f0]">Product</button>
            <button className="text-gray-700 hover:text-[#23a6f0]">Pricing</button>
            <button className="text-gray-700 hover:text-[#23a6f0]">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
