// Navbar.tsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Dispatch a logout action and navigate to the login page
    // dispatch({ type: 'LOGOUT' });
    localStorage.removeItem('userAuth');
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-lg font-bold font-serif" style={{fontSize:"20px"}}>DASHBOARD</span>
        </div>
        <button
          onClick={handleLogout}
          className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
