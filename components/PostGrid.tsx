
import React from 'react';
import { Post } from '../types';
import { Star, GitFork, BookMarked, Lock, ArrowUpRight } from 'lucide-react';

interface PostGridProps {
  posts: Post[];
  onPostClick: (post: Post) => void;
}

const PostGrid: React.FC<PostGridProps> = ({ posts, onPostClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12">
      {posts.map((post) => (
        <div 
            key={post.id} 
            onClick={() => onPostClick(post)}
            className="bg-[#0a0a0a] border border-[#222] rounded-sm p-8 flex flex-col justify-between cursor-pointer transition-all group relative overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)]"
        >
           {/* Hover Border Gradient (Red) */}
           <div className="absolute inset-0 border-2 border-[#DA291C] opacity-0 group-hover:opacity-100 transition-opacity rounded-sm pointer-events-none z-20"></div>
           
           {/* Private Glow */}
           {post.visibility === 'private' && (
               <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#DA291C] rounded-full blur-[60px] opacity-5 group-hover:opacity-15 transition-opacity"></div>
           )}

           <div className="relative z-10">
               <div className="flex items-start justify-between mb-6">
                   <div className="flex items-center gap-3 min-w-0">
                       {post.visibility === 'private' ? (
                          <div className="p-2 bg-[#DA291C]/10 rounded-full border border-[#DA291C]/20">
                            <Lock size={18} className="text-[#DA291C] flex-shrink-0" />
                          </div>
                       ) : (
                          <div className="p-2 bg-[#222] rounded-full group-hover:bg-[#DA291C] transition-colors">
                            <BookMarked size={18} className="text-gray-400 group-hover:text-white transition-colors flex-shrink-0" />
                          </div>
                       )}
                       <h3 className="font-bold text-white text-xl group-hover:text-[#DA291C] transition-colors truncate font-mono tracking-tight">
                           {post.title}
                       </h3>
                   </div>
                   <ArrowUpRight size={20} className="text-gray-600 group-hover:text-[#DA291C] transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 duration-300" />
               </div>
               
               <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed font-light">
                   <span className="text-white font-bold block mb-2 text-base">{post.subtitle}</span>
                   {post.description[0]}
               </p>
           </div>

           <div className="flex items-center justify-between text-xs text-gray-500 mt-auto font-mono border-t border-[#1a1a1a] pt-4 group-hover:border-[#333] transition-colors">
                <div className="flex items-center gap-2">
                    <span 
                        className="w-3 h-3 rounded-full inline-block shadow-[0_0_8px]" 
                        style={{ 
                          backgroundColor: post.languageColor || '#DA291C',
                          boxShadow: `0 0 8px ${post.languageColor || '#DA291C'}` 
                        }}
                    ></span>
                    <span className="text-gray-300 font-bold">{post.language}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 group-hover:text-white transition-colors">
                      <Star size={14} className="group-hover:fill-white transition-colors" />
                      <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-white transition-colors">
                      <GitFork size={14} />
                      <span>{post.comments}</span>
                  </div>
                </div>
           </div>
        </div>
      ))}
    </div>
  );
};

export default PostGrid;
