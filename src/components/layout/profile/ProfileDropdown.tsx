import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { ProfileDropdownItem } from './ProfileDropdownItem';

export const ProfileDropdown: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/auth');
  };

  return (
    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-700 ring-1 ring-black ring-opacity-5">
      <ProfileDropdownItem
        icon={User}
        label="Profile"
        onClick={() => navigate('/dashboard/profile')}
      />
      <ProfileDropdownItem
        icon={Settings}
        label="Settings"
        onClick={() => navigate('/dashboard/settings')}
      />
      <div className="border-t border-gray-600 my-1" />
      <ProfileDropdownItem
        icon={LogOut}
        label="Logout"
        onClick={handleLogout}
        className="text-red-400 hover:text-red-300"
      />
    </div>
  );
};