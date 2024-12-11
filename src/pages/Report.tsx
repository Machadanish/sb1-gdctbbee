import React from 'react';
import { IncidentReportForm } from '../components/report/IncidentReportForm';

export const Report: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Report Incident</h1>
        <p className="mt-2 text-gray-400">
          Create a detailed incident report. Your report will be reviewed by administrative
          staff and security officers.
        </p>
      </div>
      <IncidentReportForm />
    </div>
  );
};