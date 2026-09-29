export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  results: { label: string; value: string }[];
  image: string;
  tags: string[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'b2b-saas-platform',
    title: 'Enterprise Workflow & Operations Platform',
    category: 'Software Development',
    client: 'LogixFlow Logistics',
    summary: 'Architected and built a high-performance custom web platform managing multi-depot fleet dispatches, automated invoicing, and live driver tracking across 4 regions.',
    results: [
      { label: 'Manual dispatch time reduced by', value: '74%' },
      { label: 'Weekly administrative hours saved', value: '28 hrs' },
      { label: 'System uptime over 12 months', value: '99.98%' }
    ],
    image: '/images/hero_workspace_consulting_1790611829034.jpg',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind']
  },
  {
    id: 'powerbi-executive-analytics',
    title: 'Executive Multi-Channel Financial Dashboard',
    category: 'Data & Analytics',
    client: 'Acuity Retail Ventures',
    summary: 'Consolidated data from 5 disparate point-of-sale systems and Shopify into an automated Power BI & SQL reporting hub with automated daily refresh and margin analysis.',
    results: [
      { label: 'Executive decision turnaround', value: '3x Faster' },
      { label: 'Manual spreadsheet reporting eliminated', value: '18 hrs/wk' },
      { label: 'Gross margin leakage identified', value: '$42,000+' }
    ],
    image: '/images/analytics_dashboard_preview_1790611844747.jpg',
    tags: ['Power BI', 'SQL', 'DAX', 'Data Cleaning']
  },
  {
    id: 'fintech-design-system',
    title: 'Next-Gen Mobile Wealth App & Design System',
    category: 'UI/UX & Design',
    client: 'Aether Wealth Tech',
    summary: 'Crafted the comprehensive user experience, high-fidelity mobile app interfaces, and design system tokens for an automated investment app serving over 50,000 users.',
    results: [
      { label: 'Onboarding completion rate', value: '+42%' },
      { label: 'Figma component library tokens', value: '180+ Assets' },
      { label: 'Developer implementation sprint time', value: '-35%' }
    ],
    image: '/images/design_uiux_mockup_1790611859401.jpg',
    tags: ['Figma', 'UI/UX', 'Design System', 'Prototyping']
  }
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Rajesh Varma',
    role: 'Founder & CEO',
    company: 'Apex Supply Systems',
    content: 'Mohit delivered our custom ERP portal ahead of schedule. The code was exceptionally clean, the UI was immediately adopted by our 40-person field team, and he was always responsive on WhatsApp. A true professional.',
    rating: 5,
    serviceUsed: 'Custom Software & React Development'
  },
  {
    id: '2',
    author: 'Priya Sharma',
    role: 'Head of Operations',
    company: 'Vanguard Retail Analytics',
    content: 'Our team was drowning in 15 different Excel sheets every Monday. Mohit built an automated Power BI dashboard and SQL pipeline that saves us at least 15 hours every single week. Unbelievable precision.',
    rating: 5,
    serviceUsed: 'Power BI Dashboard & Data Cleaning'
  },
  {
    id: '3',
    author: 'Aman Singhania',
    role: 'Senior Software Engineer',
    company: 'Transitioned to Fintech Tier-1',
    content: 'I had been applying for 3 months with zero callbacks. Mohit reworked my resume into an ATS-optimized powerhouse and coached me on technical behavioral answers. Within 3 weeks, I had 4 interview invitations and landed a 45% pay hike.',
    rating: 5,
    serviceUsed: 'ATS Resume & Interview Preparation'
  }
];
