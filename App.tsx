
import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import StorySection from './components/StorySection';
import PostGrid from './components/PostGrid';
import PostModal from './components/PostModal';
import ChatDrawer from './components/ChatDrawer';
import { POSTS } from './constants';
import { Post, TabType } from './types';
import { Box, LayoutGrid, Trophy, Menu, X, Flame } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>(TabType.OVERVIEW);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getDisplayPosts = () => {
    if (activeTab === TabType.REPOS) {
      return POSTS.filter(p => p.type === 'project' || p.type === 'experience');
    }
    if (activeTab === TabType.PACKAGES) {
      return POSTS.filter(p => p.type === 'education');
    }
    return [];
  };

  const handleNavigateToRepos = () => {
    setActiveTab(TabType.REPOS);
    const mainContainer = document.getElementById('main-scroll');
    if (mainContainer) {
      mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen w-full bg-transparent text-gray-300 overflow-hidden font-sans selection:bg-[#DA291C] selection:text-white">

      {/* --- Mobile Header (Visible only on small screens) --- */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a] border-b border-[#222] z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Flame className="text-[#DA291C] fill-[#DA291C]" size={20} />
          <span className="font-bold text-white tracking-wider">APON FC</span>
        </div>
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-white hover:text-[#DA291C] transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* --- Desktop Sidebar (Hidden on Mobile, Always visible on Desktop) --- */}
      <aside className="hidden md:flex w-80 flex-col border-r border-[#222] bg-[#080808] h-full flex-shrink-0 z-40 relative">
        <div className="h-full overflow-y-auto no-scrollbar">
          <ProfileHeader onOpenChat={() => setIsChatOpen(true)} />
        </div>
      </aside>

      {/* --- Mobile Sidebar Drawer (Overlay) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-0 left-0 bottom-0 w-80 bg-[#080808] border-r border-[#DA291C] shadow-2xl overflow-y-auto animate-slide-in-right" style={{ animationDirection: 'reverse' }}>
            <div className="absolute top-4 right-4 z-50">
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-[#111] rounded-full text-white border border-[#333]">
                <X size={20} />
              </button>
            </div>
            <ProfileHeader onOpenChat={() => {
              setIsChatOpen(true);
              setIsMobileMenuOpen(false);
            }} />
          </div>
        </div>
      )}

      {/* --- Main Content Area --- */}
      <main id="main-scroll" className="flex-1 h-full overflow-y-auto scroll-smooth bg-transparent relative pt-16 md:pt-0">

        {/* Sticky Navigation Tabs */}
        <header className="sticky top-0 z-30 bg-[#050505]/90 backdrop-blur-md border-b border-[#222] w-full shadow-lg shadow-black/50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab(TabType.OVERVIEW)}
                className={`flex items-center gap-2 py-5 text-sm font-bold uppercase tracking-widest border-b-4 transition-all whitespace-nowrap
                  ${activeTab === TabType.OVERVIEW ? 'border-[#DA291C] text-white' : 'border-transparent text-gray-500 hover:text-white hover:border-gray-800'}`}
              >
                <Trophy size={16} className={activeTab === TabType.OVERVIEW ? 'text-[#DA291C]' : ''} />
                Stadium Tour
              </button>
              <button
                onClick={() => setActiveTab(TabType.REPOS)}
                className={`flex items-center gap-2 py-5 text-sm font-bold uppercase tracking-widest border-b-4 transition-all whitespace-nowrap
                  ${activeTab === TabType.REPOS ? 'border-[#DA291C] text-white' : 'border-transparent text-gray-500 hover:text-white hover:border-gray-800'}`}
              >
                <Box size={16} className={activeTab === TabType.REPOS ? 'text-[#DA291C]' : ''} />
                Matches <span className="bg-[#222] text-gray-300 rounded-full px-2 py-0.5 text-[10px] font-mono">{POSTS.filter(p => p.type !== 'education').length}</span>
              </button>
              <button
                onClick={() => setActiveTab(TabType.PACKAGES)}
                className={`flex items-center gap-2 py-5 text-sm font-bold uppercase tracking-widest border-b-4 transition-all whitespace-nowrap
                  ${activeTab === TabType.PACKAGES ? 'border-[#DA291C] text-white' : 'border-transparent text-gray-500 hover:text-white hover:border-gray-800'}`}
              >
                <LayoutGrid size={16} className={activeTab === TabType.PACKAGES ? 'text-[#DA291C]' : ''} />
                Academy
              </button>
            </div>
          </div>
        </header>

        {/* Content Wrapper */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 min-h-[calc(100vh-80px)]">

          {activeTab === TabType.OVERVIEW ? (
            <StorySection onNavigateToRepos={handleNavigateToRepos} />
          ) : (
            <>
              {/* Tab Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 animate-fade-up">
                <div>
                  <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tighter mb-2">
                    {activeTab === TabType.REPOS ? 'Match History' : 'Youth Academy'}
                  </h1>
                  <div className="h-2 w-32 bg-[#DA291C] skew-x-12"></div>
                </div>
                <div className="hidden md:block text-right mt-4 md:mt-0">
                  <div className="text-xs font-mono text-[#DA291C] mb-1">CURRENT SEASON</div>
                  <div className="text-2xl font-bold text-white">2024/25</div>
                </div>
              </div>

              {/* Posts Grid */}
              <div className="animate-fade-up">
                <PostGrid posts={getDisplayPosts()} onPostClick={setSelectedPost} />
              </div>
            </>
          )}

          {/* Footer */}
          <footer className="mt-32 border-t border-[#222] pt-12 pb-20 text-xs font-mono text-gray-600 flex flex-col md:flex-row justify-between items-center gap-6 uppercase tracking-wider">
            <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
              <span className="font-bold text-gray-500">© 2024 Md. Apon Chowdhury</span>
              <a href="#" className="hover:text-[#DA291C] transition-colors">Old Trafford, Dhaka</a>
              <a href="#" className="hover:text-[#DA291C] transition-colors">Privacy Policy</a>
            </div>
            <div className="flex items-center gap-2 bg-[#111] px-4 py-2 rounded-full border border-[#222]">
              <span>Tactics by</span>
              <span className="text-[#DA291C] font-bold">Red Devil AI</span>
              <div className="w-2 h-2 bg-[#DA291C] rounded-full animate-pulse ml-1"></div>
            </div>
          </footer>
        </div>

      </main>

      {/* --- Modals & Drawers --- */}
      <PostModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      <ChatDrawer isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

    </div>
  );
};

export default App;
