import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const ProtectedRoute = ({ role, requiredRole, children }) => {
  const token = localStorage.getItem('token');
  
  console.log('Token:', token);
  console.log(role);

  if (!token) {
    return <Navigate to="/login" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    console.log('Decoded Token:', decodedToken);

    // Check if the token is expired
    if (decodedToken.exp < Date.now() / 1000) {
      localStorage.removeItem('token');
      return <Navigate to="/login" />;
    }

    // Ensure role matches the required role
    if (decodedToken.role !== requiredRole) {
      console.log('Role mismatch:', decodedToken.role, 'vs', requiredRole);
      return <Navigate to="/login" />;
    }

    return children;
  } catch (error) {
    console.error('Token decoding error:', error);
    localStorage.removeItem('token');
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
