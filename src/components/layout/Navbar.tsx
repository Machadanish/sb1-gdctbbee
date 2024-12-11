import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Logo } from './Logo';
import { NavigationItems } from './NavigationItems';
import { UserMenu } from './UserMenu';

export const Navbar: React.FC = () => {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="flex items-center space-x-4">
            <NavigationItems />
            {user && <UserMenu />}
          </div>
        </div>
      </div>
    </nav>
  );
};