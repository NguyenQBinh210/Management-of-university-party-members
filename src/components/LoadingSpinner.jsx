import React from 'react';

const LoadingSpinner = ({ size = 'medium', color = 'blue', text = 'Đang tải...' }) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-8 w-8',
    large: 'h-12 w-12'
  };

  const colorClasses = {
    blue: 'text-blue-500',
    red: 'text-red-500',
    green: 'text-green-500',
    gray: 'text-gray-500'
  };

  return (
    <div className="flex flex-col items-center justify-center py-8 animate-fade-in-up">
      <div className="relative">
        {/* Outer ring */}
        <div className={`${sizeClasses[size]} border-4 border-gray-200 rounded-full animate-spin`}></div>
        {/* Inner ring */}
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-transparent border-t-current ${colorClasses[color]} rounded-full animate-spin`}></div>
        {/* Pulse effect */}
        <div className={`absolute top-0 left-0 ${sizeClasses[size]} border-4 border-transparent border-t-current ${colorClasses[color]} rounded-full animate-pulse opacity-50`}></div>
      </div>
      {text && (
        <p className={`mt-4 text-sm font-medium ${colorClasses[color]} animate-pulse`}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
