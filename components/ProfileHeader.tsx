
import React from 'react';
import { PROFILE_DATA, SOCIAL_LINKS } from '../constants';
import { Github, Linkedin, Mail, MapPin, Flame, Music, AudioWaveform } from 'lucide-react';

interface ProfileHeaderProps {
  onOpenChat: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ onOpenChat }) => {
  return (
    <div className="flex flex-col p-6 md:p-8 w-full min-h-full bg-[#080808]">
      
      {/* Avatar Section */}
      <div className="mb-8 relative mx-auto md:mx-0">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#DA291C] shadow-[0_0_20px_rgba(218,41,28,0.3)] overflow-hidden relative z-10 group cursor-pointer">
           <img 
             src={PROFILE_DATA.avatarUrl} 
             alt={PROFILE_DATA.name} 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 bg-[#111]"
           />
           <div className="absolute inset-0 bg-[#DA291C] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
        </div>
        {/* Status Indicator */}
        <div className="absolute bottom-0 right-0 md:-right-2 w-10 h-10 bg-[#050505] rounded-full flex items-center justify-center z-20 border border-[#333]">
           <Flame size={20} className="text-[#DA291C] animate-pulse fill-[#DA291C]" />
        </div>
      </div>

      {/* Name & Bio */}
      <div className="text-center md:text-left mb-8">
        <h1 className="text-2xl md:text-3xl font-black text-white tracking-tighter uppercase italic leading-none mb-3">
          {PROFILE_DATA.name.split(' ')[0]}<br/>
          <span className="text-[#DA291C]">
            {PROFILE_DATA.name.split(' ')[1]}
          </span>
        </h1>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#111] border border-[#222] rounded-sm text-[10px] font-bold text-gray-400 mb-4 uppercase tracking-wider">
           <MapPin size={10} className="text-[#DA291C]" /> Dhaka, Bangladesh
        </div>
        <p className="text-gray-400 text-sm leading-relaxed font-medium border-l-2 border-[#333] pl-3">
          {PROFILE_DATA.bio}
        </p>
      </div>

      {/* Chat Action */}
      <button 
        onClick={onOpenChat}
        className="w-full bg-[#DA291C] hover:bg-[#b91c1c] text-white rounded-sm py-3 px-4 text-xs font-bold shadow-lg shadow-red-900/20 flex items-center justify-center gap-2 uppercase tracking-widest mb-8 group transition-all hover:-translate-y-1"
      >
        <Flame size={16} className="group-hover:animate-bounce" /> Ask Red Devil AI
      </button>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-0 mb-8 border border-[#222] rounded-sm bg-[#0a0a0a] overflow-hidden">
        <div className="text-center p-3 hover:bg-[#111] transition-colors cursor-pointer group">
          <div className="text-lg font-black text-white group-hover:text-[#DA291C] transition-colors">{PROFILE_DATA.followers}</div>
          <div className="text-[10px] text-gray-600 uppercase tracking-wider font-bold">Fans</div>
        </div>
        <div className="text-center p-3 border-l border-[#222] hover:bg-[#111] transition-colors cursor-pointer group">
          <div className="text-lg font-black text-white group-hover:text-[#DA291C] transition-colors">{PROFILE_DATA.following}</div>
          <div className="text-[10px] text-gray-600 uppercase tracking-wider font-bold">Squad</div>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-2 mb-8">
        <a href={SOCIAL_LINKS.email} className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group p-2 hover:bg-[#111] rounded-sm">
           <Mail size={16} className="group-hover:text-[#DA291C] transition-colors" />
           <span className="font-mono text-xs">Email Me</span>
        </a>
        <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group p-2 hover:bg-[#111] rounded-sm">
           <Linkedin size={16} className="group-hover:text-[#0077b5] transition-colors" />
           <span className="font-mono text-xs">LinkedIn</span>
        </a>
        <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-gray-400 hover:text-white transition-colors group p-2 hover:bg-[#111] rounded-sm">
           <Github size={16} className="group-hover:text-white transition-colors" />
           <span className="font-mono text-xs">Github</span>
        </a>
      </div>

      {/* Spotify Widget */}
      <div className="mt-auto">
        <div className="bg-[#0a0a0a] rounded-sm p-4 border border-[#222] hover:border-[#DA291C] transition-colors cursor-pointer group relative overflow-hidden shadow-xl">
           {/* Equalizer Animation bg */}
           <div className="absolute bottom-0 left-0 right-0 h-12 flex items-end justify-center gap-1 opacity-10 pointer-events-none">
               {[...Array(10)].map((_,i) => (
                   <div key={i} className="w-1 bg-[#DA291C] animate-pulse" style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}></div>
               ))}
           </div>

           <div className="flex items-center justify-between mb-3 relative z-10">
               <div className="flex items-center gap-2">
                   <Music size={12} className="text-[#1db954]" />
                   <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Spotify</span>
               </div>
               <AudioWaveform size={12} className="text-[#DA291C] animate-pulse" />
           </div>
           <a href={SOCIAL_LINKS.spotify} target="_blank" rel="noreferrer" className="flex items-center gap-3 relative z-10">
               <img 
                   src="https://images.unsplash.com/photo-1621582830628-44147cb44d49?auto=format&fit=crop&w=200&q=80" 
                   alt="album" 
                   className="w-10 h-10 rounded-sm object-cover shadow-lg group-hover:scale-105 transition-transform" 
               />
               <div className="overflow-hidden">
                  <h4 className="text-xs font-bold text-white truncate group-hover:text-[#DA291C] transition-colors">Glory Glory Man Utd</h4>
                  <p className="text-[10px] text-gray-500 truncate">The Red Devils</p>
               </div>
           </a>
        </div>
      </div>

    </div>
  );
};

export default ProfileHeader;
