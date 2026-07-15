import React from 'react';
import ResultCard from './ResultCard';

const SummaryCard = ({ summary }) => {
  return (
    <ResultCard
      icon={
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      }
      title="Summary"
      gradient="from-blue-500 to-indigo-500"
    >
      <p className="text-gray-700 leading-relaxed">{summary || "No summary available"}</p>
    </ResultCard>
  );
};

export default SummaryCard;
