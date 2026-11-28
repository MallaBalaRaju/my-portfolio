"""Static portfolio profile, dual resumes, skills, experience, education, and navigation."""

# TODO: Update `github_url` for "smart-resource-predictor" in
# `backend/portfolio/fixtures/initial_data.json` (or via `/admin/`) once its
# dedicated repository URL is ready.

PERSONAL_DATA = {
    "name": "Malla Bala Raju",
    "short_name": "MBR",
    "title": "Full-Stack & DevOps Engineer",
    "subtitle": (
        "B.Tech CSE student at Lovely Professional University (2023–2027). "
        "I build web applications with Django, FastAPI, and Next.js, and deploy them "
        "with Docker, Kubernetes, Terraform, and CI/CD."
    ),
    "email": "mallabalaraju7@gmail.com",
    "phone": "+91 9989273051",
    "location": "Visakhapatnam / Phagwara, India",
    "availability_label": "Open to DevOps, Cloud & Full-Stack internships",
    "available": True,
    "hero_metrics": [
        {"label": "Focus", "value": "DevOps & Full-Stack"},
        {"label": "Core Infra", "value": "Docker · K8s · Terraform"},
        {"label": "Backends", "value": "Django · FastAPI · Node.js"},
    ],
}

RESUMES_DATA = [
    {
        "slug": "devops",
        "label": "DevOps & Cloud",
        "short_label": "DevOps / Cloud CV",
        "focus": "Docker, Kubernetes, Terraform, AWS, CI/CD, Linux",
        "filename": "Malla_Bala_Raju_DevOps_Resume.pdf",
        "static_path": "portfolio/files/Malla_Bala_Raju_DevOps_Resume.pdf",
    },
    {
        "slug": "fullstack",
        "label": "Full-Stack & Data",
        "short_label": "Full-Stack / Data CV",
        "focus": "Django, Next.js, FastAPI, MongoDB, MySQL, Python ML",
        "filename": "Malla_Bala_Raju_FullStack_Resume.pdf",
        "static_path": "portfolio/files/Malla_Bala_Raju_FullStack_Resume.pdf",
    },
]

SOCIALS_DATA = {
    "github": "https://github.com/MallaBalaRaju",
    "linkedin": "https://www.linkedin.com/in/malla-balaraju/",
    "email": "mailto:mallabalaraju7@gmail.com",
    "phone": "tel:+919989273051",
}

ABOUT_DATA = {
    "paragraphs": [
        (
            "I'm a Computer Science Engineering student at Lovely Professional University "
            "(Minor in Data Science) focused on DevOps, Cloud infrastructure, and Full-Stack "
            "engineering. I enjoy taking software from local code to repeatable containerised "
            "deployments."
        ),
        (
            "Across recent builds, I have provisioned AWS infrastructure with Terraform, "
            "orchestrated multi-service apps on Docker and Kubernetes with Prometheus/Grafana "
            "monitoring, built Django and FastAPI REST backends, and shipped Next.js and "
            "TypeScript interfaces."
        ),
        (
            "Alongside backend and cloud work, I use Python, MongoDB, MySQL, and scikit-learn "
            "/ XGBoost for data validation, anomaly detection, and analytical dashboards."
        ),
    ],
    "highlights": [
        {
            "label": "DevOps & Cloud",
            "desc": "Docker, Kubernetes, Terraform, Jenkins, GitHub Actions, Prometheus & Grafana",
            "icon": "Cloud",
        },
        {
            "label": "Full-Stack Engineering",
            "desc": "Django, FastAPI, Next.js 15, Node.js, TypeScript, MySQL & MongoDB",
            "icon": "Code2",
        },
        {
            "label": "Data & Applied ML",
            "desc": "Python, Pandas, Scikit-learn, XGBoost, TensorFlow & Power BI",
            "icon": "Database",
        },
    ],
}

SKILLS_DATA = [
    {
        "category": "Cloud & DevOps",
        "items": [
            "Docker & Docker Compose",
            "Kubernetes (Minikube)",
            "Terraform",
            "AWS (EC2 / ECR)",
            "Jenkins",
            "GitHub Actions",
            "Linux (Ubuntu)",
            "Nginx",
            "Prometheus & Grafana",
        ],
    },
    {
        "category": "Backend & APIs",
        "items": [
            "Django",
            "FastAPI",
            "Node.js & Express",
            "Flask",
            "REST APIs",
            "MySQL",
            "MongoDB",
            "SQLite",
            "Prisma",
        ],
    },
    {
        "category": "Frontend",
        "items": [
            "Next.js 15",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "JavaScript (ES2024)",
            "Chart.js",
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
            "Power BI",
            "Matplotlib & Seaborn",
        ],
    },
    {
        "category": "Languages & Tooling",
        "items": ["Python", "Java", "C", "SQL", "Git & GitHub", "Postman", "pytest"],
    },
]

EXPERIENCE_DATA = [
    {
        "type": "certificate",
        "icon": "Award",
        "title": "Full Stack Developer Course",
        "org": "Simplilearn",
        "date": "May 2026",
        "desc": "End-to-end full-stack web development covering frontend frameworks, backend APIs, and database integration.",
    },
    {
        "type": "certificate",
        "icon": "Award",
        "title": "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        "org": "Oracle",
        "date": "Apr 2026",
        "desc": "Foundational concepts in AI, machine learning, deep learning, and generative AI workloads on Oracle Cloud Infrastructure.",
    },
    {
        "type": "certificate",
        "icon": "Award",
        "title": "Oracle Data Platform 2025 Certified Foundations Associate",
        "org": "Oracle",
        "date": "Apr 2026",
        "desc": "Core cloud data platform architecture, storage, analytics, and database services on Oracle Cloud.",
    },
    {
        "type": "training",
        "icon": "Briefcase",
        "title": "Smart Resource Management Application Development",
        "org": "Lovely Professional University",
        "date": "Jun 2025 – Jul 2025",
        "desc": (
            "Summer training building a smart resource conservation web application with "
            "Python, Scikit-learn, Flask, and MySQL to forecast household energy and water usage."
        ),
    },
    {
        "type": "certificate",
        "icon": "Award",
        "title": "Cloud Computing",
        "org": "NPTEL",
        "date": "Apr 2025",
        "desc": (
            "Cloud computing architecture, IaaS/PaaS/SaaS models, virtualisation, "
            "and cloud deployment fundamentals."
        ),
    },
    {
        "type": "certificate",
        "icon": "Award",
        "title": "ChatGPT-4 Prompt Engineering: Generative AI & LLM",
        "org": "Infosys Springboard",
        "date": "Aug 2025",
        "desc": "Structured prompt design and evaluation patterns for LLM-assisted workflows.",
    },
    {
        "type": "certificate",
        "icon": "BookOpen",
        "title": "Computer Communications",
        "org": "Coursera",
        "date": "Nov 2024",
        "desc": "Networking layers, TCP/IP fundamentals, routing, and transport protocols.",
    },
    {
        "type": "certificate",
        "icon": "BookOpen",
        "title": "Introduction to Hardware and Operating Systems",
        "org": "Coursera",
        "date": "Sep 2024",
        "desc": "Computer hardware architecture, OS process management, memory, and storage fundamentals.",
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
        "grade": "CGPA: 6.9",
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
    {"label": "Experience", "href": "#experience"},
    {"label": "Education", "href": "#education"},
    {"label": "Contact", "href": "#contact"},
]
