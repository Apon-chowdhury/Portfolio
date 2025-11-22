
import { Post, Highlight } from './types';

export const STORY_DATA = {
  hero: {
    greeting: "Glory Glory Man Utd.",
    title: "I Architect Winning Products.",
    subtitle: "Product Manager. Red Devil. Strategist. Like Ferguson with a squad, I build teams that win."
  },
  about: {
    title: "The Theatre of Dreams",
    text: "I don't just manage tickets; I manage visions. My journey started in the trenches of AI QA and evolved into leading cross-functional teams that scaled revenue 15X. Like a box-to-box midfielder, I cover everything from SQL logic to User Journey empathy.",
    quote: "Attack wins you games, defence wins you titles. I build products that do both."
  },
  whyProduct: {
    title: "The Game Plan",
    text: "Because I love the beautiful game of creation. There is a specific thrill in taking a vague user pain point, validating it with hard data, and shipping a solution that feels like a last-minute winner at the Stretford End. From cutting bank verification times by 50% to mapping 50,000 villages, I play for results."
  },
  vision: {
    title: "The Trophy Cabinet",
    text: "To build legendary technology. I envision a future where the tools we use are so intuitive, they disappear. I want to solve problems so well that the solution feels inevitable."
  }
};

export const RESUME_TEXT = `
Md. Apon Chowdhury - Product Manager
Contact: 01679886608, Mohakhali DOHS, apon.chowdhury3870@gmail.com
LinkedIn: https://www.linkedin.com/in/md-apon-chowdhury/

Summary:
Accomplished Product Manager with a proven track record of driving product roadmap development, conducting market research, and leveraging data analysis to maximize revenue. Adept at leading cross-functional teams, currently managing 10 developers and overseeing 10+ client accounts. Skilled in identifying growth opportunities and executing retention strategies that result in superior market penetration and successful product launches.

Skills:
Product Development, Strategic Planning, Client Relationships, Sprint & Backlog planning, Budget Planning & Allocation, Backlog Management, API Testing (Postman), User Journey Mapping, Data Analysis (SQL, PowerBI).

Key Achievements:
- Revenue Growth: Led vertical product growth of Barikoi products within 2 more industries, resulted in increase of revenue 15X within 2 years.
- Product Expansion: Successfully led retail market survey projects of 50,000 village data implemented into Barikoi, resulted in traffic increase 10x on YoY basis.

Professional Experience:
1. BARIKOI TECHNOLOGIES LIMITED (Product Manager, Feb '22 - Present)
- Conducted feature and customer feedback for retail clients, resulted in 40% revenue increase.
- Spearheaded product launches and tracked success metrics.
- Developed Barikoi Verify System web portal/Android app for Banks (cut CPV time by 50%).
- Led retail mapping team to double data capture via auto-suggestion.
- Delivered Retail SFA Dashboard for 3 largest conglomerates.
- Delivered CAD System for government utility providers.

2. BARIKOI TECHNOLOGIES LIMITED (Junior Product Manager, Feb '21 - Jan '22)
- Worked with bank analysts on dashboard features.
- Built automated area detection API for mapping projects.
- Led 5000 village outlet mapping project.

3. INTELLIGENT MACHINES LIMITED (AI Apprentice, QA, Aug '19 - Dec '19)
- Annotated 2.5 lacs images, optimized model accuracy.

Education:
- North South University (BBA, Finance & Marketing, 2020)
- HSC: Bir Srestho Noor Mohammad Rifles Public School & College (2012)
- SSC: Dhaka Residential Model School & College (2010)
`;

export const PROFILE_DATA = {
  name: "Md. Apon Chowdhury",
  handle: "@RedDevilPM",
  role: "Product Manager",
  bio: "Product Manager 🔴 | 15x Revenue Growth 📈 | Data Driven (SQL, PowerBI) \nEx-Barikoi, Intelligent Machines | GGMU 👹",
  link: "linkedin.com/in/md-apon-chowdhury",
  postsCount: 18,
  followers: "7.2M", 
  following: 11,
  avatarUrl: "https://ui-avatars.com/api/?name=Apon+Chowdhury&background=DA291C&color=ffffff&size=200&bold=true"
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/md-apon-chowdhury/",
  github: "https://github.com/Apon-chowdhury",
  spotify: "https://open.spotify.com/user/31rvlpvslbo4jebyzon4rzlgsi5e",
  email: "mailto:apon.chowdhury3870@gmail.com"
};

export const SKILLS: Highlight[] = [
  { id: '1', title: 'Strategy', imageUrl: 'https://images.unsplash.com/photo-1553877615-30c73094b6af?auto=format&fit=crop&w=200&q=80', subtitle: 'Roadmaps & Vision' },
  { id: '2', title: 'Analytics', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=200&q=80', subtitle: 'SQL & Data Mining' },
  { id: '3', title: 'Agile', imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=200&q=80', subtitle: 'Scrum & Sprints' },
  { id: '4', title: 'Leadership', imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80', subtitle: 'Cross-functional' },
];

export const MOVIES: Highlight[] = [
  { id: 'm1', title: 'Class of 92', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjI2MDc2MzM1M15BMl5BanBnXkFtZTgwNzY2ODk0MDE@._V1_SX300.jpg', subtitle: 'Documentary', externalLink: 'https://www.imdb.com/title/tt3311384/' },
  { id: 'm2', title: 'The Social Network', imageUrl: 'https://m.media-amazon.com/images/M/MV5BOGUyZDUxZjEtMmIzMC00MzlmLTg4MGItZWJmNjQwYWQ3NjgwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg', subtitle: 'Biography', externalLink: 'https://www.imdb.com/title/tt1285016/' },
  { id: 'm3', title: 'Moneyball', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMjAxOTU3Mzc1M15BMl5BanBnXkFtZTcwMzk1ODUzNg@@._V1_SX300.jpg', subtitle: 'Analytics', externalLink: 'https://www.imdb.com/title/tt1210166/' },
  { id: 'm4', title: 'Ted Lasso', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDVmODQ1M2EtMDQ2ZC00M2YxLTgwM2QtM2M5Yjg2NzQ3ZGI3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', subtitle: 'Leadership', externalLink: 'https://www.imdb.com/title/tt10986410/' },
];

export const PLAYLISTS: Highlight[] = [
  { id: 'pl1', title: 'Old Trafford', imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=200&q=80', subtitle: 'Matchday Hype', externalLink: 'https://open.spotify.com' },
  { id: 'pl2', title: 'Deep Focus', imageUrl: 'https://images.unsplash.com/photo-1516280440614-6697288d5d38?auto=format&fit=crop&w=200&q=80', subtitle: 'Instrumental', externalLink: 'https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ' },
  { id: 'pl3', title: 'Coding Mode', imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=200&q=80', subtitle: 'Lofi Beats', externalLink: 'https://open.spotify.com' },
  { id: 'pl4', title: 'Winning', imageUrl: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?auto=format&fit=crop&w=200&q=80', subtitle: 'Victory Sounds', externalLink: 'https://open.spotify.com' },
];

export const POSTS: Post[] = [
  {
    id: 'p1',
    type: 'project',
    visibility: 'private',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
    title: 'barikoi-verify',
    subtitle: 'Enterprise Web Portal & Android App',
    description: [
      'Designed and launched the Barikoi Verify System for Banks.',
      'Centralized Web Portal for managers and Android App for field agents.',
      'Cut CPV turnaround time by 50%.',
      'Implemented real-time monitoring and offline data syncing.'
    ],
    date: 'Feb 2022 - Present',
    likes: 342,
    comments: 28,
    language: 'TypeScript',
    languageColor: '#DA291C'
  },
  {
    id: 'p2',
    type: 'project',
    visibility: 'private',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    title: 'retail-sfa',
    subtitle: 'Sales Force Automation',
    description: [
      'Retail SFA Dashboard for 3 largest conglomerates.',
      'Insights into sales performance and territory coverage.',
      'Integrated mapping services to visualize retail outlet density.',
      'Utilized complex SQL queries for large-scale data rendering.'
    ],
    date: 'Feb 2022 - Present',
    likes: 215,
    comments: 14,
    language: 'SQL',
    languageColor: '#FBE122'
  },
  {
    id: 'p3',
    type: 'project',
    visibility: 'private',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    title: 'utility-cad',
    subtitle: 'Computer Aided Dispatch',
    description: [
      'Barikoi CAD System for government utility providers.',
      'Facilitated efficient resolution of service requests.',
      'Reduced response times for critical utility failures.'
    ],
    date: 'Feb 2022 - Present',
    likes: 189,
    comments: 9,
    language: 'Python',
    languageColor: '#3572A5'
  },
  {
    id: 'p4',
    type: 'project',
    visibility: 'public',
    imageUrl: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=800&q=80',
    title: 'mapping-auto',
    subtitle: 'Auto-suggestion Data Capture',
    description: [
      'Doubled data capture efficiency for retail mapping.',
      'Decreased data verification time by 25%.',
      'Managed mapping of 50,000+ village outlets.'
    ],
    date: 'Feb 2021 - Jan 2022',
    likes: 156,
    comments: 12,
    language: 'Python',
    languageColor: '#3572A5'
  },
  {
    id: 'p5',
    type: 'experience',
    visibility: 'public',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80',
    title: 'intel-machines-qa',
    subtitle: 'AI Model Optimization',
    description: [
      'AI Apprentice and QA Lead.',
      'Managed annotation of 2.5 Lakh images.',
      'Optimized computer vision models.'
    ],
    date: 'Aug 2019 - Dec 2019',
    likes: 92,
    comments: 5,
    language: 'AI/ML',
    languageColor: '#DA291C'
  },
  {
    id: 'p6',
    type: 'education',
    visibility: 'public',
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    title: 'NSU-BBA',
    subtitle: 'Finance & Marketing',
    description: [
      'Bachelor of Business Administration (BBA).',
      'Double major in Finance and Marketing.',
      'Graduated in 2020.'
    ],
    date: '2020',
    likes: 410,
    comments: 85,
    language: 'Education',
    languageColor: '#FBE122'
  },
];