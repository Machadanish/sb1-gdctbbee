import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProfileDropdownItemProps {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  className?: string;
}

export const ProfileDropdownItem: React.FC<ProfileDropdownItemProps> = ({
  icon: Icon,
  label,
  onClick,
  className = 'text-gray-300 hover:text-white',
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-600 ${className}`}
    >
      <Icon className="h-4 w-4 mr-2" />
      {label}
    </button>
  );
};