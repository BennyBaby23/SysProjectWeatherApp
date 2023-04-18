import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let isLoggedIn = true;


function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Sydney',
    },
    {
      id: 3,
      title: 'Toronto',
    },
    {
      id: 4,
      title: 'Tokyo',
    },
    {
      id: 5,
      title: 'Mumbai',
    },
  ];

  const handleLogoutClick = () => {
    window.location.href = '/';
  };

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
      <button
        className="text-white text-lg font-medium bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </div>
  );
}

export default TopButtons;
