import React from 'react';
import ResultCard from './ResultCard';

const CategoryCard = ({ category, subcategory }) => {
  const getCategoryColor = (category) => {
    const colors = {
      'technology': 'from-blue-500 to-cyan-500',
      'politics': 'from-red-500 to-rose-500',
      'business': 'from-green-500 to-emerald-500',
      'sports': 'from-orange-500 to-amber-500',
      'entertainment': 'from-purple-500 to-pink-500',
      'health': 'from-teal-500 to-green-500',
      'science': 'from-indigo-500 to-violet-500',
      'world': 'from-slate-500 to-gray-500',
    };
    return colors[category?.toLowerCase()] || 'from-blue-500 to-indigo-500';
  };

  return (
    <ResultCard
      icon={
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      }
      title="Category"
      gradient={getCategoryColor(category)}
    >
      <div className="space-y-2">
        <div className="flex items-center space-x-3">
          <span className="text-2xl font-bold text-gray-800 capitalize">
            {category || "General"}
          </span>
        </div>
        {subcategory && (
          <p className="text-sm text-gray-500 capitalize">
            Subcategory: {subcategory}
          </p>
        )}
      </div>
    </ResultCard>
  );
};

export default CategoryCard;
