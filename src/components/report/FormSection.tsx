import React from 'react';

interface FormSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
      <div className="space-y-6">{children}</div>
    </div>
  );
};