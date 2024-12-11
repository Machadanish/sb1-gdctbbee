import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { NavItem } from './NavItem';

export const NavigationItems: React.FC = () => {
  const { user } = useAuth();

  const isUserOrAdmin = user?.role === 'user' || user?.role === 'admin';

  return (
    <div className="hidden md:flex items-center space-x-4">
      <NavItem to="/dashboard" label="Dashboard" />
      <NavItem to="/dashboard/report" label="Report" />
      {isUserOrAdmin && (
        <>
          <NavItem to="/dashboard/vehicle" label="Vehicle" />
          <NavItem to="/dashboard/compound" label="Compound" />
          <NavItem to="/dashboard/merit" label="Merit" />
        </>
      )}
    </div>
  );
};