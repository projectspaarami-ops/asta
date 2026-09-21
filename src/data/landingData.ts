import { BatchInfo, FaqItem, Testimonial } from '../types';

export const defaultBatchInfo: BatchInfo = {
  day: 'Sunday',
  date: '28th September 2026',
  time: '11:00 AM IST',
  targetDateIso: '2026-09-28T11:00:00+05:30',
  totalSeats: 30,
  remainingSeats: 5,
  originalPrice: '₹590',
  offerPrice: 'Free',
};

export const problemPoints = [
  {
    id: 'sidelines',
    title: 'Stay on the sidelines for years',
    description: 'Watching others talk about investing and trading, feeling left out while inflation silently erodes your hard-earned savings.',
    iconName: 'Clock',
  },
  {
    id: 'blind-tips',
    title: 'Jump in blindly following random tips',
    description: 'Following hot tips from friends, Telegram channels, or social media reels — and losing money they cannot afford to lose.',
    iconName: 'AlertTriangle',
  },
  {
    id: 'youtube-overload',
    title: 'Binge-watch 10 conflicting YouTube videos',
    description: 'Absorbing scattered advice with zero structure, contradictory strategies, and ending up far more confused than when they started.',
    iconName: 'Tv',
  },
];

export const clarityPoints = [
  'A realistic roadmap to approaching the stock market — not shortcuts, not hacks',
  'How to think about risk and manage it, instead of ignoring it',
  'How to evolve through each stage of your investing & trading journey',
  'Understanding the forces that actually move the market',
  'The mindset and discipline serious traders and investors build',
  'A confidence boost — even if you’re starting from zero',
];

export const audienceProfiles = [
  {
    id: 'investors',
    emoji: '📈',
    title: 'Investors',
    tagline: 'Want a structured approach instead of guesswork',
    description: 'Move away from speculative hunches and learn a systematic framework to analyze market moves with high discipline.',
  },
  {
    id: 'working-professionals',
    emoji: '💼',
    title: 'Working Professionals',
    tagline: 'Want to build a second skill alongside your career',
    description: 'Develop a structured financial market skill set without quitting your 9-to-5 job or staring at screens all day.',
  },
  {
    id: 'homemakers',
    emoji: '🏠',
    title: 'Homemakers',
    tagline: 'Want financial independence on your own terms',
    description: 'Gain genuine financial awareness, understand family wealth preservation, and take charge of your financial future.',
  },
  {
    id: 'students',
    emoji: '🎓',
    title: 'Students',
    tagline: 'Want to start learning early, the right way',
    description: 'Build a solid foundation before bad trading habits develop, compound your learning curve, and enter the market prepared.',
  },
  {
    id: 'entrepreneurs',
    emoji: '🚀',
    title: 'Entrepreneurs',
    tagline: 'Want to understand markets to manage business cash better',
    description: 'Understand economic macro trends, liquidity cycles, and market realities to deploy surplus capital prudently.',
  },
  {
    id: 'retired-professionals',
    emoji: '🧓',
    title: 'Retired Professionals',
    tagline: 'Want to put your time and savings to structured use',
    description: 'Keep your mind active and protect your retirement corpus through risk-first methodologies, without falling for scams.',
  },
];

export const astaDifferentiators = [
  {
    title: 'Live, interactive sessions — not pre-recorded content',
    description: 'Ask questions, get answered in real time. Engage directly with experienced mentors in an active classroom environment.',
  },
  {
    title: 'Structured 4-level learning path',
    description: 'From foundational concepts to advanced strategy, progress at your own pace without feeling overwhelmed.',
  },
  {
    title: '600+ leaders and monitors supporting students',
    description: 'Dedicated senior mentors across India and overseas guide your ongoing practice and clear doubts.',
  },
  {
    title: '200+ ASTA Satsang Centres (ASCs)',
    description: 'Local peer-support groups that help you stay consistent, accountable, and grounded in your learning journey.',
  },
  {
    title: 'Trainers across regions and languages',
    description: 'Conducted in English, Hindi, Marathi, Tamil, Telugu, and Kannada so language is never a barrier to learning.',
  },
];

export const studentTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Kulkarni',
    city: 'Pune',
    role: 'Working Professional',
    quote: 'The way concepts are simplified for a beginner is what stood out to me. Live sessions meant my doubts got cleared in real time, not left hanging.',
    rating: 5,
    initials: 'RK',
    avatarBg: 'bg-emerald-700',
  },
  {
    id: 'test-2',
    name: 'Sunita Deshmukh',
    city: 'Mumbai',
    role: 'Homemaker',
    quote: 'I always thought the stock market wasn’t for someone like me. ASTA changed that. The structured, step-by-step approach gave me real confidence.',
    rating: 5,
    initials: 'SD',
    avatarBg: 'bg-rose-700',
  },
  {
    id: 'test-3',
    name: 'Ramesh V.',
    city: 'Bengaluru',
    role: 'Retired Professional',
    quote: 'After years in a corporate job, starting something new felt intimidating. The support system — mentors, monitors, community — made all the difference.',
    rating: 5,
    initials: 'RV',
    avatarBg: 'bg-blue-700',
  },
];

export const faqList: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is this webinar about?',
    answer: 'A live introduction to stock market trading and investing — covering market dynamics, foundational concepts, and how to approach the market with a structured mindset.',
  },
  {
    id: 'faq-2',
    question: 'Do I need any prior experience?',
    answer: 'No. This session is designed for complete beginners, while still offering useful perspective for those with some experience.',
  },
  {
    id: 'faq-3',
    question: 'Is there a cost to attend?',
    answer: 'This session is normally ₹590. It’s currently free for a limited time — registration required to secure your seat.',
  },
  {
    id: 'faq-4',
    question: 'How long is the session?',
    answer: '3 hours of live training, followed by a live Q&A where you can ask questions directly.',
  },
  {
    id: 'faq-5',
    question: 'Will I learn how to trade in this one session?',
    answer: 'This session gives you a strategic overview and foundational understanding. It’s the starting point for deeper, structured learning through ASTA’s full training programs.',
  },
  {
    id: 'faq-6',
    question: 'Is there support after the session?',
    answer: 'Yes — students who continue with ASTA get access to ongoing support, mentorship, and community resources.',
  },
  {
    id: 'faq-7',
    question: 'Can I ask questions live?',
    answer: 'Yes, every session includes a live Q&A with the trainer.',
  },
  {
    id: 'faq-8',
    question: 'What if I can’t attend live?',
    answer: 'You’ll still get the Market Orientation Roadmap PDF and checklist instantly on registration — but live attendance is recommended for the Q&A.',
  },
];
