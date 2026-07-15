import React from 'react';
import ResultCard from './ResultCard';

const ReadingTimeCard = ({ readingTime, wordCount }) => {
  const formatReadingTime = (minutes) => {
    if (minutes < 1) {
      return '< 1 min read';
    }
    return `${Math.round(minutes)} min read`;
  };

  return (
    <ResultCard
      icon={
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      }
      title="Reading Time"
      gradient="from-slate-500 to-gray-600"
    >
      <div className="space-y-3">
        <div className="flex items-center space-x-4">
          <div className="text-3xl font-bold text-gray-800">
            {formatReadingTime(readingTime)}
          </div>
        </div>
        {wordCount && (
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>{wordCount.toLocaleString()} words</span>
          </div>
        )}
        <div className="pt-2 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            Based on average reading speed of 200 words per minute
          </p>
        </div>
      </div>
    </ResultCard>
  );
};

export default ReadingTimeCard;
