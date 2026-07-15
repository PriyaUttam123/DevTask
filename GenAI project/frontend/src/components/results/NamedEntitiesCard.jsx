import React from 'react';
import ResultCard from './ResultCard';

const NamedEntitiesCard = ({ entities }) => {
  const getEntityTypeColor = (type) => {
    switch (type?.toLowerCase()) {
      case 'person':
        return 'bg-blue-100 text-blue-700';
      case 'organization':
        return 'bg-green-100 text-green-700';
      case 'location':
        return 'bg-orange-100 text-orange-700';
      case 'date':
        return 'bg-purple-100 text-purple-700';
      case 'event':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <ResultCard
      icon={
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      }
      title="Named Entities"
      gradient="from-teal-500 to-cyan-500"
    >
      <div className="space-y-3">
        {entities && entities.length > 0 ? (
          entities.map((entity, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium text-gray-800">{entity.text}</span>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEntityTypeColor(entity.type)}`}>
                {entity.type}
              </span>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-sm">No named entities available</p>
        )}
      </div>
    </ResultCard>
  );
};

export default NamedEntitiesCard;
