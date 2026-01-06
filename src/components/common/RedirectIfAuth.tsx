import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const RedirectIfAuth: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    // While checking for user session, show a loading indicator
    // This prevents a flash of the login page for already logged-in users
    return <div>Loading...</div>;
  }

  if (user) {
    // If the user is authenticated, redirect them away from the auth pages
    // towards the main application dashboard.
    return <Navigate to="/dashboard" replace />;
  }

  // If the user is not authenticated, allow them to see the login/signup page.
  return <Outlet />;
};

export default RedirectIfAuth;
