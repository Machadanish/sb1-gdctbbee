import React from 'react';
import { Shield } from 'lucide-react';
import { AuthTabs } from '../components/auth/AuthTabs';

export const Auth: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Shield className="h-12 w-12 text-indigo-400" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
          Campus Security System
        </h2>
        <p className="mt-2 text-center text-sm text-gray-400">
          Sign in or create an account to continue
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <AuthTabs />
        </div>
      </div>
    </div>
  );
};