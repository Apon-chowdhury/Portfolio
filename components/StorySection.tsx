
import React from 'react';
import { STORY_DATA, SKILLS, PLAYLISTS, MOVIES } from '../constants';
import { ArrowRight, Music, Film, Zap, Database, Trophy, Play } from 'lucide-react';

interface StorySectionProps {
  onNavigateToRepos: () => void;
}

const StorySection: React.FC<StorySectionProps> = ({ onNavigateToRepos }) => {
  return (
    <div className="pb-20">
      
      {/* Hero Section */}
      <div className="min-h-[60vh] flex flex-col justify-center py-16 relative">
        {/* Background Gradient Spot */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#DA291C] opacity-[0.05] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="font-mono text-[#DA291C] mb-8 text-sm tracking-[0.2em] uppercase font-bold flex items-center gap-3">
          <span className="w-2 h-2 bg-[#DA291C] rounded-full animate-ping"></span>
          {STORY_DATA.hero.greeting}
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-white mb-10 leading-[0.9] tracking-tighter uppercase italic">
          {STORY_DATA.hero.title.split(' ').map((word, i) => (
              <span key={i} className={i >= 2 ? 'text-[#DA291C]' : ''}>{word} <br className="md:hidden"/></span>
          ))}
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light border-l-4 border-[#DA291C] pl-8 mb-12">
          {STORY_DATA.hero.subtitle}
        </p>
        
        <div className="flex flex-wrap gap-4">
           <button 
             onClick={onNavigateToRepos}
             className="bg-[#DA291C] hover:bg-[#b01e14] text-white px-10 py-5 rounded-sm font-black uppercase tracking-widest flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(218,41,28,0.3)] hover:shadow-[0_0_40px_rgba(218,41,28,0.5)] hover:-translate-y-1"
           >
             View The Tactics <ArrowRight size={20} />
           </button>
        </div>
      </div>

      {/* The Who & Why Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-40">
        <div className="space-y-10">
           <div className="flex items-center gap-3 text-[#DA291C] mb-2">
              <div className="p-2 bg-[#DA291C]/10 rounded-full"><Zap size={20} className="fill-[#DA291C]" /></div>
              <h2 className="text-sm font-bold uppercase tracking-widest">The Manager</h2>
           </div>
           <h3 className="text-3xl md:text-5xl font-bold text-white leading-none uppercase italic">{STORY_DATA.about.title}</h3>
           <p className="text-gray-400 leading-loose text-lg font-light">
              {STORY_DATA.about.text}
           </p>
           <div className="bg-[#111] border border-[#333] p-8 relative overflow-hidden group hover:border-[#DA291C] transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#DA291C]"></div>
              <p className="italic text-white text-xl font-serif leading-relaxed opacity-90 relative z-10">
              "{STORY_DATA.about.quote}"
              </p>
              <Trophy className="absolute bottom-[-20px] right-[-20px] text-[#DA291C] opacity-5 w-32 h-32 -rotate-12 pointer-events-none" />
           </div>
        </div>
        
        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-[#DA291C]/10 to-transparent rounded-2xl -z-10"></div>
           <div className="bg-[#0a0a0a]/90 backdrop-blur-md p-10 rounded-xl border border-[#222] h-full shadow-2xl">
                <div className="flex items-center gap-2 text-[#DA291C] mb-10">
                    <Trophy size={18} />
                    <h2 className="text-sm font-bold uppercase tracking-widest">Skills Arsenal</h2>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {SKILLS.map(skill => (
                        <div key={skill.id} className="group flex items-center gap-5 p-4 bg-[#111] hover:bg-[#1a1a1a] rounded-md border border-[#333] hover:border-[#DA291C] transition-all cursor-default shadow-lg">
                            <div className="w-12 h-12 rounded-full border-2 border-[#333] overflow-hidden relative group-hover:border-[#DA291C] transition-colors">
                                <img src={skill.imageUrl} alt={skill.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold uppercase text-sm tracking-widest group-hover:text-[#DA291C] transition-colors">{skill.title}</h4>
                                <p className="text-xs text-gray-500 font-mono mt-1">{skill.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
           </div>
        </div>
      </div>

      {/* The Passion Section */}
      <div className="mb-40">
         <div className="flex items-end justify-between mb-12 border-b border-[#222] pb-8">
            <div>
                <div className="flex items-center gap-2 text-[#DA291C] mb-4">
                    <Music size={18} />
                    <h2 className="text-sm font-bold uppercase tracking-widest">Locker Room</h2>
                </div>
                <h3 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tight">Matchday Anthems</h3>
            </div>
         </div>
         
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {PLAYLISTS.map((pl) => (
               <a 
                 href={pl.externalLink} 
                 target="_blank" 
                 rel="noreferrer"
                 key={pl.id} 
                 className="group relative aspect-square bg-[#111] rounded-sm overflow-hidden cursor-pointer border border-[#222] hover:border-[#DA291C] transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(218,41,28,0.2)]"
               >
                  <img src={pl.imageUrl} alt={pl.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-5">
                     <span className="text-[#DA291C] text-[10px] font-bold uppercase tracking-widest mb-1 block">Spotify</span>
                     <h4 className="text-white font-bold uppercase text-xl leading-none truncate">{pl.title}</h4>
                  </div>

                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#DA291C] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100 shadow-lg z-10">
                      <Play size={24} fill="white" className="ml-1 text-white" />
                  </div>
               </a>
            ))}
         </div>
      </div>

      {/* Philosophy */}
      <div className="mb-40">
         <div className="bg-[#080808] rounded-none p-8 md:p-20 border border-[#222] relative overflow-hidden group hover:border-[#DA291C]/30 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#DA291C] via-[#991b1b] to-[#080808]"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="flex items-center gap-2 text-[#DA291C] mb-4">
                        <Database size={18} />
                        <h2 className="text-sm font-bold uppercase tracking-widest">Philosophy</h2>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase italic leading-none">
                        {STORY_DATA.whyProduct.title}
                    </h3>
                    <p className="text-gray-400 leading-loose text-lg font-light">
                        {STORY_DATA.whyProduct.text}
                    </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-[#111] p-8 rounded-sm border border-[#222] hover:border-[#DA291C] transition-colors group hover:-translate-y-1 duration-300">
                        <div className="text-5xl font-black text-white mb-2 group-hover:text-[#DA291C] transition-colors">15x</div>
                        <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Revenue Growth</div>
                    </div>
                    <div className="bg-[#111] p-8 rounded-sm border border-[#222] hover:border-[#DA291C] transition-colors group hover:-translate-y-1 duration-300">
                        <div className="text-5xl font-black text-white mb-2 group-hover:text-[#DA291C] transition-colors">50K</div>
                        <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Villages Mapped</div>
                    </div>
                    <div className="col-span-2 bg-[#DA291C] p-8 rounded-sm border border-[#DA291C] relative overflow-hidden shadow-lg">
                        <div className="relative z-10">
                            <div className="text-5xl font-black text-white mb-2">50%</div>
                            <div className="text-xs text-red-100 uppercase font-bold tracking-widest">Faster Verification</div>
                        </div>
                        <Trophy size={140} className="absolute -bottom-6 -right-6 text-black opacity-10 rotate-12" />
                    </div>
                </div>
            </div>
         </div>
      </div>

      {/* Movies */}
      <div className="mb-20">
          <div className="flex items-center justify-between border-b border-[#222] pb-6 mb-8">
            <div className="flex items-center gap-2 text-[#DA291C]">
                <Film size={18} />
                <h2 className="text-sm font-bold uppercase tracking-widest">Film Study</h2>
            </div>
            <span className="text-xs font-mono text-gray-600">FAVORITE_FILMS.JSON</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {MOVIES.map(movie => (
                <div key={movie.id} className="group cursor-pointer">
                    <div className="aspect-[2/3] bg-[#111] rounded-sm overflow-hidden relative mb-4 shadow-xl border border-[#222] group-hover:border-[#DA291C] transition-colors">
                        <img src={movie.imageUrl} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110" alt={movie.title} />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors"></div>
                    </div>
                    <h4 className="font-bold text-white truncate uppercase text-sm group-hover:text-[#DA291C] transition-colors">{movie.title}</h4>
                    <p className="text-xs text-gray-500 font-mono mt-1">{movie.subtitle}</p>
                </div>
             ))}
          </div>
      </div>

    </div>
  );
};

export default StorySection;
