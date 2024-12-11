import React from 'react';
import { useAuth } from '../contexts/AuthContext';

export const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="bg-gray-800 shadow rounded-lg p-6">
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 rounded-full bg-indigo-500 flex items-center justify-center">
            <span className="text-3xl text-white font-medium">
              {user?.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">{user?.name}</h1>
            <p className="text-gray-400 capitalize">{user?.role}</p>
            <p className="text-gray-400">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};