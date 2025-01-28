import { Navigate } from 'react-router-dom';
import { isTokenExpired } from '../authentication/tokenVerification.js';

export const ProtectedRoute = ({
  redirectPath = '/login', // Caminho padrão para redirecionamento
  adminOnly = false,
  children,
}) => {
  const token = localStorage.getItem('token');
  const isAdmin = localStorage.getItem('isAdmin') === 'true'; 

  if (!token || isTokenExpired(token)) {
    return <Navigate to={redirectPath} replace />;
  }

  if (adminOnly && !isAdmin) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};
