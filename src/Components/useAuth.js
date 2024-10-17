import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Correct import for jwt-decode

const useAuth = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        return navigate('/login');
      }

      try {
        const decodedToken = jwtDecode(token);
        const currentTime = Date.now() / 1000;

        if (decodedToken.exp < currentTime) {
          // Token is expired, attempt to refresh it
          const response = await fetch('http://localhost:5000/api/refresh-token', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json', // Add Content-Type header if needed
            },
          });

          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
          } else {
            localStorage.removeItem('token');
            navigate('/login');
          }
        }
      } catch (error) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };

    checkToken();
  }, [navigate]);
};

export default useAuth;
