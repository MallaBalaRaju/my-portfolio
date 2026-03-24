// ─────────────────────────────────────────────
//  Portfolio Data  —  edit this file to update
//  content across the entire site
// ─────────────────────────────────────────────

export const personal = {
  name:       'Malla Bala Raju',
  shortName:  'MBR',
  title:      'Full-Stack Developer & Data Science Enthusiast',
  subtitle:   'Building scalable web applications and data-driven solutions with modern technologies.',
  email:      'mallabalaraju7@gmail.com',
  phone:      '+91 9989273051',
  location:   'India',
  available:  true,
}

export const socials = {
  github:   'https://github.com/MallaBalaRaju',
  linkedin: 'https://www.linkedin.com/in/malla-balaraju/',
  email:    'mailto:mallabalaraju7@gmail.com',
  phone:    'tel:+919989273051',
  resume:   'Malla_Bala_Raju_Resume.pdf',
}

export const about = {
  paragraphs: [
    "I’m a Computer Science Engineering student at Lovely Professional University with a minor in Data Science. I enjoy building real-world applications that combine clean design with strong functionality.",
    "My interests lie in full-stack development and data-driven solutions. I’ve worked with technologies like React, Next.js, Django, and Node.js to build scalable web applications, and I use Python for data analysis, machine learning, and visualization.",
    "I’m always curious to learn new technologies, especially in areas like AI automation and cloud computing, and I enjoy turning ideas into practical, impactful projects.",
  ],
  highlights: [
    { label: 'Full-Stack Dev',  desc: 'Next.js, React, Node.js, Django',   icon: 'Code2'    },
    { label: 'Data Science',    desc: 'Python, Pandas, Power BI, ML',       icon: 'Database' },
    { label: 'Problem Solver',  desc: 'DSA, OOP, System Design',            icon: 'Brain'    },
  ],
}

export const skills = [
  {
    category: 'Languages',
    items: ['C', 'Java', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js', 'Django', 'Tailwind CSS', 'Scikit-learn'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git & GitHub', 'Docker', 'VS Code', 'Jupyter Notebook', 'MySQL', 'Google Studios'],
  },
  {
    category: 'Data Science',
    items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI', 'Predictive Modeling'],
  },
]

export const projects = [
  {
    id:       'buyx',
    title:    'buyX',
    subtitle: 'Premium E-Commerce Platform',
    desc:     'Developed a dual-sided e-commerce platform for customers and distributors with product browsing, purchasing, inventory management, and order tracking.',
    details:  [
      'Migrated legacy Django-based system to Next.js 15 for improved performance and scalability',
      'Built responsive UI using Tailwind CSS and shadcn/ui',
      'Integrated Razorpay for payments and Twilio for OTP/SMS notifications',
    ],
    stack:    ['Next.js', 'React', 'Django', 'Python', 'Tailwind CSS', 'Prisma', 'Razorpay API'],
    github:   'https://github.com/MallaBalaRaju/buyX',
    date:     'Feb 2026',
    featured: true,
  },
  {
    id:       'eda',
    title:    'EDA – E-Commerce Sales',
    subtitle: 'Exploratory Data Analysis',
    desc:     'Conducted in-depth analysis of 7,200+ e-commerce transactions to identify sales, revenue, and customer behavior trends.',
    details:  [
      'Executed data cleaning, preprocessing, and correlation analysis',
      'Designed visual dashboards and analytical reports',
      'Uncovered key performance drivers and regional trends',
    ],
    stack:    ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    github:   'https://github.com/MallaBalaRaju/DATA-VISULIZATION',
    date:     'Apr 2025',
    featured: false,
  },
  {
    id:       'predictor',
    title:    'Smart Resource Predictor',
    subtitle: 'AI-Based Predictive System',
    desc:     'Built an AI-based predictive system using ML models to forecast energy and water usage with 97% accuracy.',
    details:  [
      'Used Decision Tree, XGBoost, and Neural Networks for predictions',
      'Developed a Flask web app with interactive dashboards',
      'Applied feature engineering and optimization algorithms for sustainable resource use',
    ],
    stack:    ['Python', 'Flask', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Chart.js', 'MySQL'],
    github:   'https://github.com/MallaBalaRaju',
    date:     'Jun 2025',
    featured: false,
  },
  {
    id:       'crypto-viz',
    title:    'Top 500 Crypto Coins',
    subtitle: 'Data Visualization Dashboard',
    desc:     'Developed an interactive Power BI dashboard to visualize and analyze the market trends and performance metrics of the top 500 cryptocurrencies.',
    details:  [
      'Extracted, transformed, and loaded (ETL) cryptocurrency market data',
      'Designed interactive charts and KPIs to track market caps and price trends',
      'Created a comprehensive Power BI file (project.pbix) for dynamic data exploration',
    ],
    stack:    ['Power BI', 'Data Visualization', 'Data Analytics'],
    github:   'https://github.com/MallaBalaRaju/Data-Visualization-of-top-500-crypto-coins-',
    date:     '2024',
    featured: false,
  },
]

export const experience = [
  {
    type:  'training',
    icon:  'Briefcase',
    title: 'Data Structures & Algorithms Training',
    org:   'Lovely Professional University',
    date:  'Jun 2025 – Jul 2025',
    desc:  'Built an AI-based predictive system using ML models (Decision Tree, XGBoost, Neural Networks) to forecast energy and water usage with 97% accuracy. Developed a Flask web app with interactive dashboards.',
  },
  {
    type:  'certificate',
    icon:  'Award',
    title: 'ChatGPT-4 Prompt Engineering',
    org:   'Infosys Springboard',
    date:  'Aug 2025',
    desc:  'ChatGPT, Generative AI & LLM — advanced prompt engineering techniques.',
  },
  {
    type:  'certificate',
    icon:  'Award',
    title: 'Generative AI Apps with No-Code Tools',
    org:   'Infosys Springboard',
    date:  'Aug 2025',
    desc:  'Building generative AI applications and solutions using no-code platforms.',
  },
  {
    type:  'certificate',
    icon:  'BookOpen',
    title: 'Cloud Computing',
    org:   'NPTEL',
    date:  'Apr 2025',
    desc:  'Comprehensive cloud computing fundamentals and architecture.',
  },
  {
    type:  'certificate',
    icon:  'BookOpen',
    title: 'Computer Communications',
    org:   'Coursera',
    date:  'Nov 2024',
    desc:  'Networking fundamentals and computer communication protocols.',
  },
  {
    type:  'activity',
    icon:  'Award',
    title: 'Community Development Project',
    org:   'NGO Supervised',
    date:  'Jun 2024',
    desc:  'Completed a 40-hour community development project under NGO supervision.',
  },
]

export const education = [
  {
    degree:    'Bachelor of Technology',
    field:     'Computer Science & Engineering',
    school:    'Lovely Professional University',
    location:  'Phagwara, Punjab',
    period:    'Aug 2023 – Aug 2027',
    grade:     'CGPA: 6.6',
    highlight: 'Minor in Data Science',
  },
  {
    degree:   'Intermediate (12th)',
    field:    'MPC',
    school:   'Narayana Junior College',
    location: 'Visakhapatnam, AP',
    period:   'Apr 2022 – Mar 2023',
    grade:    '86.6%',
  },
  {
    degree:   'Matriculation (10th)',
    field:    '',
    school:   'Narayana High School',
    location: 'Visakhapatnam, AP',
    period:   'Apr 2020 – Mar 2021',
    grade:    'CGPA: 10.0',
  },
]

export const navLinks = [
  { label: 'About',      href: '#about'      },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Experience', href: '#experience' },
  { label: 'Education',  href: '#education'  },
  { label: 'Contact',    href: '#contact'    },
]
