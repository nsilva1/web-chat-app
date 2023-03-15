import React from 'react';
import { ContextProps, UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = UserAuth() as ContextProps;

  const handleLogout = async () => {
    try {
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='navbar fixed z-10 bg-neutral text-neutral-content'>
      <div className='containerWrap flex justify-between'>
        <a className='btn btn-ghost normal-case text-xl'>Web Chat</a>
        {currentUser ? (
          <button onClick={handleLogout} className='btn'>
            Logout
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Navbar;
