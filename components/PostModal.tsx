
import React, { useEffect } from 'react';
import { Post } from '../types';
import { X, Star, GitFork, BookOpen, CircleDot, Lock, Flame } from 'lucide-react';
import { PROFILE_DATA } from '../constants';

interface PostModalProps {
  post: Post | null;
  onClose: () => void;
}

const PostModal: React.FC<PostModalProps> = ({ post, onClose }) => {
  useEffect(() => {
    if (post) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [post]);

  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={onClose}>
      <div 
        className="bg-[#050505] border border-[#DA291C] rounded-lg overflow-hidden w-full max-w-4xl max-h-[90vh] flex flex-col shadow-[0_0_50px_rgba(218,41,28,0.2)] animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Repo Header */}
        <div className="bg-[#0a0a0a] border-b border-[#333] p-4 flex items-center justify-between flex-shrink-0">
             <div className="flex items-center gap-2 text-white overflow-hidden font-mono">
                {post.visibility === 'private' ? <Lock size={18} className="text-[#DA291C]" /> : <BookOpen size={18} className="text-[#FBE122]" />}
                <span className="text-gray-400 hover:text-[#DA291C] cursor-pointer truncate hidden md:inline">{PROFILE_DATA.handle}</span>
                <span className="text-gray-600 hidden md:inline">/</span>
                <span className="font-bold text-[#DA291C] hover:underline cursor-pointer truncate">{post.title}</span>
                <span className={`ml-2 text-xs border uppercase px-2 py-0.5 flex-shrink-0 ${post.visibility === 'private' ? 'border-[#DA291C] text-[#DA291C] bg-[#DA291C]/10' : 'border-gray-600 text-gray-400'}`}>
                  {post.visibility}
                </span>
             </div>
             <button onClick={onClose} className="text-gray-500 hover:text-[#DA291C] ml-4">
                 <X size={24} />
             </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto">
            {/* Hero Image / Banner */}
            <div className="relative h-48 md:h-64 w-full bg-[#111] border-b border-[#333] flex-shrink-0">
                 <img src={post.imageUrl} className="w-full h-full object-cover opacity-40 grayscale" alt={post.title} />
                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#050505] to-transparent h-32"></div>
                 <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div className="bg-black/80 px-6 py-3 rounded-none border-l-4 border-[#DA291C] backdrop-blur-md">
                        <h1 className="text-2xl font-black text-white uppercase">{post.language} Project</h1>
                        <p className="text-sm text-[#DA291C] font-bold">{post.subtitle}</p>
                    </div>
                 </div>
            </div>

            {/* Readme.md style content */}
            <div className="p-6 md:p-10 text-gray-300">
                <div className="border border-[#333] rounded-none bg-[#0a0a0a]">
                    <div className="bg-[#111] border-b border-[#333] px-4 py-2 text-sm font-mono text-gray-400 flex items-center gap-2 sticky top-0">
                        <CircleDot size={14} className="text-[#DA291C] animate-pulse" />
                        TACTICS.md
                    </div>
                    <div className="p-6 md:p-8 prose prose-invert max-w-none">
                        <h1 className="text-3xl font-black border-b border-[#333] pb-4 mb-6 flex items-center gap-3 text-white uppercase">
                            {post.title} 
                            {post.visibility === 'private' && <Lock size={24} className="text-[#DA291C]" />}
                        </h1>
                        
                        <div className="bg-[#111] p-6 rounded-none border-l-2 border-[#FBE122] mb-8">
                            <p className="text-white italic text-lg font-serif">
                                "{post.subtitle}"
                            </p>
                        </div>
                        
                        <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2 uppercase">
                            <span className="text-[#DA291C]">#</span> About the match
                        </h2>
                        
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            {post.description.map((desc, idx) => (
                                <p key={idx} className="flex gap-3 items-start">
                                    <Flame size={16} className="text-[#DA291C] mt-1 flex-shrink-0" />
                                    <span>{desc}</span>
                                </p>
                            ))}
                        </div>

                        <div className="mt-8 pt-8 border-t border-[#333]">
                            <h2 className="text-xl font-bold mb-4 text-white flex items-center gap-2 uppercase">
                                <span className="text-[#DA291C]">#</span> Stats
                            </h2>
                            <div className="flex flex-wrap gap-4 text-sm font-mono">
                                <div className="flex items-center gap-2 text-white bg-[#111] px-4 py-2 border border-[#333]">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: post.languageColor }}></div>
                                    {post.language}
                                </div>
                                <div className="flex items-center gap-2 text-white bg-[#111] px-4 py-2 border border-[#333]">
                                    <Star size={16} className="text-[#FBE122]" /> {post.likes}
                                </div>
                                <div className="flex items-center gap-2 text-white bg-[#111] px-4 py-2 border border-[#333]">
                                    <GitFork size={16} /> {post.comments}
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 bg-[#111] px-4 py-2 border border-[#333]">
                                    📅 {post.date}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Footer Actions */}
        <div className="bg-[#0a0a0a] border-t border-[#333] p-4 flex justify-end gap-3 flex-shrink-0">
            <button className="px-6 py-2 rounded-sm border border-[#333] bg-[#111] text-white text-sm font-bold hover:border-[#FBE122] hover:text-[#FBE122] transition-colors flex items-center gap-2 uppercase">
                <Star size={16} /> Support
            </button>
            {post.visibility === 'public' && (
                <button className="px-6 py-2 rounded-sm bg-[#DA291C] text-white text-sm font-bold hover:bg-[#b91c1c] transition-colors shadow-lg uppercase tracking-wider">
                    View Code
                </button>
            )}
             {post.visibility === 'private' && (
                <button disabled className="px-6 py-2 rounded-sm bg-[#1a1a1a] text-gray-500 text-sm font-bold cursor-not-allowed border border-[#333] flex items-center gap-2 uppercase">
                    <Lock size={14} /> Locked
                </button>
            )}
        </div>
      </div>
    </div>
  );
};

export default PostModal;