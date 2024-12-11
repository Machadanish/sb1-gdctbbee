import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { SignUpForm } from './SignUpForm';

export const AuthTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  return (
    <div>
      <div className="sm:hidden">
        <select
          className="block w-full rounded-md border-gray-600 bg-gray-700 text-white py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value as 'login' | 'signup')}
        >
          <option value="login">Sign In</option>
          <option value="signup">Sign Up</option>
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-700">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('login')}
              className={`${
                activeTab === 'login'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
            >
              Sign In
            </button>
            <button
              onClick={() => setActiveTab('signup')}
              className={`${
                activeTab === 'signup'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300'
              } whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium`}
            >
              Sign Up
            </button>
          </nav>
        </div>
      </div>
      <div className="mt-8">
        {activeTab === 'login' ? <LoginForm /> : <SignUpForm />}
      </div>
    </div>
  );
};