// ─────────────────────────────────────────────
//  Portfolio Data  —  edit this file to update
//  content across the entire site
// ─────────────────────────────────────────────

export const personal = {
  name:       'Malla Bala Raju',
  shortName:  'MBR',
  title:      'Full-Stack Developer & DevOps/Cloud Enthusiast',
  subtitle:   'Building and deploying scalable web applications — from React frontends to cloud-hosted backends — with a secondary strength in data science.',
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
  // PDF must live in /public so it is served at /my-portfolio/Malla_Bala_Raju_Resume.pdf
  resume:   '/my-portfolio/Malla_Bala_Raju_Resume.pdf',
}

export const about = {
  paragraphs: [
    "I'm a Computer Science Engineering student at Lovely Professional University (Minor in Data Science) targeting Full-Stack and DevOps/Cloud roles. I enjoy building production-ready applications — writing clean React/Next.js frontends, robust Django/Node.js backends, and wiring them together with CI/CD pipelines and containerised deployments.",
    "I've worked across the full delivery lifecycle: designing REST APIs, integrating payment gateways (Razorpay) and messaging services (Twilio), deploying to cloud environments, and automating builds with GitHub Actions. My NPTEL Cloud Computing certification and hands-on Docker usage back up that interest.",
    "On the data side I use Python, Pandas, and Power BI to turn raw datasets into actionable insights — a skill that complements my backend work and helps me build smarter applications.",
  ],
  highlights: [
    { label: 'Full-Stack Dev',   desc: 'Next.js, React, Node.js, Django',  icon: 'Code2'    },
    { label: 'DevOps / Cloud',   desc: 'Docker, CI/CD, GitHub Actions, Cloud Computing (NPTEL)', icon: 'Cloud'    },
    { label: 'Data Science',     desc: 'Python, Pandas, Power BI, ML',      icon: 'Database' },
  ],
}

// ── Skills grouped for DevOps/Cloud/Full-Stack targeting ──────────────────────
// Only skills evidenced in projects or certifications are listed.
export const skills = [
  {
    category: 'Cloud & DevOps',
    items: ['Docker', 'GitHub Actions (CI/CD)', 'Cloud Computing (NPTEL)', 'Git & GitHub', 'Vercel / GitHub Pages'],
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js 15', 'Tailwind CSS', 'shadcn/ui', 'JavaScript (ES2024)', 'Chart.js'],
  },
  {
    category: 'Backend',
    items: ['Django', 'Node.js', 'Flask', 'REST APIs', 'Prisma', 'MySQL', 'Razorpay API', 'Twilio API'],
  },
  {
    category: 'Data Science & ML',
    items: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Matplotlib', 'Seaborn', 'Power BI'],
  },
  {
    category: 'Languages & Tools',
    items: ['C', 'Java', 'SQL', 'VS Code', 'Jupyter Notebook', 'Postman'],
  },
]

// ── Projects — full-stack / deployment-heavy first ───────────────────────────
export const projects = [
  {
    id:       'buyx',
    title:    'buyX',
    subtitle: 'Full-Stack E-Commerce Platform',
    outcome:  'Migrated a legacy Django monolith to Next.js 15, cutting page-load time and enabling server-side rendering.',
    desc:     'Dual-sided e-commerce platform for customers and distributors with product browsing, purchasing, inventory management, and order tracking.',
    details:  [
      'Migrated legacy Django-based system to Next.js 15 for improved performance and scalability',
      'Built responsive UI using Tailwind CSS and shadcn/ui component library',
      'Integrated Razorpay for payments and Twilio for OTP/SMS notifications',
      'Designed REST API layer with Prisma ORM and MySQL database',
    ],
    stack:    ['Next.js 15', 'React', 'Django', 'Python', 'Tailwind CSS', 'Prisma', 'MySQL', 'Razorpay API', 'Twilio'],
    github:   'https://github.com/MallaBalaRaju/buyX',
    live:     null, // ⚠️ ADD YOUR LIVE URL HERE
    date:     'Feb 2026',
    featured: true,
  },
  {
    id:       'predictor',
    title:    'Smart Resource Predictor',
    subtitle: 'AI-Based Predictive Web App',
    outcome:  'Achieved 97% forecast accuracy for energy/water usage; deployed as Flask web app with interactive dashboards.',
    desc:     'AI-based predictive system using ML models to forecast energy and water usage, exposed via a Flask web application with interactive dashboards.',
    details:  [
      'Used Decision Tree, XGBoost, and Neural Networks (TensorFlow) for multi-model ensemble predictions',
      'Developed a Flask web app with Chart.js interactive dashboards',
      'Applied feature engineering and optimisation algorithms for sustainable resource usage forecasting',
      'Stored and queried time-series data in MySQL',
    ],
    stack:    ['Python', 'Flask', 'Scikit-learn', 'XGBoost', 'TensorFlow', 'Chart.js', 'MySQL'],
    github:   'https://github.com/MallaBalaRaju', // ⚠️ UPDATE to the actual repo URL
    live:     null, // ⚠️ ADD YOUR LIVE URL HERE
    date:     'Jun 2025',
    featured: true,
  },
  {
    id:       'eda',
    title:    'EDA – E-Commerce Sales',
    subtitle: 'Exploratory Data Analysis',
    outcome:  'Uncovered top revenue drivers and regional trends across 7,200+ transactions, surfaced in a visual report.',
    desc:     'In-depth analysis of 7,200+ e-commerce transactions to identify sales, revenue, and customer behaviour trends.',
    details:  [
      'Executed data cleaning, preprocessing, and correlation analysis on 7,200+ records',
      'Designed visual dashboards and analytical reports with Matplotlib and Seaborn',
      'Uncovered key performance drivers and regional trends for stakeholder decision-making',
    ],
    stack:    ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    github:   'https://github.com/MallaBalaRaju/DATA-VISULIZATION',
    live:     null, // ⚠️ ADD YOUR LIVE URL OR NOTEBOOK LINK HERE
    date:     'Apr 2025',
    featured: false,
  },
  {
    id:       'crypto-viz',
    title:    'Top 500 Crypto Coins',
    subtitle: 'Power BI Dashboard',
    outcome:  'Delivered an interactive ETL + BI dashboard tracking market caps and price trends for 500 cryptocurrencies.',
    desc:     'Interactive Power BI dashboard to visualise and analyse market trends and performance metrics of the top 500 cryptocurrencies.',
    details:  [
      'Extracted, transformed, and loaded (ETL) cryptocurrency market data into Power BI',
      'Designed interactive charts, slicers, and KPIs to track market caps and price trends',
      'Created a comprehensive .pbix file for dynamic, self-service data exploration',
    ],
    stack:    ['Power BI', 'ETL', 'Data Analytics', 'Data Visualisation'],
    github:   'https://github.com/MallaBalaRaju/Data-Visualization-of-top-500-crypto-coins-',
    live:     null, // ⚠️ ADD PUBLIC DASHBOARD LINK IF PUBLISHED
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
    desc:  'Intensive training on algorithmic problem-solving, OOP principles, and system design; built a Smart Resource Predictor project using ML models (Decision Tree, XGBoost, Neural Networks) to forecast energy/water usage with 97% accuracy, deployed via Flask.',
  },
  {
    type:  'certificate',
    icon:  'Award',
    title: 'Cloud Computing',
    org:   'NPTEL',
    date:  'Apr 2025',
    desc:  'Comprehensive cloud computing fundamentals and architecture — IaaS, PaaS, SaaS, virtualisation, and deployment models.',
  },
  {
    type:  'certificate',
    icon:  'Award',
    title: 'ChatGPT-4 Prompt Engineering',
    org:   'Infosys Springboard',
    date:  'Aug 2025',
    desc:  'Advanced prompt engineering techniques for ChatGPT, Generative AI and LLMs.',
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
    field:    'MPC (Mathematics, Physics, Chemistry)',
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
