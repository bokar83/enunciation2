export interface MotivationQuote {
  text: string
  author: string
  category: 'speaking' | 'confidence' | 'communication' | 'leadership' | 'growth' | 'tough_love'
  tone: 'encouraging' | 'challenging' | 'inspiring' | 'direct'
}

export const motivationQuotes: MotivationQuote[] = [
  // SPEAKING & COMMUNICATION
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "speaking",
    tone: "direct"
  },
  {
    text: "Your voice is your calling card. Make it count.",
    author: "Oprah Winfrey",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "Speak clearly, if you speak at all; carve every word before you let it fall.",
    author: "Oliver Wendell Holmes Sr.",
    category: "speaking",
    tone: "challenging"
  },
  {
    text: "The single biggest problem in communication is the illusion that it has taken place.",
    author: "George Bernard Shaw",
    category: "communication",
    tone: "direct"
  },
  {
    text: "Words are free. It's how you use them that may cost you.",
    author: "KushandWizdom",
    category: "speaking",
    tone: "challenging"
  },
  {
    text: "The art of communication is the language of leadership.",
    author: "James Humes",
    category: "leadership",
    tone: "inspiring"
  },
  {
    text: "Speak with intention. Every word should serve a purpose.",
    author: "Unknown",
    category: "speaking",
    tone: "direct"
  },
  {
    text: "Communication is not just about speaking; it's about being heard.",
    author: "Unknown",
    category: "communication",
    tone: "encouraging"
  },
  {
    text: "Your voice has power. Use it to create change, not chaos.",
    author: "Unknown",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "The pause is as important as the word. Master both.",
    author: "Unknown",
    category: "speaking",
    tone: "challenging"
  },

  // CONFIDENCE & COURAGE
  {
    text: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.",
    author: "Winston Churchill",
    category: "confidence",
    tone: "inspiring"
  },
  {
    text: "You are braver than you believe, stronger than you seem, and smarter than you think.",
    author: "A.A. Milne",
    category: "confidence",
    tone: "encouraging"
  },
  {
    text: "Confidence comes not from always being right, but from not fearing to be wrong.",
    author: "Peter T. McIntyre",
    category: "confidence",
    tone: "inspiring"
  },
  {
    text: "Fake it till you make it. Your brain will catch up with your mouth.",
    author: "Unknown",
    category: "confidence",
    tone: "challenging"
  },
  {
    text: "The moment you doubt whether you can fly, you cease forever to be able to do it.",
    author: "J.M. Barrie",
    category: "confidence",
    tone: "direct"
  },
  {
    text: "You miss 100% of the shots you don't take. Start speaking up.",
    author: "Wayne Gretzky (adapted)",
    category: "confidence",
    tone: "tough_love"
  },
  {
    text: "Stop apologizing for your voice. Start owning it.",
    author: "Unknown",
    category: "confidence",
    tone: "tough_love"
  },
  {
    text: "Confidence is not 'they will like me.' Confidence is 'I'll be fine if they don't.'",
    author: "Christina Grimmie",
    category: "confidence",
    tone: "inspiring"
  },
  {
    text: "Your voice is your superpower. Stop hiding it behind 'um' and 'like'.",
    author: "Unknown",
    category: "confidence",
    tone: "tough_love"
  },
  {
    text: "The only way to gain confidence is to practice. Stop making excuses.",
    author: "Unknown",
    category: "confidence",
    tone: "direct"
  },

  // TOUGH LOVE & CHALLENGES
  {
    text: "Excuses are the tools of incompetence. Stop making them and start making progress.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "Nobody cares about your comfort zone. Your audience wants clarity, not your anxiety.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Every 'um' is a missed opportunity to be heard. Every 'like' is a moment of doubt.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "You're not nervous. You're unprepared. Fix the preparation, not the nerves.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Stop saying 'I'm not good at speaking.' Start saying 'I'm getting better at speaking.'",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "Your audience deserves your best. Give them your best, not your excuses.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Fear is just excitement without breath. Breathe and speak.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "You're not improving by staying silent. You're improving by speaking up.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Stop waiting for the perfect moment. The perfect moment is now.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "Your voice matters. Stop acting like it doesn't.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },

  // GROWTH & IMPROVEMENT
  {
    text: "The expert in anything was once a beginner. Keep practicing.",
    author: "Helen Hayes",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "Progress, not perfection. Every word you speak is practice for the next one.",
    author: "Unknown",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "You don't have to be great to get started, but you have to get started to be great.",
    author: "Les Brown",
    category: "growth",
    tone: "inspiring"
  },
  {
    text: "The only way to improve your speaking is to speak. Stop overthinking and start talking.",
    author: "Unknown",
    category: "growth",
    tone: "direct"
  },
  {
    text: "Every master was once a disaster. Keep going.",
    author: "Unknown",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "You're not failing. You're learning. Every mistake is data for improvement.",
    author: "Unknown",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "The gap between where you are and where you want to be is bridged by practice.",
    author: "Unknown",
    category: "growth",
    tone: "inspiring"
  },
  {
    text: "Stop comparing your chapter 1 to someone else's chapter 20.",
    author: "Unknown",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "You're not behind. You're exactly where you need to be to start improving.",
    author: "Unknown",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "The only bad practice is no practice. Keep showing up.",
    author: "Unknown",
    category: "growth",
    tone: "direct"
  },

  // LEADERSHIP & INFLUENCE
  {
    text: "Leaders speak last. Listen first, then lead with your voice.",
    author: "Simon Sinek",
    category: "leadership",
    tone: "inspiring"
  },
  {
    text: "Your words have the power to change someone's day. Use them wisely.",
    author: "Unknown",
    category: "leadership",
    tone: "inspiring"
  },
  {
    text: "Great leaders are great communicators. Great communicators are great leaders.",
    author: "Unknown",
    category: "leadership",
    tone: "inspiring"
  },
  {
    text: "Speak to inspire, not to impress. Your audience will feel the difference.",
    author: "Unknown",
    category: "leadership",
    tone: "inspiring"
  },
  {
    text: "The best leaders don't just speak well; they make others want to speak well too.",
    author: "Unknown",
    category: "leadership",
    tone: "inspiring"
  },
  {
    text: "Your voice is your leadership tool. Sharpen it daily.",
    author: "Unknown",
    category: "leadership",
    tone: "direct"
  },
  {
    text: "Influence starts with clarity. Clarity starts with practice.",
    author: "Unknown",
    category: "leadership",
    tone: "direct"
  },
  {
    text: "You can't lead from behind. You have to speak up and speak out.",
    author: "Unknown",
    category: "leadership",
    tone: "challenging"
  },
  {
    text: "The most powerful person in the room is the one who speaks with confidence.",
    author: "Unknown",
    category: "leadership",
    tone: "inspiring"
  },
  {
    text: "Leadership is not about being the loudest; it's about being the clearest.",
    author: "Unknown",
    category: "leadership",
    tone: "inspiring"
  },

  // COMMUNICATION MASTERY
  {
    text: "The most important thing in communication is hearing what isn't being said.",
    author: "Peter Drucker",
    category: "communication",
    tone: "inspiring"
  },
  {
    text: "Good communication is the bridge between confusion and clarity.",
    author: "Nat Turner",
    category: "communication",
    tone: "inspiring"
  },
  {
    text: "Speak in such a way that others love to listen to you. Listen in such a way that others love to speak to you.",
    author: "Unknown",
    category: "communication",
    tone: "inspiring"
  },
  {
    text: "The way you say something is as important as what you say.",
    author: "Unknown",
    category: "communication",
    tone: "direct"
  },
  {
    text: "Clear communication is not a luxury; it's a necessity.",
    author: "Unknown",
    category: "communication",
    tone: "direct"
  },
  {
    text: "You can't not communicate. Every pause, every gesture, every word sends a message.",
    author: "Unknown",
    category: "communication",
    tone: "challenging"
  },
  {
    text: "The best communicators make complex things simple, not simple things complex.",
    author: "Unknown",
    category: "communication",
    tone: "inspiring"
  },
  {
    text: "Your message is only as strong as your delivery. Work on both.",
    author: "Unknown",
    category: "communication",
    tone: "direct"
  },
  {
    text: "Communication is 20% what you say and 80% how you say it.",
    author: "Unknown",
    category: "communication",
    tone: "direct"
  },
  {
    text: "Speak with purpose. Every word should move your message forward.",
    author: "Unknown",
    category: "communication",
    tone: "direct"
  },

  // MORE TOUGH LOVE
  {
    text: "Stop making your audience work to understand you. Make it effortless.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Your 'um's are stealing your credibility. Stop giving them away.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "Nobody is born a great speaker. Everyone is born with the potential to become one.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "You're not improving by staying in your comfort zone. You're improving by leaving it.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Stop saying 'I can't' and start saying 'I'm learning to.'",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "Your audience doesn't care about your excuses. They care about your message.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Every time you avoid speaking, you're choosing comfort over growth.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "Stop waiting for permission to speak. Your voice is valid now.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "You're not too quiet. You're too comfortable with being unheard.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "The only way out is through. Start speaking, start improving.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },

  // INSPIRATIONAL SPEAKING
  {
    text: "Words have energy and power with the ability to help, to heal, to hinder, to hurt, to harm, to humiliate, and to humble.",
    author: "Yehuda Berg",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "The tongue has no bones, but is strong enough to break a heart. So be careful with your words.",
    author: "Unknown",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "Speak with integrity. Say only what you mean. Avoid using the word to speak against yourself or to gossip about others.",
    author: "Don Miguel Ruiz",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "Your voice is the most powerful tool you have. Use it to change the world.",
    author: "Unknown",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "The spoken word is the most powerful force in the universe.",
    author: "Unknown",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "Speak your truth, even if your voice shakes.",
    author: "Maggie Kuhn",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "Your voice is your fingerprint. Make it unique, make it powerful.",
    author: "Unknown",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "The right words at the right time can change everything.",
    author: "Unknown",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "Speak with conviction. Your audience will feel your passion.",
    author: "Unknown",
    category: "speaking",
    tone: "inspiring"
  },
  {
    text: "Your voice is your superpower. Don't let fear silence it.",
    author: "Unknown",
    category: "speaking",
    tone: "inspiring"
  },

  // MORE GROWTH MINDSET
  {
    text: "The difference between the impossible and the possible lies in a person's determination.",
    author: "Tommy Lasorda",
    category: "growth",
    tone: "inspiring"
  },
  {
    text: "You don't have to be perfect to be amazing.",
    author: "Unknown",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "Every expert was once a beginner. Every pro was once an amateur.",
    author: "Helen Hayes",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "The only way to do great work is to love what you do. Love your voice, love your message.",
    author: "Steve Jobs (adapted)",
    category: "growth",
    tone: "inspiring"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "growth",
    tone: "inspiring"
  },
  {
    text: "You're not stuck where you are. You're just getting started.",
    author: "Unknown",
    category: "growth",
    tone: "encouraging"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams and have the courage to speak them.",
    author: "Eleanor Roosevelt (adapted)",
    category: "growth",
    tone: "inspiring"
  },
  {
    text: "You are never too old to set another goal or to dream a new dream.",
    author: "C.S. Lewis",
    category: "growth",
    tone: "inspiring"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "growth",
    tone: "inspiring"
  },
  {
    text: "You have within you right now, everything you need to become the speaker you want to be.",
    author: "Unknown",
    category: "growth",
    tone: "encouraging"
  },

  // FINAL TOUGH LOVE & MOTIVATION
  {
    text: "Stop making excuses and start making progress. Your voice is waiting.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "You're not improving by thinking about improving. You're improving by practicing.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Your audience deserves your best. Give them your best, not your worst.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Stop saying 'I'm not good at this.' Start saying 'I'm getting better at this.'",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "You're not behind. You're exactly where you need to be to start improving.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "The only way to improve your speaking is to speak. Stop overthinking and start talking.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "You're not nervous. You're unprepared. Fix the preparation, not the nerves.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "Stop waiting for the perfect moment. The perfect moment is now.",
    author: "Unknown",
    category: "tough_love",
    tone: "challenging"
  },
  {
    text: "Your voice matters. Stop acting like it doesn't.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  },
  {
    text: "You're not improving by staying silent. You're improving by speaking up.",
    author: "Unknown",
    category: "tough_love",
    tone: "direct"
  }
]

export function getRandomQuote(): MotivationQuote {
  return motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)]
}

export function getQuoteByCategory(category: MotivationQuote['category']): MotivationQuote {
  const categoryQuotes = motivationQuotes.filter(quote => quote.category === category)
  return categoryQuotes[Math.floor(Math.random() * categoryQuotes.length)]
}

export function getQuoteByTone(tone: MotivationQuote['tone']): MotivationQuote {
  const toneQuotes = motivationQuotes.filter(quote => quote.tone === tone)
  return toneQuotes[Math.floor(Math.random() * toneQuotes.length)]
}
