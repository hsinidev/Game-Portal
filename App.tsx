
import React, { useState, useEffect } from 'react';
import { gamesList } from './constants';

// Define the Game type locally to match the data source
interface Game {
  GAME_NAME: string;
  SLUG: string;
  IFRAME_URL: string;
  ICON_URL: string;
  EXCERPT: string;
  SEO_ARTICLE_FULL: string;
  HOW_TO_PLAY: string;
  RELATED_GAMES: string[];
}

const updateMetaTags = (game: Game | null) => {
  if (!game) return;

  const description = game.EXCERPT.replace(/<[^>]*>?/gm, ''); // Strip HTML tags for meta description
  const canonicalUrl = `https://yourdomain.com/play/${game.SLUG}.html`;

  document.title = `${game.GAME_NAME} - Play Online Games Unblocked | FighterPlay`;
  
  // Helper to update or create meta tags
  const setMeta = (nameOrProperty: string, content: string) => {
    let element = document.querySelector(`meta[name="${nameOrProperty}"]`) || document.querySelector(`meta[property="${nameOrProperty}"]`);
    if (element) {
      element.setAttribute('content', content);
    }
  };
  
  let canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    canonical.setAttribute('href', canonicalUrl);
  }

  setMeta('description', description);
  setMeta('og:title', document.title);
  setMeta('og:description', description);
  setMeta('og:url', canonicalUrl);
  setMeta('og:image', game.ICON_URL);
  setMeta('twitter:title', document.title);
  setMeta('twitter:description', description);
  setMeta('twitter:url', canonicalUrl);
  setMeta('twitter:image', game.ICON_URL);
};

const Header: React.FC = () => (
  <header className="bg-gray-800 shadow-lg sticky top-0 z-10">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div>
        <a href="#" className="text-3xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          FighterPlay
        </a>
        <p className="text-gray-400 text-sm">Play Online Games Unblocked</p>
      </div>
    </nav>
  </header>
);

const GamePlayer: React.FC<{ game: Game }> = ({ game }) => (
  <section className="mb-8">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
      {game.GAME_NAME}
    </h1>
    <div className="aspect-[16/9] bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-gray-700">
      <iframe
        key={game.SLUG} // Add key to force re-render on game change
        src={game.IFRAME_URL}
        className="w-full h-full"
        frameBorder="0"
        allowFullScreen
        title={game.GAME_NAME}
      ></iframe>
    </div>
  </section>
);

const GameInfo: React.FC<{ game: Game }> = ({ game }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'howToPlay'>('description');

  useEffect(() => {
    // Reset to description tab when game changes
    setActiveTab('description');
  }, [game]);

  return (
    <section className="bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg text-gray-300">
      <div className="flex border-b border-gray-700 mb-6">
        <button
          onClick={() => setActiveTab('description')}
          aria-pressed={activeTab === 'description'}
          className={`py-2 px-4 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-t-md ${activeTab === 'description' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('howToPlay')}
          aria-pressed={activeTab === 'howToPlay'}
          className={`py-2 px-4 font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-t-md ${activeTab === 'howToPlay' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'}`}
        >
          How to Play
        </button>
      </div>
      <div className="prose prose-invert max-w-none">
        {activeTab === 'description' && (
          <div dangerouslySetInnerHTML={{ __html: game.EXCERPT + game.SEO_ARTICLE_FULL }} />
        )}
        {activeTab === 'howToPlay' && (
          <div dangerouslySetInnerHTML={{ __html: game.HOW_TO_PLAY }} />
        )}
      </div>
    </section>
  );
};

const RelatedGames: React.FC<{ onSelectGame: (slug: string) => void; currentGameSlug: string }> = ({ onSelectGame, currentGameSlug }) => {
  return (
    <aside className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-cyan-400 border-b-2 border-cyan-800 pb-2">Similar Games</h2>
      <ul className="space-y-3 max-h-[calc(100vh-250px)] overflow-y-auto pr-2">
        {gamesList
          .filter(game => game.SLUG !== currentGameSlug)
          .map((game) => (
          <li key={game.SLUG}>
            <a 
              href={`?game=${game.SLUG}`} 
              onClick={(e) => { e.preventDefault(); onSelectGame(game.SLUG); }}
              className={`flex items-center gap-4 p-3 rounded-md transition-all duration-200 transform hover:scale-105 ${
                currentGameSlug === game.SLUG 
                ? 'bg-cyan-600 text-white shadow-md ring-2 ring-cyan-400' 
                : 'bg-gray-700 hover:bg-cyan-500 hover:text-black'
              }`}
              aria-current={currentGameSlug === game.SLUG ? 'page' : undefined}
            >
              <img src={game.ICON_URL} alt="" className="w-10 h-10 rounded-md object-cover flex-shrink-0 bg-gray-600" />
              <span className="font-semibold">{game.GAME_NAME}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const Footer: React.FC<{ game: Game }> = ({ game }) => (
    <footer className="bg-gray-800 mt-12 py-6 text-center text-gray-500">
        <div className="container mx-auto px-6">
            <p>&copy; {new Date().getFullYear()} FighterPlay. All rights reserved.</p>
            <p className="text-sm mt-1">Currently playing: {game.GAME_NAME}</p>
        </div>
    </footer>
);

function App() {
  const [currentGame, setCurrentGame] = useState<Game | null>(null);

  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const slug = params.get('game') || 'arithmetica'; // Default to arithmetica
      const game = gamesList.find(g => g.SLUG === slug) || gamesList.find(g => g.SLUG === 'arithmetica');
      
      if(game) {
        setCurrentGame(game);
        updateMetaTags(game);
      }
    };

    handleUrlChange(); // Initial load

    window.addEventListener('popstate', handleUrlChange); // Handle back/forward buttons
    return () => window.removeEventListener('popstate', handleUrlChange);
  }, []);

  const handleSelectGame = (slug: string) => {
    const game = gamesList.find(g => g.SLUG === slug);
    if (game && game.SLUG !== currentGame?.SLUG) {
      setCurrentGame(game);
      const url = new URL(window.location.href);
      url.searchParams.set('game', slug);
      window.history.pushState({ slug }, '', url.href);
      updateMetaTags(game);
    }
  };
  
  if (!currentGame) {
    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans flex items-center justify-center">
            <p className="text-2xl animate-pulse">Loading Game Portal...</p>
        </div>
    );
  }
  
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main className="container mx-auto p-4 lg:p-8 mt-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <GamePlayer game={currentGame} />
            <GameInfo game={currentGame} />
          </div>
          <div className="mt-8 lg:mt-0">
            <RelatedGames onSelectGame={handleSelectGame} currentGameSlug={currentGame.SLUG} />
          </div>
        </div>
      </main>
      <Footer game={currentGame} />
    </div>
  );
}

export default App;
