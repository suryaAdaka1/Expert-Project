import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from './Components/Notfound/NotFound';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login';
import LearnerHome from './Components/LearnerHome/LearnerHome';
import AdminHome from './Components/AdminHome/AdminHome';
import NormalHome from './Components/NormalHome/NormalHome';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import { jwtDecode } from 'jwt-decode';
import MultiStepForm from './Components/Register/MultiStepForm';
import PasswordRecovery from './Components/PasswordRecovery';

function App() {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Optionally check localStorage to set initial role
    const token = localStorage.getItem('token');
    if (token) {
      // Decode token and set role (you might need to use jwt-decode here)
      const decodedToken = jwtDecode(token);
      setRole(decodedToken.role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    setRole(null);
    navigate('/'); // Navigate to the home page or login page
  };

  return (
    <div className="app-container flex flex-col min-h-screen">
      <Routes>
        <Route path="/" element={<NormalHome />} />
        <Route path="/register" element={<MultiStepForm />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/login" element={<Login setRole={setRole} />} />
        <Route
          path="/learner"
          element={
            <ProtectedRoute role={role} requiredRole="learner">
              <LearnerHome handleLogout={handleLogout} />
              <LearnerHome />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute role={role} requiredRole="admin">
              <AdminHome handleLogout={handleLogout} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
