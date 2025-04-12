import React from 'react';

const PageLoading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-blue-500"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default PageLoading;
