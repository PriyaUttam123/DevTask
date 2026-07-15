import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 space-y-6">
      {/* Main Spinner */}
      <div className="relative">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-indigo-200 border-r-indigo-600 rounded-full animate-spin animation-delay-100"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-200 border-b-purple-600 rounded-full animate-spin animation-delay-200"></div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <p className="text-lg font-semibold text-gray-700">Analyzing your article...</p>
        <p className="text-sm text-gray-500">Our AI is extracting insights and generating summaries</p>
      </div>

      {/* Progress Steps */}
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          <span className="text-gray-600">Processing text</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse animation-delay-300"></div>
          <span className="text-gray-600">Analyzing sentiment</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse animation-delay-600"></div>
          <span className="text-gray-600">Generating insights</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;
