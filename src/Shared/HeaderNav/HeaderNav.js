import React, { useState } from "react";
import { useSelector, } from "react-redux";
import { Link } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  LogOut,
  LayoutDashboard,
  Menu,
  X,
  ChevronDown
} from "lucide-react";

const HeaderNav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const { user } = useSelector((state) => state?.auth);


  const cartItems = [
    { id: 1, name: "Essence Mascara", price: 9.99, qty: 1 },
  ];
  const cartTotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Home2", href: "/home2" },
    { label: "Shop", href: "/shop" },
    { label: "Blogs", href: "/blogs" },
    { label: "Offer", href: "/flashSale" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-[#E9E9E7] font-sans text-[#37352F]">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* 1. Logo */}
          <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
            <div className="w-8 h-8 bg-[#37352F] rounded-md flex items-center justify-center">
              <span className="text-xl font-bold text-white">N</span>
            </div>
            <span className="hidden text-lg font-bold tracking-tight sm:block">NextCart</span>
          </Link>

          {/* 2. Search Bar (Notion Style) */}
          <div className="flex-1 hidden max-w-xl md:block">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ADADA7] group-focus-within:text-[#37352F]" size={16} />
              <input
                type="text"
                placeholder="Search products, brands..."
                className="w-full bg-[#F7F7F5] border border-[#E9E9E7] rounded-lg py-2 pl-10 pr-4 text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2EAADC]/20 transition-all placeholder-[#ADADA7]"
              />
            </div>
          </div>

          {/* 3. Right Actions (Cart & Profile) */}
          <div className="flex items-center gap-2">

            {/* Nav Links - Desktop */}
            <div className="items-center hidden gap-1 mr-4 lg:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-[#F1F1EF] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Cart Dropdown */}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-sm btn-circle hover:bg-[#F1F1EF]">
                <div className="indicator">
                  <ShoppingCart size={20} strokeWidth={1.5} />
                  {cartItems.length > 0 && (
                    <span className="text-white bg-blue-600 border-none badge badge-xs indicator-item">
                      {cartItems.length}
                    </span>
                  )}
                </div>
              </label>
              <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-72 bg-white border border-[#E9E9E7] shadow-xl shadow-black/5">
                <div className="p-4 card-body">
                  <span className="font-bold text-sm uppercase tracking-wider text-[#787774]">Cart Summary</span>
                  <div className="py-2">
                    {cartItems.length > 0 ? (
                      cartItems.map(item => (
                        <div key={item.id} className="flex justify-between py-1 text-sm border-b border-gray-50">
                          <span>{item.name}</span>
                          <span className="font-bold">${item.price}</span>
                        </div>
                      ))
                    ) : (
                      <p className="text-[#ADADA7] italic text-sm py-4">Your cart is empty.</p>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-2 text-base font-bold">
                    <span>Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="mt-4 card-actions">
                    <button className="btn btn-block bg-[#37352F] hover:bg-black text-white border-none rounded-lg btn-sm normal-case">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Auth/Profile Section */}
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-full cursor-pointer hover:bg-[#F1F1EF] transition-all border border-transparent hover:border-[#E9E9E7]">
                  <div className="flex items-center justify-center w-8 h-8 text-xs font-bold text-blue-700 bg-blue-100 rounded-full">
                    {user?.name?.charAt(0) || "U"}
                  </div>
                  <ChevronDown size={14} className="text-[#ADADA7]" />
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow-xl shadow-black/5 border border-[#E9E9E7] dropdown-content bg-white rounded-xl w-56 text-sm">
                  <li className="px-3 py-2 border-b border-[#F1F1EF] mb-1">
                    <p className="font-bold truncate">{user?.name || "User Account"}</p>
                    <p className="text-[11px] text-[#787774] truncate">{user?.email}</p>
                  </li>
                  <li>
                    <Link to="/profile" className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#F1F1EF]">
                      <LayoutDashboard size={16} /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <button className="flex items-center w-full gap-2 p-2 text-red-600 rounded-lg hover:bg-red-50">
                      <LogOut size={16} /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex items-center gap-1">
                <Link to="/login" className="px-3 py-1.5 text-sm font-semibold rounded-md hover:bg-[#F1F1EF] transition-all">
                  Log in
                </Link>
                <Link to="/register" className="px-3 py-1.5 text-sm font-semibold bg-[#37352F] text-white rounded-md hover:bg-black transition-all hidden sm:block">
                  Sign up
                </Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden btn btn-ghost btn-sm btn-circle hover:bg-[#F1F1EF]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#F1F1EF] bg-white animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-1 px-2">
              <div className="px-3 pb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#ADADA7]" size={14} />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-[#F7F7F5] border border-[#E9E9E7] rounded-lg py-1.5 pl-9 pr-4 text-sm outline-none"
                  />
                </div>
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-3 text-base font-medium rounded-lg hover:bg-[#F1F1EF]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {!user && (
                <Link
                  to="/register"
                  className="mx-3 mt-2 px-4 py-2 text-center text-white bg-[#37352F] rounded-lg font-bold"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderNav;
