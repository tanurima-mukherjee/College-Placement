import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiBell } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

const StudentHeader = ({ user, toggleDropdown, isDropdownOpen, handleLogout }) => {
  const navigate = useNavigate();
  const [hasNotification, setHasNotification] = useState(true); // Simulate a new notification
  const safeUser = user || {};

  const profileLetter =
    safeUser.name?.[0]?.toUpperCase() ||
    safeUser.email?.[0]?.toUpperCase() ||
    '?';

  return (
    <header className="bg-gray-900 text-white px-6 py-3 shadow-md z-50 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">

        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.jpg"
            alt="College Logo"
            className="h-12 w-12 object-contain"
          />
        </div>

        {/* Search + Notification + Welcome + Profile */}
        <div className="flex items-center gap-6 flex-grow justify-end">

          {/* Search */}
          <div className="relative hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-3 py-2 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <IoSearchOutline className="absolute left-3 top-2.5 text-gray-400 text-lg" />
          </div>

          {/* Notification Bell */}
          <div className="relative group cursor-pointer">
            <FiBell className="text-2xl hover:text-yellow-400 transition" />
            {hasNotification && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full animate-pulse" />
            )}
          </div>

          {/* Welcome */}
          <span className="hidden sm:block text-yellow-400 font-medium truncate max-w-[200px]">
            Welcome, {safeUser.name || safeUser.email || 'Student'}
          </span>

          {/* Profile */}
          <div className="relative z-20">
            <div
              className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold cursor-pointer overflow-hidden hover:ring-2 hover:ring-yellow-400 transition"
              onClick={toggleDropdown}
            >
              {safeUser.avatar ? (
                <img
                  src={`http://localhost:3001${safeUser.avatar}`}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <span>{profileLetter}</span>
              )}
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 top-12 bg-white text-gray-900 rounded-lg shadow-md w-44 z-50">
                <button
                  onClick={() => navigate('/profile')}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                >
                  Profile View
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
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

export default StudentHeader;
