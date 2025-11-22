
export interface Post {
  id: string;
  type: 'experience' | 'education' | 'project';
  visibility: 'public' | 'private';
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string[];
  date: string;
  likes: number; // Mapped to Stars
  comments: number; // Mapped to Forks
  language?: string;
  languageColor?: string;
}

export interface Highlight {
  id: string;
  title: string;
  imageUrl: string;
  subtitle?: string;
  externalLink?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum TabType {
  OVERVIEW = 'OVERVIEW',
  REPOS = 'REPOS', 
  PACKAGES = 'PACKAGES',
}
