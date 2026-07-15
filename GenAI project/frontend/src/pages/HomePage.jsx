import React, { useState } from 'react';
import Navbar from '../components/common/Navbar';
import HeroSection from '../components/home/HeroSection';
import ArticleInput from '../components/home/ArticleInput';
import AnalyzeButton from '../components/home/AnalyzeButton';
import LoadingAnimation from '../components/common/LoadingAnimation';
import AskAI from '../components/home/AskAI';
import SummaryCard from '../components/results/SummaryCard';
import SentimentCard from '../components/results/SentimentCard';
import KeywordsCard from '../components/results/KeywordsCard';
import NamedEntitiesCard from '../components/results/NamedEntitiesCard';
import KeyTakeawaysCard from '../components/results/KeyTakeawaysCard';
import CategoryCard from '../components/results/CategoryCard';
import ReadingTimeCard from '../components/results/ReadingTimeCard';

const HomePage = () => {
  const [articleText, setArticleText] = useState('');
  const [articleUrl, setArticleUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [analysisResults, setAnalysisResults] = useState(null);

  const handleAnalyze = () => {
    if (!articleText.trim() && !articleUrl.trim()) return;

    setIsLoading(true);
    setShowResults(false);

    // Simulate API call (will be connected to backend later)
    setTimeout(() => {
      setAnalysisResults({
        summary: "This is a placeholder summary that will be replaced with actual AI-generated content when the backend is connected. The summary will provide a concise overview of the article's main points and key information.",
        sentiment: "positive",
        confidence: 87,
        keywords: ["technology", "innovation", "AI", "future", "development"],
        entities: [
          { text: "Google Gemini", type: "Organization" },
          { text: "OpenAI", type: "Organization" },
          { text: "San Francisco", type: "Location" },
          { text: "2024", type: "Date" }
        ],
        takeaways: [
          "AI technology is rapidly evolving and transforming industries",
          "Companies are investing heavily in AI research and development",
          "The future of AI looks promising with new breakthroughs expected"
        ],
        category: "technology",
        subcategory: "artificial intelligence",
        readingTime: 3.5,
        wordCount: 687
      });
      setIsLoading(false);
      setShowResults(true);
    }, 3000);
  };

  const isDisabled = !articleText.trim() && !articleUrl.trim();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ArticleInput
              articleText={articleText}
              setArticleText={setArticleText}
              articleUrl={articleUrl}
              setArticleUrl={setArticleUrl}
            />
            
            <div className="mt-8">
              <AnalyzeButton
                onClick={handleAnalyze}
                disabled={isDisabled}
                isLoading={isLoading}
              />
            </div>

            {isLoading && (
              <div className="mt-12">
                <LoadingAnimation />
              </div>
            )}

            {showResults && analysisResults && (
              <div className="mt-12 space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Analysis Results</h2>
                  <p className="text-gray-600">AI-powered insights from your article</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <SummaryCard summary={analysisResults.summary} />
                  <SentimentCard 
                    sentiment={analysisResults.sentiment} 
                    confidence={analysisResults.confidence} 
                  />
                  <KeywordsCard keywords={analysisResults.keywords} />
                  <NamedEntitiesCard entities={analysisResults.entities} />
                  <KeyTakeawaysCard takeaways={analysisResults.takeaways} />
                  <CategoryCard 
                    category={analysisResults.category} 
                    subcategory={analysisResults.subcategory} 
                  />
                  <ReadingTimeCard 
                    readingTime={analysisResults.readingTime} 
                    wordCount={analysisResults.wordCount} 
                  />
                </div>

                <div className="mt-12">
                  <AskAI />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2024 NewsAI. Powered by Google Gemini 2.5 Flash.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
