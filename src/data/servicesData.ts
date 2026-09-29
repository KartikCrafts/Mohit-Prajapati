export interface ServiceItem {
  id: string;
  category: 'software' | 'design' | 'data' | 'career' | 'other';
  categoryLabel: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  turnaroundTime: string;
  popular?: boolean;
}

export const CATEGORIES = [
  { id: 'all', label: 'All Services' },
  { id: 'software', label: 'Software Development' },
  { id: 'design', label: 'UI/UX & Design' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'career', label: 'Career Services' },
  { id: 'other', label: 'Delivery & Maintenance' },
] as const;

export const SERVICES_DATA: ServiceItem[] = [
  // 1. Software Development
  {
    id: 'website-development',
    category: 'software',
    categoryLabel: 'Software Development',
    title: 'Website Development',
    subtitle: 'High-speed, SEO-ready custom websites built to convert visitors into clients.',
    description: 'We develop pixel-perfect, responsive marketing websites, corporate portals, and brand sites with lightning-fast load times, semantic HTML, and dynamic CMS capabilities.',
    deliverables: [
      'Responsive design for mobile, tablet & desktop',
      'Ultra-fast Lighthouse speed score (95+)',
      'SEO structured metadata & OpenGraph setup',
      'Contact forms & CRM lead integration',
      'Content management system setup (optional)'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
    turnaroundTime: '5 - 10 Days',
    popular: true
  },
  {
    id: 'web-application',
    category: 'software',
    categoryLabel: 'Software Development',
    title: 'Web Application Development',
    subtitle: 'Scalable SaaS platforms, client portals, and bespoke web apps.',
    description: 'From interactive SaaS platforms to internal workflow portals, we engineer reliable frontend interfaces paired with resilient server-side architectures and real-time syncing.',
    deliverables: [
      'Complete frontend & backend architecture',
      'Role-based authentication & permissions (RBAC)',
      'Real-time data synchronization & state management',
      'Secure payment gateway checkout (Stripe/Razorpay)',
      'Comprehensive error handling and logging'
    ],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Express', 'Tailwind'],
    turnaroundTime: '2 - 4 Weeks',
    popular: true
  },
  {
    id: 'mobile-application',
    category: 'software',
    categoryLabel: 'Software Development',
    title: 'Mobile Application',
    subtitle: 'Native feel iOS and Android apps with smooth fluid animations.',
    description: 'Bespoke mobile applications crafted with cross-platform frameworks. We prioritize offline-first capability, fluid 60fps gesture handling, and app store deployment compliance.',
    deliverables: [
      'Cross-platform iOS and Android builds',
      'Offline data caching & local storage',
      'Push notifications & background sync',
      'Native camera, location & biometric permissions',
      'App Store & Play Store publication assistance'
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Expo'],
    turnaroundTime: '3 - 6 Weeks'
  },
  {
    id: 'api-development',
    category: 'software',
    categoryLabel: 'Software Development',
    title: 'API Development & Integration',
    subtitle: 'High-throughput RESTful & GraphQL microservices with robust security.',
    description: 'Architecting clean, well-documented APIs and connecting disparate third-party services like payment gateways, SMS/Email systems, CRMs, and webhooks.',
    deliverables: [
      'REST & GraphQL endpoint design',
      'Swagger / OpenAPI interactive documentation',
      'JWT / OAuth 2.0 secure authentication',
      'Rate limiting, caching & request validation',
      'Third-party webhook listeners & integrations'
    ],
    techStack: ['Node.js', 'Express', 'FastAPI', 'Redis', 'Postman'],
    turnaroundTime: '4 - 8 Days'
  },
  {
    id: 'database-development',
    category: 'software',
    categoryLabel: 'Software Development',
    title: 'Database Architecture & Development',
    subtitle: 'Optimized relational and NoSQL schemas for speed, integrity, and scale.',
    description: 'We structure high-performance database architectures, write optimized indexing strategies, build automated migration pipelines, and ensure zero data redundancy.',
    deliverables: [
      'Entity relationship diagrams (ERD) & schema design',
      'Query indexing & performance tuning',
      'Relational (PostgreSQL/MySQL) & Document (MongoDB) setups',
      'Automated backup procedures & connection pooling',
      'Data sanitization & integrity constraints'
    ],
    techStack: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Redis'],
    turnaroundTime: '3 - 7 Days'
  },
  {
    id: 'ai-ml-solutions',
    category: 'software',
    categoryLabel: 'Software Development',
    title: 'AI / ML Solutions & Integrations',
    subtitle: 'Intelligent automation, LLM agents, and custom machine learning pipelines.',
    description: 'Leverage state-of-the-art AI to automate repetitive workflows, build conversational assistants, implement semantic document search, or embed predictive models.',
    deliverables: [
      'Custom LLM agent workflows & prompt engineering',
      'Retrieval-Augmented Generation (RAG) over company docs',
      'Automated classification & entity extraction',
      'Computer vision & OCR document scanning',
      'API deployment for low-latency inference'
    ],
    techStack: ['Python', 'OpenAI', 'Gemini API', 'LangChain', 'HuggingFace'],
    turnaroundTime: '1 - 3 Weeks',
    popular: true
  },
  {
    id: 'custom-software',
    category: 'software',
    categoryLabel: 'Software Development',
    title: 'Custom Business Software',
    subtitle: 'Tailor-made internal tools, inventory managers, and enterprise automations.',
    description: 'Commercial software often forces you to change your workflow. We build custom software tailored exactly to your internal operations, saving hundreds of manual hours.',
    deliverables: [
      'Tailored ERP, CRM, or inventory management',
      'Automated PDF invoice & report generation',
      'Multi-branch or multi-user access levels',
      'Live audit trails & activity logging',
      'Full source code ownership & handover'
    ],
    techStack: ['TypeScript', 'Node.js', 'React', 'Docker'],
    turnaroundTime: '2 - 5 Weeks'
  },

  // 2. Design
  {
    id: 'ui-ux-design',
    category: 'design',
    categoryLabel: 'Design',
    title: 'UI / UX Design',
    subtitle: 'Human-centric user journeys, high-fidelity wireframes, and prototypes.',
    description: 'We convert ambiguous ideas into intuitive, conversion-focused user interfaces through rigorous user journey mapping, information architecture, and clickable prototypes.',
    deliverables: [
      'User journey mapping & task flows',
      'Low-fidelity wireframing & structural layouts',
      'Interactive Figma prototypes for user testing',
      'Component design systems with auto-layout',
      'Usability audits of existing platforms'
    ],
    techStack: ['Figma', 'FigJam', 'Whimsical', 'Design Tokens'],
    turnaroundTime: '1 - 2 Weeks',
    popular: true
  },
  {
    id: 'website-ui',
    category: 'design',
    categoryLabel: 'Design',
    title: 'Website UI Design',
    subtitle: 'Modern, high-converting desktop & mobile responsive web layouts.',
    description: 'Bespoke web aesthetics that reflect your brand identity, establish immediate authority, and guide visitors smoothly toward purchasing or scheduling a call.',
    deliverables: [
      'Complete desktop & mobile artboards in Figma',
      'Custom typographic scale & color harmonies',
      'Asset export pack (SVG, PNG, web-ready illustrations)',
      'Developer handoff specs with exact CSS properties',
      'Interactive hover and active state mockups'
    ],
    techStack: ['Figma', 'Adobe Photoshop', 'Illustrator'],
    turnaroundTime: '4 - 8 Days'
  },
  {
    id: 'mobile-app-ui',
    category: 'design',
    categoryLabel: 'Design',
    title: 'Mobile App UI Design',
    subtitle: 'Clean, native-standard iOS and Android interface screens.',
    description: 'Pixel-perfect mobile application screens that comply with Apple Human Interface Guidelines and Google Material Design 3, focusing on touch target ergonomics.',
    deliverables: [
      'Complete screen flow (Splash, Auth, Home, Detail, Settings)',
      'Dark mode and light mode adaptations',
      'Haptic and micro-interaction visual specs',
      'Production-ready export assets for mobile engineers',
      'Reusable UI kit component library'
    ],
    techStack: ['Figma', 'iOS Guidelines', 'Material 3'],
    turnaroundTime: '1 - 2 Weeks'
  },
  {
    id: 'logo-design',
    category: 'design',
    categoryLabel: 'Design',
    title: 'Logo Design',
    subtitle: 'Memorable, timeless vector marks that capture your company identity.',
    description: 'Distinctive brand marks designed for legibility at any scale — from a tiny 16px browser favicon to high-resolution billboards and embroidery.',
    deliverables: [
      '3 Distinct creative concepts to choose from',
      'Unlimited revisions on selected concept',
      'Vector master files (AI, EPS, SVG, PDF)',
      'High-resolution transparent PNGs for web & print',
      'Monochrome, dark, and light variant lockups'
    ],
    techStack: ['Adobe Illustrator', 'Vector Math', 'Figma'],
    turnaroundTime: '3 - 5 Days'
  },
  {
    id: 'brand-identity',
    category: 'design',
    categoryLabel: 'Design',
    title: 'Brand Identity & Guidelines',
    subtitle: 'Complete visual identity system, color tokens, and corporate stationery.',
    description: 'A cohesive brand universe that sets you apart from competitors. Includes typography selection, primary & secondary palettes, iconography, and business stationery.',
    deliverables: [
      'Comprehensive Brand Style Guidebook (PDF)',
      'Primary, secondary & accent color palette specifications',
      'Font pairings with licensing guidance',
      'Business cards, letterhead, and email signature designs',
      'Social media profile kits (avatars, banners)'
    ],
    techStack: ['Illustrator', 'InDesign', 'Figma'],
    turnaroundTime: '1 - 2 Weeks'
  },
  {
    id: 'ppt-presentations',
    category: 'design',
    categoryLabel: 'Design',
    title: 'PPT & Pitch Deck Design',
    subtitle: 'High-impact investor pitch decks and corporate presentations.',
    description: 'Transform cluttered text bullet points into compelling visual narratives that secure investor funding, impress corporate stakeholders, or win client pitches.',
    deliverables: [
      '10-25 Custom master slides with editable templates',
      'Infographics, traction graphs & timeline visualizations',
      'Fully editable PowerPoint (.pptx) & Google Slides files',
      'High-resolution PDF presentation export',
      'Slide animations & smooth transitions'
    ],
    techStack: ['PowerPoint', 'Google Slides', 'Keynote', 'Illustrator'],
    turnaroundTime: '3 - 6 Days',
    popular: true
  },
  {
    id: 'social-media-designs',
    category: 'design',
    categoryLabel: 'Design',
    title: 'Social Media Designs',
    subtitle: 'Consistent, eye-catching creatives for LinkedIn, Instagram & X.',
    description: 'Boost engagement with polished post templates, educational carousel decks, and promotional graphics formatted for high-performance organic reach.',
    deliverables: [
      'Reusable Canva / Figma templates for your team',
      'Custom carousel slide decks for LinkedIn & Instagram',
      'High-resolution announcement and promo graphics',
      'Profile banners, story highlights & header artwork',
      'Exported in optimal dimensions for every platform'
    ],
    techStack: ['Figma', 'Canva Pro', 'Photoshop'],
    turnaroundTime: '2 - 4 Days'
  },

  // 3. Data & Analytics
  {
    id: 'excel-dashboard',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    title: 'Excel Dashboard & Automation',
    subtitle: 'Interactive spreadsheets, automated Power Query workflows, and KPI hubs.',
    description: 'Turn chaotic, messy spreadsheets into dynamic, automated executive dashboards with dynamic slicers, automated refresh triggers, and bulletproof formulas.',
    deliverables: [
      'Interactive executive KPI dashboard with dynamic slicers',
      'Automated Power Query data transformation & ETL',
      'Advanced formula models (INDEX/MATCH, XLOOKUP, Dynamic Arrays)',
      'VBA / Macro automation for 1-click reporting',
      'Password protection & data validation controls'
    ],
    techStack: ['Microsoft Excel', 'Power Query', 'VBA / Macros', 'DAX'],
    turnaroundTime: '3 - 5 Days',
    popular: true
  },
  {
    id: 'bi-dashboard',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    title: 'Power BI Dashboard',
    subtitle: 'Enterprise-grade Power BI reporting connected directly to your data sources.',
    description: 'Harness the full power of Microsoft Power BI with custom DAX calculations, dimensional star-schema modeling, and automated cloud scheduled refresh.',
    deliverables: [
      'End-to-end Power BI report (.pbix) with drill-through views',
      'Custom DAX measures for YTD, YoY, and margin analysis',
      'Star schema data modeling & relationship structuring',
      'Row-level security (RLS) setup for multi-department access',
      'Automated scheduled refresh configuration'
    ],
    techStack: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Azure'],
    turnaroundTime: '5 - 10 Days',
    popular: true
  },
  {
    id: 'tableau-dashboard',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    title: 'Tableau Dashboard',
    subtitle: 'Visually compelling business intelligence dashboards with advanced calculations.',
    description: 'Transform complex enterprise data into elegant visual stories. We design Tableau workbooks with interactive parameters, Level of Detail (LOD) expressions, and heatmaps.',
    deliverables: [
      'Interactive Tableau workbook (.twbx) and Server publishing',
      'Advanced calculated fields & Level of Detail (LOD) formulas',
      'Interactive filter actions, parameters, and drill-downs',
      'Mobile-optimized dashboard layouts',
      'User guide documentation on maintaining the workbook'
    ],
    techStack: ['Tableau Desktop', 'Tableau Server', 'SQL', 'Prep Builder'],
    turnaroundTime: '5 - 10 Days'
  },
  {
    id: 'data-cleaning',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    title: 'Data Cleaning & Hygiene',
    subtitle: 'Rectifying dirty, duplicate, missing, or inconsistent corporate datasets.',
    description: 'Reliable business decisions require clean data. We clean, de-duplicate, standardize, and format messy datasets from CSVs, CRM exports, and legacy databases.',
    deliverables: [
      'Comprehensive data profiling & anomaly diagnosis report',
      'Deduplication, fuzzy matching, and typo correction',
      'Standardization of dates, addresses, phone numbers & units',
      'Automated Python/PowerQuery scripts for future imports',
      'Pristine cleaned output dataset in CSV/Excel/SQL'
    ],
    techStack: ['Python', 'Pandas', 'OpenRefine', 'SQL', 'Excel'],
    turnaroundTime: '2 - 4 Days'
  },
  {
    id: 'data-analysis',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    title: 'Data Analysis & Insights',
    subtitle: 'In-depth exploratory analysis discovering hidden revenue trends and opportunities.',
    description: 'We dive deep into your transactional and customer data to uncover what drives customer churn, which products yield highest margins, and where operational bottlenecks occur.',
    deliverables: [
      'Exploratory data analysis (EDA) with statistical charts',
      'Customer cohort retention & lifetime value (LTV) analysis',
      'Product performance, cross-sell & basket analysis',
      'Executive summary presentation of key takeaways',
      'Clear, actionable business recommendations'
    ],
    techStack: ['Python', 'Jupyter', 'Pandas', 'Seaborn', 'SciPy'],
    turnaroundTime: '4 - 7 Days'
  },
  {
    id: 'sql-projects',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    title: 'SQL Projects & Query Optimization',
    subtitle: 'Complex queries, stored procedures, window functions, and database views.',
    description: 'Whether you need complex analytical queries, stored procedures, or optimization for queries taking minutes to run, we write clean, performant SQL code.',
    deliverables: [
      'Complex multi-table JOINs, subqueries, and CTEs',
      'Window functions (ROW_NUMBER, RANK, LAG/LEAD, NTILE)',
      'Stored procedures, triggers, and materialized views',
      'Query execution plan review and index tuning',
      'Database migration scripts & database seeding'
    ],
    techStack: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'Snowflake'],
    turnaroundTime: '3 - 6 Days'
  },
  {
    id: 'python-projects',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    title: 'Python Projects & Automation',
    subtitle: 'Custom web scrapers, data pipelines, automation bots, and scripts.',
    description: 'Automate repetitive workflows, scrape structured data from web portals, process thousands of files automatically, or build custom data processing pipelines.',
    deliverables: [
      'Custom web scraping scripts (BeautifulSoup / Selenium / Playwright)',
      'Automated batch file processing & PDF conversion',
      'Data transformation & ETL pipelines with Pandas',
      'Automated email sending & report dispatch bots',
      'Clean, documented Python code with virtual environment setup'
    ],
    techStack: ['Python 3', 'Pandas', 'Selenium', 'BeautifulSoup', 'FastAPI'],
    turnaroundTime: '3 - 7 Days'
  },
  {
    id: 'business-reports',
    category: 'data',
    categoryLabel: 'Data & Analytics',
    title: 'Business & Management Reports',
    subtitle: 'C-Suite ready weekly/monthly financial, sales, and operational summaries.',
    description: 'Turn raw numbers into structured executive reports with clear narrative commentary, trend graphs, variance analysis, and strategic recommendations.',
    deliverables: [
      'Monthly/Quarterly Management Information System (MIS) reports',
      'Revenue variance, burn rate, and profit margin analysis',
      'Visual commentary slide deck ready for board meetings',
      'Automated templates for recurring generation',
      'Executive summary highlight sheet'
    ],
    techStack: ['Excel', 'Power BI', 'Word', 'PowerPoint'],
    turnaroundTime: '3 - 5 Days'
  },

  // 4. Career Services
  {
    id: 'resume-cv',
    category: 'career',
    categoryLabel: 'Career Services',
    title: 'Resume & CV Crafting',
    subtitle: 'Impact-driven resumes that highlight your achievements and leadership.',
    description: 'Stop getting lost in the crowd. We rewrite and format your resume with high-impact action verbs, quantifiable metrics, and modern clean typography that catches recruiter eyes.',
    deliverables: [
      'Comprehensive resume rewrite emphasizing concrete results',
      'Clean modern layout tailored to your industry standards',
      'Metrics-first bullet points (XYZ formula: Accomplished [X] as measured by [Y] by doing [Z])',
      'Editable Word (.docx) and print-ready PDF formats',
      '2 Rounds of personalized revisions'
    ],
    techStack: ['Resume Strategy', 'Typography', 'Content Architecture'],
    turnaroundTime: '2 - 4 Days',
    popular: true
  },
  {
    id: 'ats-resume',
    category: 'career',
    categoryLabel: 'Career Services',
    title: 'ATS-Optimized Resume',
    subtitle: 'Engineered to pass Applicant Tracking Systems (Workday, Taleo, Greenhouse).',
    description: 'Over 75% of resumes are filtered out before a human recruiter even sees them. We format and optimize your resume for flawless ATS parsing and high keyword match scores.',
    deliverables: [
      'ATS-compliant single-column clean formatting',
      'Keyword enrichment matching target job descriptions',
      'ATS score audit and simulation verification report',
      'Clean typography with zero table/text-box parsing glitches',
      'Both DOCX & PDF deliverables'
    ],
    techStack: ['ATS Systems', 'Keyword Optimization', 'Resume Parsing'],
    turnaroundTime: '2 - 3 Days',
    popular: true
  },
  {
    id: 'cover-letter',
    category: 'career',
    categoryLabel: 'Career Services',
    title: 'Cover Letter (CL)',
    subtitle: 'Persuasive, tailored cover letters that articulate your unique value proposition.',
    description: 'A generic cover letter gets ignored. We write captivating, bespoke letters that connect your background directly to the company mission, pain points, and role requirements.',
    deliverables: [
      'Custom narrative matching the specific company & role',
      'Strong opening hook and compelling closing call-to-action',
      'Standardized matching header design matching your resume',
      'Modular paragraph structure adaptable for future applications',
      'Editable Word (.docx) & PDF files'
    ],
    techStack: ['Copywriting', 'Storytelling', 'Executive Positioning'],
    turnaroundTime: '1 - 2 Days'
  },
  {
    id: 'linkedin-profile',
    category: 'career',
    categoryLabel: 'Career Services',
    title: 'LinkedIn Profile Optimization',
    subtitle: 'Turn your LinkedIn into a 24/7 inbound recruiter and client magnet.',
    description: 'Maximize your visibility in LinkedIn recruiter search results with an optimized keyword-rich headline, compelling "About" story, structured experience bullets, and custom banner.',
    deliverables: [
      'High-CTR headline with targeted recruiter keywords',
      'Engaging first-person "About / Summary" section',
      'Achievement-oriented experience section bullet points',
      'Skills section curation for algorithm endorsement matching',
      'Custom branded LinkedIn background banner graphic'
    ],
    techStack: ['LinkedIn SEO', 'Personal Branding', 'Graphic Design'],
    turnaroundTime: '2 - 3 Days',
    popular: true
  },
  {
    id: 'portfolio-website',
    category: 'career',
    categoryLabel: 'Career Services',
    title: 'Portfolio Website',
    subtitle: 'Bespoke personal website to showcase your code, designs, or analysis.',
    description: 'Stand out from thousands of applicants with a lightning-fast custom portfolio site featuring your case studies, interactive project demos, downloadable resume, and contact links.',
    deliverables: [
      'Custom responsive design with modern dark/light mode',
      'Interactive project showcase cards with live preview links',
      'Direct resume download button & contact inquiry form',
      'Custom domain setup & free cloud hosting configuration',
      'Full source code repository handover'
    ],
    techStack: ['React', 'Next.js', 'Tailwind', 'Vercel / GitHub Pages'],
    turnaroundTime: '4 - 7 Days',
    popular: true
  },
  {
    id: 'job-application-assistance',
    category: 'career',
    categoryLabel: 'Career Services',
    title: 'Job Application Assistance',
    subtitle: 'End-to-end guidance, company targeting, and cold outreach strategy.',
    description: 'Navigate the competitive job market with strategic assistance: building targeted company lists, crafting cold outreach messages to hiring managers, and tracking applications.',
    deliverables: [
      'Curated target company list matching your career goals',
      'Cold messaging templates for LinkedIn and email outreach',
      'Personalized job application tracker spreadsheet',
      'Guidance on salary negotiation and offer evaluation',
      'Weekly check-in calls and strategy adjustments'
    ],
    techStack: ['Career Strategy', 'Cold Email', 'Application Tracking'],
    turnaroundTime: '1 - 3 Weeks'
  },
  {
    id: 'interview-preparation',
    category: 'career',
    categoryLabel: 'Career Services',
    title: 'Interview Preparation & Mock Sessions',
    subtitle: '1-on-1 coaching for technical, behavioral, and managerial interviews.',
    description: 'Build confidence with realistic 1-on-1 mock interviews. Master the STAR method for behavioral questions and sharpen technical problem-solving clarity.',
    deliverables: [
      '1-on-1 60-minute live mock interview session',
      'Detailed feedback report highlighting strengths & gaps',
      'Frameworks for answering "Tell me about yourself" & behavioral questions',
      'Salary negotiation tactics and questions to ask the interviewer',
      'Session recording and reference answer cheat sheet'
    ],
    techStack: ['STAR Method', 'Technical Coaching', 'Mock Interviews'],
    turnaroundTime: 'Scheduled On-Demand'
  },

  // 5. Other / Delivery & Support
  {
    id: 'technical-documentation',
    category: 'other',
    categoryLabel: 'Delivery & Maintenance',
    title: 'Documentation & Technical Writing',
    subtitle: 'Comprehensive API docs, system architecture manuals, and developer onboarding.',
    description: 'Ensure your software is easily maintainable and adoptable with crystal-clear developer documentation, architectural flowcharts, and user guides.',
    deliverables: [
      'API reference documentation with code request/response snippets',
      'System architecture diagrams and data flowcharts',
      'Developer setup and deployment step-by-step guides',
      'End-user manuals and FAQs',
      'Exported in Markdown, Docusaurus, or GitBook format'
    ],
    techStack: ['Markdown', 'Mermaid.js', 'Postman', 'GitBook'],
    turnaroundTime: '3 - 6 Days'
  },
  {
    id: 'research-feasibility',
    category: 'other',
    categoryLabel: 'Delivery & Maintenance',
    title: 'Research & Feasibility Studies',
    subtitle: 'Thorough technical and market feasibility before committing development budget.',
    description: 'Validate technical possibilities, estimate infrastructure costs, evaluate open-source versus proprietary tooling, and identify potential architectural bottlenecks early.',
    deliverables: [
      'Detailed technical feasibility report with risk assessment',
      'Cost estimation and cloud infrastructure projections',
      'Technology stack comparison matrix (Pros vs Cons)',
      'Proof-of-concept (PoC) code demonstration if needed',
      'Executive summary presentation for stakeholders'
    ],
    techStack: ['Market Analysis', 'Architecture', 'Benchmarking'],
    turnaroundTime: '1 - 2 Weeks'
  },
  {
    id: 'project-reports',
    category: 'other',
    categoryLabel: 'Delivery & Maintenance',
    title: 'Project Reports & Case Studies',
    subtitle: 'Structured, detailed project documentation for corporate or academic review.',
    description: 'We draft structured, formal project reports detailing problem statement, methodology, architectural design, implementation details, testing results, and future enhancements.',
    deliverables: [
      'Complete IEEE / Corporate standard formatted report (30-80 pages)',
      'System diagrams, database schemas, and data flow diagrams (DFD)',
      'Testing methodology and test case execution tables',
      'Executive abstract and formal conclusion',
      'Fully editable DOCX and publication-ready PDF'
    ],
    techStack: ['Technical Writing', 'LaTeX', 'Word', 'Visio'],
    turnaroundTime: '4 - 8 Days'
  },
  {
    id: 'college-projects',
    category: 'other',
    categoryLabel: 'Delivery & Maintenance',
    title: 'College Projects & Final Year Capstone',
    subtitle: 'End-to-end guidance, clean source code, synopsis, and viva presentation prep.',
    description: 'Get complete mentorship for your final year engineering/CS/IT projects. Clean, well-commented code, database scripts, detailed report, and 1-on-1 viva explanation.',
    deliverables: [
      'Complete working source code with clean directory architecture',
      'Database scripts and sample data seeding',
      'Detailed project synopsis and final report',
      'PowerPoint presentation for final project submission',
      '1-on-1 walkthrough explaining how every line of code works'
    ],
    techStack: ['Python', 'React', 'Node.js', 'Machine Learning', 'SQL'],
    turnaroundTime: '1 - 2 Weeks',
    popular: true
  },
  {
    id: 'mvp-prototype',
    category: 'other',
    categoryLabel: 'Delivery & Maintenance',
    title: 'MVP / Fast Prototyping',
    subtitle: 'From napkin idea to working clickable MVP in under 14 days.',
    description: 'Speed to market is everything. We strip away the unnecessary fluff to build a functional, beautiful Minimum Viable Product that you can demo to investors or early beta testers.',
    deliverables: [
      'Core user journey built and deployed live on the web',
      'Functional authentication and primary database workflows',
      'Feedback collection widget and user analytics',
      'Production cloud deployment URL ready to share',
      'Post-launch iteration backlog for Version 2'
    ],
    techStack: ['Next.js', 'Supabase', 'Tailwind', 'Vercel'],
    turnaroundTime: '10 - 14 Days',
    popular: true
  },
  {
    id: 'cloud-deployment',
    category: 'other',
    categoryLabel: 'Delivery & Maintenance',
    title: 'Deployment & Cloud Infrastructure',
    subtitle: 'Zero-downtime CI/CD pipelines, SSL certificates, and custom domains.',
    description: 'We take your application from localhost to high-availability production cloud environments with automated GitHub Actions, containerization, and monitoring.',
    deliverables: [
      'Docker containerization and compose scripts',
      'Automated GitHub Actions CI/CD deployment pipeline',
      'Custom domain configuration, DNS records & SSL certificates',
      'Environment variable security and secrets management',
      'Basic uptime monitoring and alert hooks'
    ],
    techStack: ['Docker', 'AWS', 'GCP', 'Vercel', 'GitHub Actions'],
    turnaroundTime: '2 - 4 Days'
  },
  {
    id: 'ongoing-maintenance',
    category: 'other',
    categoryLabel: 'Delivery & Maintenance',
    title: 'Maintenance & Technical Support',
    subtitle: 'Dedicated retainer support, bug fixing, security audits, and version upgrades.',
    description: 'Keep your digital products running smoothly without worrying about server crashes or outdated libraries. We provide scheduled backups, patch updates, and rapid bug fixes.',
    deliverables: [
      'Regular dependency updates and security vulnerability patching',
      'Daily automated database backups and recovery testing',
      'Priority bug fixes and minor feature enhancements',
      'Monthly performance and uptime review report',
      'Direct WhatsApp and email priority support channel'
    ],
    techStack: ['Monitoring', 'Bug Triage', 'Security', 'DevOps'],
    turnaroundTime: 'Monthly Retainer'
  }
];
