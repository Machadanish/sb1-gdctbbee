import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { ProfileButton } from './profile/ProfileButton';
import { ProfileDropdown } from './profile/ProfileDropdown';

export const UserMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  
  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div className="relative ml-3" ref={dropdownRef}>
      <ProfileButton 
        user={user} 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />
      {isOpen && <ProfileDropdown />}
    </div>
  );
};