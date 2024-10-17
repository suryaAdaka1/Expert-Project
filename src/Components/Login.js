import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import loginimage from "./Images/loginimage.png";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "../App.css"

function Login({ setRole }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const goToPasswordRecovery = () => {
    navigate('/password-recovery'); // Navigating to Password Recovery page
  };

  // Update handleLogin in your React component
  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token); // Store token
        setRole(data.role);
        if (data.role === 'admin') {
          navigate('/admin');
        } else if (data.role === 'learner') {
          navigate('/learner');
        }
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred during login');
    }
  };

  return (
    <div>
      <div className='loginMain'>
        <img src={loginimage} className='loginleftImage' alt="Login visual"/>

        <div>
          <div>
            <h1 className='logintitles text-4xl font-bold'>Hello Again</h1>
            <h3 className='logintitles text-2xl'>Welcome back you've been missed</h3>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mt-5">
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="add email"
                required
                className="min-w-[300px] appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-1 mt-5">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'} // Toggle between password and text
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                required
                className="min-w-[300px] appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Show appropriate icon */}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-5">
            <div className="text-sm">
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500"
                onClick={goToPasswordRecovery} // Navigate to Password Recovery
              >
                Password Recovery
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleLogin}
              className="mt-3 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>

          {error && (
            <div className="mt-3 text-red-500 text-sm">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
