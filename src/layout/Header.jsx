import { Home, Info, Mail, Search, ShoppingBasket, Heart, UserIcon, Menu } from 'lucide-react';
import { useState } from 'react';
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full h-16 md:h-[91px] fixed top-0 left-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto h-full px-4 md:px-8 flex items-center justify-between">
        
        {/* Logo ve Mobile Menu Button */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg cursor-pointer" onClick={handleMenuOpen}>
            <Menu size={24} className="text-gray-700" />
          </button>
          
          {/* Logo */}
          <span className="font-bold text-xl md:text-3xl text-gray-900">STORE</span>
        </div>

        {/* Desktop Menu - Ortada */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-1 lg:gap-2">
            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Home size={16} />
              <span className="hidden lg:inline">Anasayfa</span>
            </button>

            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Info size={16} />
              <span className="hidden lg:inline">About</span>
            </button>

            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Mail size={16} />
              <span className="hidden lg:inline">Contact</span>
            </button>

            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Home size={16} />
              <span className="hidden lg:inline">Products</span>
            </button>

            <button className="cursor-pointer text-sm flex items-center gap-2 text-gray-700 hover:text-[#23a6f0] transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
              <Info size={16} />
              <span className="hidden lg:inline">Services</span>
            </button>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-3 md:gap-6">
          
          {/* Search Button - Always Visible */}
          <button className="text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg">
            <Search size={20} />
          </button>
          
          {/* Cart Button - Desktop Only */}
          <button className="hidden md:flex text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative">
            <ShoppingBasket size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>
          
          {/* Wishlist Button - Desktop Only */}
          <button className="hidden md:flex text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg">
            <Heart size={20} />
          </button>
          
          {/* Login Button */}
          <button className="text-[#23a6f0] hover:text-blue-700 font-medium flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg hover:bg-gray-100">
            <UserIcon size={18} />
            <span className="hidden md:inline">Login/Register</span>
            <span className="md:hidden">Login</span>
          </button>
          
          {/* Mobile Cart Button */}
          <button className="md:hidden text-[#23a6f0] hover:text-blue-700 p-2 hover:bg-gray-100 rounded-lg relative">
            <ShoppingBasket size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              2
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown (Hidden by default) */}
     
      {isMenuOpen && (
  <div className="md:hidden bg-white shadow-md w-full absolute top-full left-0 z-50">
    <div className="flex flex-col px-4 py-2 gap-1">
      <button className="text-gray-700 hover:text-[#23a6f0] px-3 py-2 rounded-lg text-left flex items-center gap-2">
        <Home size={16} /> Home
      </button>
      <button className="text-gray-700 hover:text-[#23a6f0] px-3 py-2 rounded-lg text-left flex items-center gap-2">
        <Info size={16} /> About
      </button>
      <button className="text-gray-700 hover:text-[#23a6f0] px-3 py-2 rounded-lg text-left flex items-center gap-2">
        <Mail size={16} /> Contact
      </button>
      <button className="text-gray-700 hover:text-[#23a6f0] px-3 py-2 rounded-lg text-left flex items-center gap-2">
        <ShoppingBasket size={16} /> Products
      </button>
      <button className="text-gray-700 hover:text-[#23a6f0] px-3 py-2 rounded-lg text-left flex items-center gap-2">
        <Info size={16} /> Services
      </button>
    </div>
  </div>
)}

    </nav>
  );
}

export default Header;