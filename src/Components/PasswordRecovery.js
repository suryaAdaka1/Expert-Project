import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimage from "./Images/loginimage.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "../App.css"

function PasswordRecovery( ) {
  const [username, setUsername] = useState('');

  // Update handleLogin in your React component
  

  return (
    <div>
      <div className='loginMain'>
        <img src={loginimage} className='loginleftImage' alt="Login visual"/>

        <div>
          <div>
            <h1 className='logintitles text-4xl font-bold'>Recover Password</h1>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-5">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={username}
                placeholder="email address"
                required
                className="min-w-[300px] appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
             Send
            </button>
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default PasswordRecovery;
