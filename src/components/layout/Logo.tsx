import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center">
        <Shield className="h-8 w-8 text-indigo-400" />
        <span className="ml-2 text-white text-lg font-semibold">Campus Security</span>
      </Link>
    </div>
  );
};