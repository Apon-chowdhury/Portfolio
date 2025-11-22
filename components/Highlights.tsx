
import React from 'react';
import { Highlight } from '../types';
import { PlayCircle, ExternalLink } from 'lucide-react';

interface HighlightsProps {
  title: string;
  items: Highlight[];
  showPlayIcon?: boolean;
}

const Highlights: React.FC<HighlightsProps> = ({ title, items, showPlayIcon = false }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-[#c9d1d9] mb-4 px-4 md:px-0">{title}</h2>
      <div className="flex gap-4 overflow-x-auto px-4 md:px-0 pb-4 no-scrollbar">
        {items.map((item) => (
          <a 
            key={item.id} 
            href={item.externalLink}
            target="_blank"
            rel="noreferrer"
            className={`bg-[#181818] hover:bg-[#282828] p-4 rounded-lg cursor-pointer flex-shrink-0 w-[160px] group transition-all duration-300 block ${!item.externalLink ? 'pointer-events-none' : ''}`}
          >
            <div className="relative w-full aspect-square mb-4 shadow-lg rounded-md overflow-hidden">
               <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
               
               {showPlayIcon && (
                 <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-xl">
                    <div className="bg-[#1db954] text-black rounded-full p-3 shadow-md">
                       <PlayCircle size={24} fill="black" className="text-black" />
                    </div>
                 </div>
               )}
               
               {!showPlayIcon && item.externalLink && (
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 text-white rounded-full p-1.5 backdrop-blur-sm">
                          <ExternalLink size={12} />
                      </div>
                  </div>
               )}
            </div>
            <h3 className="font-bold text-white text-sm truncate">{item.title}</h3>
            <p className="text-xs text-[#a7a7a7] mt-1 line-clamp-2">{item.subtitle}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
