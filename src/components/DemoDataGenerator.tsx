// Mock data generator for SIH demo
export const generateDemoData = () => {
  const careers = [
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      category: 'Technology',
      averageSalary: '₹8-25 LPA',
      demand: 'Very High',
      description: 'Build web and mobile applications using modern technologies',
      skills: ['JavaScript', 'React', 'Node.js', 'Python', 'SQL'],
      roadmapDuration: '18-24 months',
      jobCount: 8900,
      growth: 15.2
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      category: 'Analytics',
      averageSalary: '₹10-30 LPA',
      demand: 'Very High',
      description: 'Analyze complex data to help organizations make decisions',
      skills: ['Python', 'Machine Learning', 'Statistics', 'SQL', 'Tableau'],
      roadmapDuration: '24-30 months',
      jobCount: 7800,
      growth: 22.8
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      category: 'Management',
      averageSalary: '₹15-40 LPA',
      demand: 'High',
      description: 'Lead product strategy and development from concept to launch',
      skills: ['Product Strategy', 'Analytics', 'Communication', 'Leadership'],
      roadmapDuration: '36-48 months',
      jobCount: 5400,
      growth: 8.5
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      category: 'Design',
      averageSalary: '₹6-20 LPA',
      demand: 'High',
      description: 'Create beautiful and functional user experiences',
      skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      roadmapDuration: '12-18 months',
      jobCount: 3400,
      growth: 18.3
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      category: 'Technology',
      averageSalary: '₹12-35 LPA',
      demand: 'Very High',
      description: 'Manage infrastructure and deployment pipelines',
      skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
      roadmapDuration: '20-26 months',
      jobCount: 4200,
      growth: 25.1
    }
  ];

  const courses = [
    {
      id: 'full-stack-web-dev',
      title: 'Full Stack Web Development',
      provider: 'CareerGuide Institute',
      duration: '6 months',
      rating: 4.8,
      students: 1234,
      price: '₹49,999',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      category: 'Technology'
    },
    {
      id: 'data-science-bootcamp',
      title: 'Data Science Bootcamp',
      provider: 'AI Academy',
      duration: '8 months',
      rating: 4.9,
      students: 987,
      price: '₹79,999',
      skills: ['Python', 'Pandas', 'Machine Learning', 'Deep Learning'],
      category: 'Analytics'
    },
    {
      id: 'ui-ux-mastery',
      title: 'UI/UX Design Mastery',
      provider: 'Design School',
      duration: '4 months',
      rating: 4.7,
      students: 567,
      price: '₹39,999',
      skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping'],
      category: 'Design'
    }
  ];

  const mentors = [
    {
      id: 'rajesh-kumar',
      name: 'Rajesh Kumar',
      title: 'Senior Software Engineer at Google',
      experience: '8 years',
      expertise: ['JavaScript', 'React', 'System Design'],
      rating: 4.9,
      sessions: 156,
      image: 'RK'
    },
    {
      id: 'priya-sharma',
      name: 'Priya Sharma',
      title: 'Lead Data Scientist at Microsoft',
      experience: '6 years',
      expertise: ['Machine Learning', 'Python', 'AI Strategy'],
      rating: 4.8,
      sessions: 142,
      image: 'PS'
    },
    {
      id: 'amit-patel',
      name: 'Amit Patel',
      title: 'Product Manager at Flipkart',
      experience: '7 years',
      expertise: ['Product Strategy', 'Analytics', 'Growth'],
      rating: 4.9,
      sessions: 98,
      image: 'AP'
    }
  ];

  const jobPostings = [
    {
      id: 'tcs-swe',
      title: 'Software Engineer',
      company: 'TCS',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹4-8 LPA',
      skills: ['Java', 'Spring Boot', 'MySQL'],
      posted: '2 days ago',
      applicants: 234
    },
    {
      id: 'infosys-analyst',
      title: 'Data Analyst',
      company: 'Infosys',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹6-12 LPA',
      skills: ['Python', 'SQL', 'Tableau'],
      posted: '1 week ago',
      applicants: 156
    },
    {
      id: 'wipro-designer',
      title: 'UI/UX Designer',
      company: 'Wipro',
      location: 'Pune',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹8-15 LPA',
      skills: ['Figma', 'Adobe Creative Suite'],
      posted: '3 days ago',
      applicants: 89
    }
  ];

  const assessmentQuestions = {
    aptitude: [
      {
        question: "If a train travels 120 km in 2 hours, what is its speed?",
        options: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"],
        correct: "60 km/h",
        difficulty: "easy"
      },
      {
        question: "Complete the series: 2, 6, 12, 20, 30, ?",
        options: ["40", "42", "44", "46"],
        correct: "42",
        difficulty: "medium"
      },
      {
        question: "If all roses are flowers and some flowers are red, then:",
        options: [
          "All roses are red",
          "Some roses might be red", 
          "No roses are red",
          "All flowers are roses"
        ],
        correct: "Some roses might be red",
        difficulty: "hard"
      }
    ],
    technical: [
      {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["string", "boolean", "integer", "undefined"],
        correct: "integer",
        difficulty: "easy"
      },
      {
        question: "What does 'API' stand for?",
        options: [
          "Application Programming Interface",
          "Advanced Programming Integration", 
          "Automated Program Interface",
          "Application Process Integration"
        ],
        correct: "Application Programming Interface",
        difficulty: "easy"
      },
      {
        question: "In React, what is the purpose of useEffect hook?",
        options: [
          "To manage component state",
          "To handle side effects",
          "To create components",
          "To style components"
        ],
        correct: "To handle side effects",
        difficulty: "medium"
      }
    ],
    personality: [
      {
        question: "In group projects, you prefer to:",
        options: [
          "Lead the team and delegate tasks",
          "Contribute ideas and collaborate",
          "Focus on specific technical tasks",
          "Support others and help where needed"
        ],
        correct: "Contribute ideas and collaborate",
        difficulty: "easy"
      },
      {
        question: "When facing a difficult problem, you typically:",
        options: [
          "Break it down into smaller parts",
          "Ask for help from others",
          "Research similar solutions online",
          "Try different approaches until something works"
        ],
        correct: "Break it down into smaller parts",
        difficulty: "easy"
      }
    ]
  };

  const governmentSchemes = [
    {
      name: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
      description: "Skill development initiative for youth",
      eligibility: "Age 18-45, any educational background",
      benefits: "Free skill training + certification + job assistance",
      website: "https://pmkvyofficial.org"
    },
    {
      name: "Digital India Scholarship",
      description: "Scholarships for IT and digital skills training",
      eligibility: "Students pursuing IT/Computer Science",
      benefits: "Up to ₹50,000 scholarship + internship opportunities",
      website: "https://digitalindia.gov.in"
    },
    {
      name: "Skill India Mission",
      description: "National mission for skill development",
      eligibility: "Youth looking for employment opportunities",
      benefits: "Industry-relevant training + placement assistance",
      website: "https://skillindia.gov.in"
    }
  ];

  return {
    careers,
    courses,
    mentors,
    jobPostings,
    assessmentQuestions,
    governmentSchemes
  };
};

// Demo user profiles for testing
export const demoUsers = {
  student: {
    id: 1,
    name: "Arjun Sharma",
    email: "arjun.sharma@example.com",
    role: "student",
    education: "B.Tech Computer Science",
    year: "3rd Year",
    interests: ["Technology", "Problem Solving", "Innovation"],
    skills: ["JavaScript", "Python", "React"],
    assessmentsTaken: 3,
    profileCompleted: 85,
    careerReadiness: 78,
    preferredLocation: "Bangalore",
    expectedSalary: "₹8-12 LPA"
  },
  admin: {
    id: 2,
    name: "Dr. Priya Patel",
    email: "admin@careerguide.ai",
    role: "admin",
    designation: "Career Counselor & Platform Administrator",
    experience: "10+ years in career guidance",
    specialization: ["Career Counseling", "Data Analytics", "Student Mentoring"],
    studentsHelped: 5000,
    platformExperience: "2 years"
  }
};

// Analytics data for admin dashboard
export const analyticsData = {
  platformStats: {
    totalStudents: 12847,
    activeUsers: 3421,
    assessmentsCompleted: 8976,
    jobPlacements: 2341,
    averageSuccessRate: 87,
    coursesCompleted: 5432
  },
  growthMetrics: {
    monthlyGrowth: 15.2,
    userRetention: 78,
    completionRate: 85,
    satisfactionScore: 4.6
  },
  topPerformingStates: [
    { name: "Maharashtra", students: 2847, growth: 18 },
    { name: "Karnataka", students: 2156, growth: 22 },
    { name: "Tamil Nadu", students: 1923, growth: 15 },
    { name: "Delhi", students: 1654, growth: 12 },
    { name: "Telangana", students: 1234, growth: 25 }
  ]
};