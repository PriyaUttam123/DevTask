import React from 'react';
import ResultCard from './ResultCard';

const KeyTakeawaysCard = ({ takeaways }) => {
  return (
    <ResultCard
      icon={
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      }
      title="Key Takeaways"
      gradient="from-amber-500 to-orange-500"
    >
      <ul className="space-y-3">
        {takeaways && takeaways.length > 0 ? (
          takeaways.map((takeaway, index) => (
            <li key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mt-0.5">
                <svg className="w-4 h-4 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-gray-700">{takeaway}</span>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No key takeaways available</p>
        )}
      </ul>
    </ResultCard>
  );
};

export default KeyTakeawaysCard;
