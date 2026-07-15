import React, { useState } from 'react';

const ArticleInput = ({ articleText, setArticleText, articleUrl, setArticleUrl }) => {
  const [showUrlInput, setShowUrlInput] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* URL Input Toggle */}
      <div className="flex justify-center">
        <button
          onClick={() => setShowUrlInput(!showUrlInput)}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center space-x-2 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span>{showUrlInput ? 'Hide URL Input' : 'Or paste a news URL'}</span>
        </button>
      </div>

      {/* URL Input */}
      {showUrlInput && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-4 transition-all duration-300">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <input
              type="url"
              placeholder="Paste news article URL here..."
              value={articleUrl}
              onChange={(e) => setArticleUrl(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
      )}

      {/* Main Textarea */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 transition-all duration-300 hover:shadow-xl">
        <div className="relative">
          <textarea
            value={articleText}
            onChange={(e) => setArticleText(e.target.value)}
            placeholder="Paste your news article here for AI-powered analysis..."
            className="w-full h-64 resize-none bg-gray-50 border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-700 placeholder-gray-400"
          />
          <div className="absolute bottom-4 right-4 text-sm text-gray-400">
            {articleText.length} characters
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleInput;
