export const personalInfo = {
  name: 'Hana Al Haris',
  role: 'AI/ML Engineer | GenAI & Agentic Systems | MLOps',
  location: 'Bangalore, India · Abu Dhabi, UAE',
  email: 'hanaharis95@gmail.com',
  phone: '+91 8590442650',
  github: 'https://github.com/Hanah7511',
  linkedin: 'https://linkedin.com/in/hana-al-haris-3b7528255',
  status: 'Available for full-time roles',
};

export const stats = [
  { value: '4', label: 'Projects' },
  { value: '15+', label: 'Technologies' },
  { value: '7.8', label: 'CGPA' },
  { value: '2', label: 'Internships' },
];

export const projects = [
  {
    id: 1,
    name: 'Financial Risk Intelligence Platform',
    featured: true,
    github: 'https://github.com/Hanah7511/finrisk-intelligence-platform',
    description:
      'Enterprise-grade umbrella platform for AML detection and financial crime investigation with two integrated sub-systems.',
    subsystems: [
      {
        name: 'finrisk_detection_engine',
        emoji: '⚙',
        color: 'text-[#38bdf8]',
        borderColor: 'border-[#38bdf8]/20',
        github: 'https://github.com/Hanah7511/finrisk-intelligence-platform/tree/main/finrisk_detection_engine',
        description:
          'Multi-layer AML detection pipeline — rule-based engine, statistical anomaly detection (Z-score, IQR, MAD), ensemble ML (Isolation Forest, XGBoost, RF), GraphSAGE GNN fraud ring detection, risk fusion engine, real-time FastAPI scoring API with MLflow and Docker.',
      },
      {
        name: 'finintel_sentinel_ai',
        emoji: '🤖',
        color: 'text-[#a78bfa]',
        borderColor: 'border-[#a78bfa]/20',
        github: 'https://github.com/Hanah7511/finrisk-intelligence-platform/tree/main/finintel_sentinel_ai',
        description:
          'LangGraph multi-agent investigation system (investigation agent, compliance agent, summarization agent) over RAG pipeline with FAISS and ChromaDB, regulatory reasoning over FATF and FinCEN documents, confidence scoring, SAR report generation.',
      },
    ],
    pipeline: [
      'SQL Ingest', 'Validate', 'Preprocess', 'Features',
      'Rules', 'Stat ML', 'XGBoost', 'GNN', 'Fusion', 'Alert', 'SAR Report',
    ],
    tech: [
      'Python', 'XGBoost', 'PyTorch', 'GraphSAGE', 'NetworkX',
      'LangChain', 'LangGraph', 'OpenAI API', 'FAISS', 'ChromaDB',
      'FastAPI', 'MLflow', 'Docker', 'GitHub Actions', 'SQL Server',
    ],
  },
  {
    id: 2,
    name: 'FinGuard — LLM Guardrails Gateway',
    category: 'LLM Safety',
    github: 'https://github.com/Hanah7511/finguard-llm-guardrails-gateway',
    description:
      'Production AI safety middleware between users and LLMs. Input guardrails block prompt injection, jailbreaks, and financial PII via Microsoft Presidio. Output guardrails enforce Pydantic schema validation and RAG grounding checks. YAML-driven policy engine for compliance rules.',
    tech: ['Python', 'FastAPI', 'LangChain', 'Microsoft Presidio', 'Pydantic', 'PyYAML', 'Docker', 'GitHub Actions'],
  },
  {
    id: 3,
    name: 'Customer Engagement & Retention Analytics',
    category: 'Causal ML',
    badge: 'Causal Inference Layer',
    github: 'https://github.com/Hanah7511/churn-causal-intelligence',
    description:
      'Behavioral churn intelligence for ECB stakeholder. Engineered 5 novel KPIs, applied causal inference using DoWhy DAG construction and backdoor criterion, estimated Conditional Average Treatment Effects using EconML T-Learner and S-Learner meta-learners for uplift modelling.',
    tech: ['Python', 'DoWhy', 'EconML', 'Scikit-learn', 'Streamlit', 'Plotly', 'Pandas', 'SQL'],
  },
];

export const skills = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 95 },
      { name: "SQL", level: 85 },
      { name: "Java", level: 70 },
    ],
  },

  {
    category: "AI & GenAI",
    items: [
      { name: "LangChain", level: 90 },
      { name: "LangGraph", level: 88 },
      { name: "RAG Pipelines", level: 90 },
      { name: "OpenAI API", level: 88 },
    ],
  },

  {
    category: "Machine Learning",
    items: [
      { name: "Scikit-learn", level: 92 },
      { name: "XGBoost", level: 90 },
      { name: "PyTorch", level: 85 },
      { name: "GraphSAGE", level: 80 },
    ],
  },

  {
    category: "MLOps & Infrastructure",
    items: [
      { name: "FastAPI", level: 90 },
      { name: "MLflow", level: 85 },
      { name: "Docker", level: 82 },
      { name: "GitHub Actions", level: 80 },
    ],
  },

  {
    category: "Vector Databases & RAG",
    items: [
      { name: "FAISS", level: 88 },
      { name: "ChromaDB", level: 85 },
      { name: "Sentence Transformers", level: 82 },
    ],
  },

  {
    category: "Causal AI",
    items: [
      { name: "DoWhy", level: 80 },
      { name: "EconML", level: 78 },
      { name: "DAGs / Do-calculus", level: 82 },
      { name: "A/B Testing", level: 85 },
    ],
  },
];

export const experience = [
  {
    title: 'AI & ML Intern',
    company: 'Unique World Robotics',
    location: 'Dubai, UAE',
    period: 'Mar 2026 – Apr 2026',
    description:
      'Contributed to the Future Intelligence project, building ML models across multiple domains. Delivered hands-on AI education to students.',
  },
  {
    title: 'Data Analyst Intern',
    company: 'Miles Education',
    location: 'Bangalore, India',
    period: 'Apr 2024 – Jun 2024',
    description:
      'Designed Power BI dashboards for KPI tracking. Cleaned and transformed structured datasets for pipeline reporting.',
  },
];

export const education = [
  {
    degree: 'B.Tech Computer Science — AI & Machine Learning',
    institution: 'JAIN University Bangalore',
    period: '2022 – 2026',
    cgpa: '7.8/10',
    courses: [
      'Causal Reasoning',
      'Deep Learning',
      'NLP',
      'Computer Vision',
      'ML Systems',
      'Bayesian Networks',
    ],
  },
];
