"""Static portfolio profile, skills, experience, education, and navigation content."""

# TODO: Update `github_url` for pk=2 ("smart-resource-predictor") in
# `backend/portfolio/fixtures/initial_data.json` (or via `/admin/`) once its
# dedicated repository URL is ready.

PERSONAL_DATA = {
    "name": "Malla Bala Raju",
    "short_name": "MBR",
    "title": "Full-Stack Developer & DevOps/Cloud Enthusiast",
    "subtitle": (
        "Building and deploying scalable web applications — from React frontends "
        "to cloud-hosted backends — with a secondary strength in data science."
    ),
    "email": "mallabalaraju7@gmail.com",
    "phone": "+91 9989273051",
    "location": "India",
    "available": True,
}

SOCIALS_DATA = {
    "github": "https://github.com/MallaBalaRaju",
    "github_repos": "https://github.com/MallaBalaRaju?tab=repositories",
    "linkedin": "https://www.linkedin.com/in/malla-balaraju/",
    "email": "mailto:mallabalaraju7@gmail.com",
    "phone": "tel:+919989273051",
    "resume_static_path": "portfolio/files/Malla_Bala_Raju_Resume.pdf",
}

ABOUT_DATA = {
    "paragraphs": [
        (
            "I'm a Computer Science Engineering student at Lovely Professional University "
            "(Minor in Data Science) targeting Full-Stack and DevOps/Cloud roles. I enjoy "
            "building production-ready applications — writing clean React/Next.js frontends, "
            "robust Django/Node.js backends, and wiring them together with CI/CD pipelines "
            "and containerised deployments."
        ),
        (
            "I've worked across the full delivery lifecycle: designing REST APIs, integrating "
            "payment gateways (Razorpay) and messaging services (Twilio), deploying to cloud "
            "environments, and automating builds with GitHub Actions. My NPTEL Cloud Computing "
            "certification and hands-on Docker usage back up that interest."
        ),
        (
            "On the data side I use Python, Pandas, and Power BI to turn raw datasets into "
            "actionable insights — a skill that complements my backend work and helps me "
            "build smarter applications."
        ),
    ],
    "highlights": [
        {"label": "Full-Stack Dev", "desc": "Next.js, React, Node.js, Django", "icon": "Code2"},
        {
            "label": "DevOps / Cloud",
            "desc": "Docker, CI/CD, GitHub Actions, Cloud Computing (NPTEL)",
            "icon": "Cloud",
        },
        {"label": "Data Science", "desc": "Python, Pandas, Power BI, ML", "icon": "Database"},
    ],
}

SKILLS_DATA = [
    {
        "category": "Cloud & DevOps",
        "items": [
            "Docker",
            "GitHub Actions (CI/CD)",
            "Cloud Computing (NPTEL)",
            "Git & GitHub",
            "Vercel / GitHub Pages",
        ],
    },
    {
        "category": "Frontend",
        "items": [
            "React",
            "Next.js 15",
            "Tailwind CSS",
            "shadcn/ui",
            "JavaScript (ES2024)",
            "Chart.js",
        ],
    },
    {
        "category": "Backend",
        "items": [
            "Django",
            "Node.js",
            "Flask",
            "REST APIs",
            "Prisma",
            "MySQL",
            "Razorpay API",
            "Twilio API",
        ],
    },
    {
        "category": "Data Science & ML",
        "items": [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "XGBoost",
            "TensorFlow",
            "Matplotlib",
            "Seaborn",
            "Power BI",
        ],
    },
    {
        "category": "Languages & Tools",
        "items": ["C", "Java", "SQL", "VS Code", "Jupyter Notebook", "Postman"],
    },
]

EXPERIENCE_DATA = [
    {
        "type": "training",
        "icon": "Briefcase",
        "title": "Data Structures & Algorithms Training",
        "org": "Lovely Professional University",
        "date": "Jun 2025 – Jul 2025",
        "desc": (
            "Intensive training on algorithmic problem-solving, OOP principles, and system "
            "design; built a Smart Resource Predictor project using ML models (Decision Tree, "
            "XGBoost, Neural Networks) to forecast energy/water usage with 97% accuracy, "
            "deployed via Flask."
        ),
    },
    {
        "type": "certificate",
        "icon": "Award",
        "title": "Cloud Computing",
        "org": "NPTEL",
        "date": "Apr 2025",
        "desc": (
            "Comprehensive cloud computing fundamentals and architecture — IaaS, PaaS, SaaS, "
            "virtualisation, and deployment models."
        ),
    },
    {
        "type": "certificate",
        "icon": "Award",
        "title": "ChatGPT-4 Prompt Engineering",
        "org": "Infosys Springboard",
        "date": "Aug 2025",
        "desc": "Advanced prompt engineering techniques for ChatGPT, Generative AI and LLMs.",
    },
    {
        "type": "certificate",
        "icon": "Award",
        "title": "Generative AI Apps with No-Code Tools",
        "org": "Infosys Springboard",
        "date": "Aug 2025",
        "desc": "Building generative AI applications and solutions using no-code platforms.",
    },
    {
        "type": "certificate",
        "icon": "BookOpen",
        "title": "Computer Communications",
        "org": "Coursera",
        "date": "Nov 2024",
        "desc": "Networking fundamentals and computer communication protocols.",
    },
    {
        "type": "activity",
        "icon": "Award",
        "title": "Community Development Project",
        "org": "NGO Supervised",
        "date": "Jun 2024",
        "desc": "Completed a 40-hour community development project under NGO supervision.",
    },
]

EDUCATION_DATA = [
    {
        "degree": "Bachelor of Technology",
        "field": "Computer Science & Engineering",
        "school": "Lovely Professional University",
        "location": "Phagwara, Punjab",
        "period": "Aug 2023 – Aug 2027",
        "grade": "CGPA: 6.6",
        "highlight": "Minor in Data Science",
    },
    {
        "degree": "Intermediate (12th)",
        "field": "MPC (Mathematics, Physics, Chemistry)",
        "school": "Narayana Junior College",
        "location": "Visakhapatnam, AP",
        "period": "Apr 2022 – Mar 2023",
        "grade": "86.6%",
        "highlight": "",
    },
    {
        "degree": "Matriculation (10th)",
        "field": "",
        "school": "Narayana High School",
        "location": "Visakhapatnam, AP",
        "period": "Apr 2020 – Mar 2021",
        "grade": "CGPA: 10.0",
        "highlight": "",
    },
]

NAV_LINKS = [
    {"label": "About", "href": "#about"},
    {"label": "Skills", "href": "#skills"},
    {"label": "Projects", "href": "#projects"},
    {"label": "Repos", "href": "#repos"},
    {"label": "Experience", "href": "#experience"},
    {"label": "Education", "href": "#education"},
    {"label": "Contact", "href": "#contact"},
]
