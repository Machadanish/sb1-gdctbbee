import React from 'react';
import { ChevronDown } from 'lucide-react';
import { User } from '../../../types/auth';

interface ProfileButtonProps {
  user: User | null;
  isOpen: boolean;
  onClick: () => void;
}

export const ProfileButton: React.FC<ProfileButtonProps> = ({ user, isOpen, onClick }) => {
  if (!user) return null;

  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      <div className="h-8 w-8 rounded-full bg-indigo-500 flex items-center justify-center">
        <span className="text-white font-medium">
          {user.name.charAt(0).toUpperCase()}
        </span>
      </div>
      <div className="text-left">
        <div className="text-sm font-medium">{user.name}</div>
        <div className="text-xs text-gray-400 capitalize">{user.role}</div>
      </div>
      <ChevronDown
        className={`h-4 w-4 transition-transform ${
          isOpen ? 'transform rotate-180' : ''
        }`}
      />
    </button>
  );
};