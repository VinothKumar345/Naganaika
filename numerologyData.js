// Complete Data Store for Naganiaka, Nakuli Numerology Platform

export const BRAND_INFO = {
  name: "Naganiaka, Nakuli Numerology",
  tagline: "Specialized Consultation Services Powered by Numerology",
  subTagline: "Your Trusted Financial & Life Guidance Partner",
  coreConcept: "Providing educational guidance, future insights, and date-of-birth-based predictive services.",
  positioning: "Professional, trustworthy, customer-focused and suitable for future business expansion.",
  domainRecommendation: "Retain Naganiaka, Nakuli Numerology as your primary brand name. Prioritize a simple .in domain if the matching .com cannot be secured.",
  phone: "+91 98400 12345",
  alternatePhone: "+91 98400 54321",
  email: "consult@naganiaka.in",
  officeAddress: "Nakuli Sanctum, 4th Floor, Vedic Heritage Tower, Mount Road, Chennai, Tamil Nadu 600002, India",
  operatingHours: "Monday – Saturday: 9:30 AM – 7:30 PM IST (Sunday by prior appointment)",
  whatsappNumber: "919840012345",
  whatsappUrl: "https://wa.me/919840012345?text=Hello%20Naganiaka%2C%20Nakuli%20Numerology%20team%2C%20I%20would%20like%20to%20inquire%20about%20a%20consultation.",
};

// STRICT REQUIREMENT: Only Instagram, LinkedIn, and YouTube
export const SOCIAL_LINKS = [
  {
    name: "Instagram",
    id: "instagram",
    url: "https://www.instagram.com/naganiaka_numerology",
    handle: "@naganiaka_numerology",
    description: "Daily numerology tips, cosmic transit reels, and inspirational stories.",
    color: "from-pink-500 via-red-500 to-yellow-500"
  },
  {
    name: "LinkedIn",
    id: "linkedin",
    url: "https://www.linkedin.com/company/naganiaka-nakuli-numerology",
    handle: "Naganiaka, Nakuli Numerology",
    description: "Corporate numerology, executive decision insights, and workplace team dynamics.",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "YouTube",
    id: "youtube",
    url: "https://www.youtube.com/@NaganiakaNumerology",
    handle: "Naganiaka Numerology Official",
    description: "In-depth Life Path readings, corporate case studies, webinars, and live Q&A.",
    color: "from-red-600 to-red-700"
  }
];

// All 12 Core Service Offerings from the Specification Document
export const SERVICES_DATA = [
  {
    id: "marriage-horoscope",
    category: "b2c",
    title: "Marriage Horoscope & Compatibility",
    shortDesc: "Traditional horoscope-based discussion of marriage compatibility and related questions.",
    fullDesc: "A deeply analytical and traditional assessment of prospective or current marital bonds. We evaluate harmonic vibrations between partners, emotional synchronization, planetary alignments, and long-term domestic prosperity, addressing specific questions regarding timing, mutual harmony, and marital longevity.",
    highlights: ["Ashtakoota & Guna Milan assessment", "Date of birth harmonic alignment", "Remedial recommendations for manglik/dosha balance", "Auspicious wedding date window guidance"],
    duration: "45 - 60 mins",
    icon: "HeartHandshake",
    badge: "Popular B2C"
  },
  {
    id: "kundli-matching",
    category: "b2c",
    title: "Kundli Matching",
    shortDesc: "Traditional matching of birth charts and discussion of compatibility factors.",
    fullDesc: "Thorough traditional matching of birth charts combining Vedic planetary placements with numerical root compatibility. We review health, mental temperament, family growth, financial synergy, and spiritual resonance before entering into a lifelong sacred union.",
    highlights: ["Deep 36-Guna scoring review", "Planetary balance & Bhakoot/Nadi analysis", "Detailed compatibility advisory report", "Follow-up Q&A consultation"],
    duration: "45 mins",
    icon: "Users",
    badge: "Traditional"
  },
  {
    id: "housewarming-griha-pravesh",
    category: "b2c",
    title: "Housewarming / Griha Pravesh",
    shortDesc: "Guidance on auspicious timing and traditional considerations for a new home.",
    fullDesc: "Ensure that your entry into a new dwelling or workspace vibrates with peace, good fortune, and celestial protection. We calculate the precise auspicious Muhurat (date, planetary hour, and planetary alignment) customized to the family head's birth chart and home address.",
    highlights: ["Personalized auspicious Muhurat calculation", "Directional entrance energy balance", "First-entry rituals & vastu harmony tips", "Customized ritual calendar"],
    duration: "30 - 45 mins",
    icon: "Home",
    badge: "Auspicious Timing"
  },
  {
    id: "corporate-consultation",
    category: "b2b",
    title: "Corporate Consultation",
    shortDesc: "Consultation for business or organisational questions, planning considerations and selected corporate needs.",
    fullDesc: "High-impact, strategic corporate numerology for business owners, boardrooms, and enterprises. Includes evaluation of founding dates, employee key-person numerological compatibility, brand identity resonance, corporate merger timing, and business growth trajectory.",
    highlights: ["Business name vibration & numerical branding score", "Key executive & C-suite synergy analysis", "Product launch & incorporation Muhurat", "Confidential corporate retainer packages"],
    duration: "60 - 90 mins",
    icon: "Briefcase",
    badge: "B2B Flagship"
  },
  {
    id: "free-consultation-hardship",
    category: "compassion",
    title: "Free Consultation for People in Need",
    shortDesc: "Compassion-led, no-fee consultation for people facing serious difficulties and financial hardship, subject to availability.",
    fullDesc: "At Naganiaka, Nakuli Numerology, our sacred science is grounded in empathy and service to humanity. We reserve dedicated consultation slots each week at absolute zero cost for individuals undergoing severe emotional, financial, or personal distress.",
    highlights: ["100% confidential & zero fee", "Compassionate, non-judgmental guidance", "Practical numerical remedies without expensive gems", "Direct booking priority for verified hardship cases"],
    duration: "30 mins",
    icon: "Heart",
    badge: "Compassion Initiative"
  },
  {
    id: "naming-consultation",
    category: "b2c",
    title: "Naming Consultation",
    shortDesc: "Numerology- or astrology-based discussion to support name selection.",
    fullDesc: "A name carries a lifelong vibrational frequency that attracts or repels opportunities. We craft balanced, auspicious names for newborns, calculate surname harmonic balances, or formulate minor spelling adjustments for adults to dissolve persistent life bottlenecks.",
    highlights: ["Chaldean & Pythagorean name vibration analysis", "Newborn naming aligned with birth Nakshatra", "Professional name & signature optimization", "Detailed Name Certificate with lucky totals"],
    duration: "45 mins",
    icon: "FileSignature",
    badge: "Life-Transforming"
  },
  {
    id: "job-guidance",
    category: "b2c",
    title: "Job Guidance",
    shortDesc: "Discussion of job-related concerns, choices and next steps.",
    fullDesc: "Tailored numerical diagnostic for job seekers and employed professionals feeling stuck. Discover why certain interview periods fail, the best months to resign or request appraisals, and the exact corporate culture numbers that fit your birth date.",
    highlights: ["Timing of career breakthroughs & job offers", "Role suitability analysis by Mulank/Bhagyank", "Overcoming workplace politics & stagnation", "Confidence-building vibrational remedies"],
    duration: "30 - 45 mins",
    icon: "Search",
    badge: "Career Solutions"
  },
  {
    id: "career-guidance",
    category: "b2c",
    title: "Career Guidance",
    shortDesc: "Reflective guidance on career direction, professional development and career transitions.",
    fullDesc: "Comprehensive vocational roadmap for students choosing higher education streams or experienced professionals contemplating significant career pivots, entrepreneurship, or international relocation.",
    highlights: ["Education stream & industry alignment", "Entrepreneurship vs. salaried employment analysis", "Decade cycle & Pinnacle year predictions", "Actionable transition strategy"],
    duration: "45 - 60 mins",
    icon: "Compass",
    badge: "Future Vision"
  },
  {
    id: "personal-numerology-reading",
    category: "b2c",
    title: "Personal Numerology Reading",
    shortDesc: "A symbolic reading based on numbers associated with the individual, such as the date of birth.",
    fullDesc: "An expansive, deeply personalized reading examining the complete numerical matrix of your life: Core Driver (Mulank), Destiny (Bhagyank), Soul Urge, Karmic Debt numbers, and Lo Shu grid deficiencies.",
    highlights: ["Complete 360-degree personality & karma report", "Hidden talent activation & blind spot reveals", "Harmonic relationships & compatibility chart", "Comprehensive 15+ page personal summary"],
    duration: "60 mins",
    icon: "Sparkles",
    badge: "Signature Reading"
  },
  {
    id: "birth-date-number-analysis",
    category: "b2c",
    title: "Birth-Date Number Analysis",
    shortDesc: "Calculation and traditional interpretation of numbers derived from a date of birth.",
    fullDesc: "Focused analytical breakdown of the raw numerical frequencies in your birth date. Discover your Root Energy, Life Path, Master Numbers (11, 22, 33), and current Personal Year Vibration to seize favorable opportunities right now.",
    highlights: ["Instant Mulank & Bhagyank calculation", "Current 12-month personal cycle forecast", "Missing number remedies in your date matrix", "Auspicious dates for contracts & travel"],
    duration: "30 mins",
    icon: "Calculator",
    badge: "Essential"
  },
  {
    id: "personal-horoscope-consultation",
    category: "b2c",
    title: "Personal Horoscope Consultation",
    shortDesc: "Discussion of a personal horoscope and questions raised by the client.",
    fullDesc: "One-on-one deep dive into your astrological birth chart (Kundli) in conjunction with numerological patterns. Ask specific, pressing questions regarding family, health, finances, disputes, or spiritual evolution.",
    highlights: ["Dasha & Antardasha timeline analysis", "Transit (Gochara) impact on key life houses", "Targeted answers to your specific queries", "Ethical, grounded Vedic guidance"],
    duration: "45 - 60 mins",
    icon: "HelpCircle",
    badge: "In-Depth"
  },
  {
    id: "important-date-consultation",
    category: "b2c",
    title: "Important-Date Consultation",
    shortDesc: "Traditional guidance on choosing dates for selected personal or family events.",
    fullDesc: "Timing is everything. Secure the highest probability of harmony, prosperity, and success for milestone family celebrations, vehicle purchases, property registration, medical procedures, or legal filings through precise date selection.",
    highlights: ["Customized Muhurat selection", "Planetary hour (Choghadiya) breakdown", "Avoidance of Rahu Kaal & conflicting thithis", "Event-specific timing certificate"],
    duration: "30 mins",
    icon: "CalendarCheck",
    badge: "Auspicious"
  }
];

// Blog & Content Requirements: Numbers 1 through 9
export const NUMEROLOGY_1_TO_9 = [
  {
    number: 1,
    archetype: "The Leader / Innovator",
    characteristics: "Independence, ambition, pioneering spirit, strong willpower, and executive ability.",
    rulingPlanet: "Sun (Surya)",
    element: "Fire",
    sacredColor: "Golden Yellow, Royal Crimson, Orange",
    gemstone: "Ruby (Manikya)",
    favorableDays: "Sunday, Monday",
    bestCareerRoles: "Entrepreneurs, CEOs, Inventors, Directors, Political Leaders, Visionaries",
    symbolicMeaning: "Number 1 represents the primal creative seed, the spark of divine consciousness, and original leadership. It embodies unbroken determination and the courageous will to manifest new realities.",
    strengths: ["Unyielding self-reliance", "Pioneering innovation", "Charismatic executive command", "Inherent fearlessness"],
    challengesToBalance: ["Impatience with slower minds", "Tendency toward authoritative dominance", "Burnout from carrying solo burdens"],
    b2bAdvice: "In corporate roles, Number 1 individuals must head visionary projects rather than execute repetitive tasks. Ensure brand names vibrating to 1 emphasize innovation and authority."
  },
  {
    number: 2,
    archetype: "The Mediator / Diplomat",
    characteristics: "Harmonious, sensitive, intuitive, supportive partner, and master of collaboration.",
    rulingPlanet: "Moon (Chandra)",
    element: "Water",
    sacredColor: "Pearl White, Silver, Cream, Light Green",
    gemstone: "Pearl (Moti) or Moonstone",
    favorableDays: "Monday, Friday",
    bestCareerRoles: "Diplomats, Counselors, HR Executives, Mediators, Psychologists, Creative Partners",
    symbolicMeaning: "Number 2 embodies dual harmony, the gentle receptive principle, and emotional intelligence. It bridges divides, heals conflicts, and provides the nurturing ground for shared greatness.",
    strengths: ["Profound empathetic intuition", "Mastery of peacemaking & win-win negotiations", "Artistic appreciation", "Loyal supportive partnership"],
    challengesToBalance: ["Over-sensitivity to criticism", "Hesitation in rapid decision-making", "Emotional mood swings"],
    b2bAdvice: "Crucial in client relationship management, diplomatic negotiations, and human resource leadership. Organizations with Number 2 energy excel in team cohesion and employee retention."
  },
  {
    number: 3,
    archetype: "The Communicator / Creative",
    characteristics: "Self-expression, optimism, artistic talent, charisma, and social enthusiasm.",
    rulingPlanet: "Jupiter (Guru / Brihaspati)",
    element: "Air & Fire",
    sacredColor: "Saffron, Golden Yellow, Purple",
    gemstone: "Yellow Sapphire (Pukhraj)",
    favorableDays: "Thursday, Tuesday",
    bestCareerRoles: "Authors, Orators, Media Executives, Marketers, Performers, Professors, Designers",
    symbolicMeaning: "Number 3 is the joyous joy of life, the sacred trinity of thought, word, and deed. It shines with expansive wisdom, magnetic social charm, and boundless creative imagination.",
    strengths: ["Spellbinding verbal & written eloquence", "Natural infectious optimism", "Versatile creative talents", "Generous mentorship"],
    challengesToBalance: ["Scattering creative energy across too many goals", "Superficiality when bored", "Financial extravagance"],
    b2bAdvice: "Ideal for public relations, marketing campaigns, and brand storytelling. Names vibrating to 3 attract widespread popularity and media goodwill."
  },
  {
    number: 4,
    archetype: "The Builder / Organizer",
    characteristics: "Practicality, discipline, dedication, stability, order, and strong work ethic.",
    rulingPlanet: "Rahu (North Node / Uranus)",
    element: "Earth",
    sacredColor: "Electric Blue, Khaki, Earthy Ochre",
    gemstone: "Hessonite Garnet (Gomed)",
    favorableDays: "Saturday, Sunday",
    bestCareerRoles: "Architects, Financial Controllers, Engineers, Operations Directors, System Architects",
    symbolicMeaning: "Number 4 represents the foundational square of stability, unshakeable bedrock, and methodical execution. It turns lofty dreams into enduring concrete systems.",
    strengths: ["Masterful operational discipline", "Reliability that never wavers", "Precision in detail & compliance", "Unmatched perseverance"],
    challengesToBalance: ["Resistance to sudden disruptive changes", "Excessive rigidity", "Workaholic neglect of rest"],
    b2bAdvice: "The backbone of operations, risk management, and scalable infrastructure. A corporate name anchored in 4 assures customers of long-term financial stability."
  },
  {
    number: 5,
    archetype: "The Adventurer / Explorer",
    characteristics: "Freedom-loving, versatile, adaptable, energetic, and catalyst for change.",
    rulingPlanet: "Mercury (Budh)",
    element: "Air",
    sacredColor: "Emerald Green, Turquoise, Grey",
    gemstone: "Emerald (Panna)",
    favorableDays: "Wednesday, Friday",
    bestCareerRoles: "Traders, Global Marketers, Tech Innovators, Journalists, Travel Entrepreneurs",
    symbolicMeaning: "Number 5 occupies the exact center of the 1-9 single-digit spectrum. It is the dynamic quicksilver of life, thriving on movement, commerce, communication, and swift evolution.",
    strengths: ["Rapid intellectual agility", "Supreme adaptability under uncertainty", "Commercial and sales genius", "Effortless cross-cultural charm"],
    challengesToBalance: ["Restlessness and early abandonment of routine", "Impulsive risk-taking", "Inconsistent focus"],
    b2bAdvice: "Essential in sales, international trade, and agile tech startups. Number 5 businesses thrive in high-speed digital markets and global consulting."
  },
  {
    number: 6,
    archetype: "The Nurturer / Caregiver",
    characteristics: "Responsibility, compassion, domestic harmony, protective nature, and healing energy.",
    rulingPlanet: "Venus (Shukra)",
    element: "Earth & Water",
    sacredColor: "Royal Blue, Rose Pink, White",
    gemstone: "Diamond (Heera) or White Zircon",
    favorableDays: "Friday, Tuesday",
    bestCareerRoles: "Healers, Hospitality Leaders, Luxury Brand Curators, Interior Designers, Family Counselors",
    symbolicMeaning: "Number 6 represents the highest vibration of unconditional love, domestic bliss, aesthetic harmony, and protective stewardship. It balances beauty with moral responsibility.",
    strengths: ["Deep compassionate empathy", "Natural eye for aesthetic perfection", "Protective community pillar", "Magnetic warmth & hospitality"],
    challengesToBalance: ["Self-sacrificing martyr complex", "Perfectionist anxiety about loved ones", "Difficulty accepting imperfection"],
    b2bAdvice: "Prime energy for luxury brands, healthcare institutions, real estate, and hospitality. Evokes deep consumer trust and lasting brand loyalty."
  },
  {
    number: 7,
    archetype: "The Seeker / Analyst",
    characteristics: "Intellectual depth, introspection, spiritual research, wisdom, and analytical mastery.",
    rulingPlanet: "Ketu (South Node / Neptune)",
    element: "Water",
    sacredColor: "Smoky Grey, Lavender, Deep Sea Blue",
    gemstone: "Cat's Eye (Lehsuniya)",
    favorableDays: "Monday, Thursday",
    bestCareerRoles: "Data Scientists, Philosophers, Spiritual Mentors, Scientific Researchers, Strategists",
    symbolicMeaning: "Number 7 is the sacred bridge between analytical logic and mystical revelation. It looks beneath surface illusions to uncover hidden universal truths and mathematical laws.",
    strengths: ["Razor-sharp investigative mind", "Spiritual discernment & profound wisdom", "Immunity to surface flattery", "Exceptional original research"],
    challengesToBalance: ["Social detachment & cynical aloofness", "Over-intellectualizing emotional feelings", "Reluctance to delegate"],
    b2bAdvice: "Critical for R&D, patent development, deep tech analytics, and strategic forecasting. A 7 vibration ensures intellectual authority and high credibility."
  },
  {
    number: 8,
    archetype: "The Powerhouse / Achiever",
    characteristics: "Financial intelligence, authority, material success, efficiency, and leadership.",
    rulingPlanet: "Saturn (Shani)",
    element: "Earth",
    sacredColor: "Midnight Blue, Dark Violet, Black, Charcoal",
    gemstone: "Blue Sapphire (Neelam) or Amethyst",
    favorableDays: "Saturday, Wednesday",
    bestCareerRoles: "Investment Bankers, Corporate Titans, Real Estate Moguls, Judges, Industrialists",
    symbolicMeaning: "Number 8 represents the eternal lemniscate of infinity, karmic justice, and grand-scale financial manifestation. What you sow with discipline, you reap in abundance.",
    strengths: ["Unrivaled financial & executive acumen", "Karmic fairness and ethical integrity", "Capacity to manage massive capital & systems", "Indomitable resilience through setbacks"],
    challengesToBalance: ["Obsession with material metrics", "Emotional sternness or intimidation", "Difficulty resting"],
    b2bAdvice: "The supreme number for financial institutions, wealth management, infrastructure conglomerates, and heavy industries. Requires unwavering ethical alignment."
  },
  {
    number: 9,
    archetype: "The Humanitarian / Visionary",
    characteristics: "Universal love, empathy, wisdom, selflessness, and artistic completion.",
    rulingPlanet: "Mars (Mangal)",
    element: "Fire",
    sacredColor: "Crimson Red, Scarlet, Deep Coral",
    gemstone: "Red Coral (Moonga)",
    favorableDays: "Tuesday, Thursday",
    bestCareerRoles: "Philanthropists, International Diplomats, Renowned Artists, Social Reformers, Environmentalists",
    symbolicMeaning: "Number 9 contains the vibrational essence of all preceding numbers (1 through 8). It signifies spiritual graduation, global humanitarian consciousness, and fearless service.",
    strengths: ["Transcendent universal compassion", "Visionary perspective unconstrained by borders", "Charismatic artistic expression", "Courage to fight for social justice"],
    challengesToBalance: ["Emotional exhaustion from taking on worldly pain", "Difficulty letting go of past chapters", "Fiery anger when ideals are compromised"],
    b2bAdvice: "Ideal for global NGOs, green energy initiatives, educational institutions, and international foundations. Inspires immense grassroots loyalty."
  }
];

// Chatbot Decision-Tree Data ('BOOT Chat')
export const BOOT_CHAT_SCENARIOS = {
  problemDiagnosis: {
    category: "Problem Diagnosis",
    question: "What challenges are you currently facing?",
    options: [
      { id: "career", label: "Career Stagnation" },
      { id: "legal", label: "Legal Delays" },
      { id: "exam", label: "Exam Stress" },
      { id: "vehicle", label: "Vehicle Bad Luck" },
      { id: "phone", label: "Phone Number Vibration" }
    ],
    botResponse: "We understand these hurdles can be stressful. Our numerological analysis helps identify underlying numerical mismatches in your profile."
  },
  solutionRecommendation: {
    category: "Solution Recommendation",
    question: "How would you like us to assist you?",
    options: [
      { id: "personal_reading", label: "Personal Reading Report" },
      { id: "instant_chat", label: "Instant Chat Consultation" },
      { id: "document_correction", label: "Document & Number Correction" }
    ],
    botResponse: "Great choice! Our solutions are tailored specifically to your birth date and name vibes to unblock growth."
  },
  serviceQueries: {
    category: "Service-Related Queries",
    question: "Which specific service area are you interested in?",
    options: [
      { id: "job_career", label: "Job/Career Guidance" },
      { id: "vehicle_number", label: "Vehicle Number Optimization" },
      { id: "court_case", label: "Court Case & Legal Timings" },
      { id: "exam_guidance", label: "Exam Guidance & Educational Path" }
    ],
    botResponse: "Connecting you with available time slots for our specialized consultants..."
  }
};

// Video Streaming & Embedded Player Section
export const VIDEO_DATA = [
  {
    id: "vid-1",
    title: "Mastering Date of Birth Analysis: The Vedic Mulank & Bhagyank Explained",
    duration: "14:25",
    category: "Educational",
    views: "18.4K",
    description: "An illuminating masterclass on how your birth date unlocks your subconscious archetypes, career timings, and karmic life mission.",
    thumbnail: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-2",
    title: "How Business Name Numerology Drives Corporate Revenue & Brand Power",
    duration: "21:10",
    category: "B2B Corporate",
    views: "9.2K",
    description: "Corporate case study breakdown: Why global enterprises harmonize their brand name totals with the founder's date of birth.",
    thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-3",
    title: "Griha Pravesh & Housewarming: Auspicious Timing & Vastu Alignment",
    duration: "11:45",
    category: "Sacred Timing",
    views: "14.1K",
    description: "Traditional considerations for selecting the most auspicious entry date for your new sanctuary, avoiding Rahu Kaal and conflicting thithis.",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

// Photo Gallery & Visual Showcase
export const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "Annual Global Numerology Symposium",
    category: "Events",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    caption: "Keynote presentation on Vedic Numerical Harmony and corporate executive leadership."
  },
  {
    id: "gal-2",
    title: "Executive Strategic Consultation Chamber",
    category: "Consultations",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    caption: "Private boardroom consultations for Fortune 500 leadership teams and founders."
  },
  {
    id: "gal-3",
    title: "Client Harmony Milestone Celebration",
    category: "Testimonials",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    caption: "Celebrating a corporate partner's 300% growth after complete brand name and logo vibration alignment."
  },
  {
    id: "gal-4",
    title: "Sacred Kundli & Chart Archiving",
    category: "Consultations",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80",
    caption: "Preserving authentic traditional birth charts and manual calculation registers."
  },
  {
    id: "gal-5",
    title: "Corporate Team Dynamics Workshop",
    category: "Events",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80",
    caption: "Interactive training session for HR leaders on building synergistic cross-functional teams using Life Path archetypes."
  },
  {
    id: "gal-6",
    title: "Heartfelt Client Testimonial Gathering",
    category: "Testimonials",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    caption: "Personal readings helping individuals overcome career hurdles and marital indecision."
  }
];

// Payment Gateway Information Architecture
export const PAYMENT_GATEWAYS = {
  domestic: {
    title: "Indian Clients (Domestic INR)",
    options: ["Razorpay", "Cashfree", "UPI (Google Pay, PhonePe, Paytm)", "Net Banking", "Debit & Credit Cards"],
    note: "Instant payment confirmation with automated GST receipt generation."
  },
  international: {
    title: "International Clients (Global USD/EUR/GBP)",
    options: ["PayPal", "International Credit Cards (via Razorpay Global)", "Direct Swift Wire (B2B Retainers)"],
    note: "All major international currencies accepted smoothly with instant conversion."
  },
  zelleAdvisory: {
    title: "Important Notice Regarding Zelle",
    status: "Not Suitable",
    text: "Zelle is restricted to US domestic bank-to-bank transfers and is NOT suitable for receiving payments directly into an Indian bank account. International customers are kindly requested to complete bookings via PayPal or our secure international card gateway."
  }
};
