import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ userName, toggleDropdown, isDropdownOpen, handleLogout }) => {
  const navigate = useNavigate();
  const name = userName || 'User';
  const profileLetter = name.charAt(0).toUpperCase();

  return (
    <header className="bg-blue-900 text-white shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo + Portal Name */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" // 🔁 Replace this path with your actual logo path
            alt="College Logo"
            className="h-10 w-10 object-contain"
          />
          <h1 className="text-xl sm:text-2xl font-semibold">
            Placement Cell Portal
          </h1>
        </div>

        {/* Right Side: Nav Links + Welcome + Profile */}
        <div className="flex items-center gap-6">
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-5 text-sm sm:text-base">
            <a href="/" className="hover:text-yellow-300">Home</a>
            <a href="#about" className="hover:text-yellow-300">About</a>
            <a href="#students" className="hover:text-yellow-300">Students</a>
            <a href="#recruiters" className="hover:text-yellow-300">Recruiters</a>
            <a href="#contact" className="hover:text-yellow-300">Contact</a>
          </nav>

          {/* Welcome message */}
          <div className="hidden sm:block text-yellow-300 font-medium truncate max-w-[200px]">
            Welcome, {name}
          </div>

          {/* Profile icon with dropdown */}
          <div className="relative">
            <div
              className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center text-lg font-bold cursor-pointer"
              onClick={toggleDropdown}
            >
              {profileLetter}
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 top-12 bg-white text-black rounded-lg shadow-md w-40 z-50">
                <button
                  onClick={() => navigate('/profile')}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile View
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
