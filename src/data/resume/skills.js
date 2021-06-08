// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'MS SQL Server',
    competency: 4,
    category: ['Data Storage & Databases', 'RDBMS', 'ETL/ELT'],
  },
  {
    title: 'MySQL / AWS Aurora',
    competency: 4,
    category: ['Cloud Components', 'Data Storage & Databases', 'RDBMS', 'ETL/ELT'],
  },
  {
    title: 'Google BigQuery',
    competency: 4,
    category: ['Cloud Components', 'Data Storage & Databases', 'NoSQL', 'ETL/ELT'],
  },
  {
    title: 'Amazon RedShift',
    competency: 1,
    category: ['Cloud Components', 'Data Storage & Databases', 'NoSQL', 'ETL/ELT'],
  },
  {
    title: 'Neo4j',
    competency: 1,
    category: ['Data Storage & Databases', 'NoSQL'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['DevOps', 'SDLC'],
  },
  {
    title: 'Pulumi',
    competency: 3,
    category: ['DevOps', 'Cloud', 'SDLC'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Data Engineering', 'DevOps', 'SDLC'],
  },
  {
    title: 'Google Cloud',
    competency: 1,
    category: ['Cloud', 'DevOps', 'SDLC'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Cloud', 'DevOps', 'SDLC'],
  },
  {
    title: 'AWS Elastic Compute Services + Fargate & ECR',
    competency: 5,
    category: ['Cloud Components', 'ETL/ELT', 'Distributed Systems'],
  },
  {
    title: 'AWS Lambda',
    competency: 5,
    category: ['Cloud Components', 'ETL/ELT'],
  },
  {
    title: 'AWS S3',
    competency: 5,
    category: ['Cloud Components', 'Data Storage & Databases', 'ETL/ELT', 'NoSQL'],
  },
  {
    title: 'AWS Serverless Stack',
    competency: 4,
    category: ['Cloud Components', 'Data Storage & Databases', 'ETL/ELT'],
  },
  {
    title: 'AWS Network Architecture (VPC, Subnets, Security Groups, Gateways, etc.)',
    competency: 5,
    category: ['Cloud Components', 'Data Storage & Databases', 'ETL/ELT'],
  },
  {
    title: 'AWS CloudWatch',
    competency: 4,
    category: ['Cloud Components', 'Data Storage & Databases', 'ETL/ELT'],
  },
  {
    title: 'Javascript',
    competency: 1.5,
    category: ['Languages'],
  },
  {
    title: 'Typescript',
    competency: 1.5,
    category: ['Languages'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Bash / Shell Scripting',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ETL/ELT'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages', 'ETL/ELT'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Cypher',
    competency: 1,
    category: ['Data Storage & Databases', 'NoSQL', 'Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Frameworks'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Frameworks'],
  },
  {
    title: 'Angular',
    competency: 1,
    category: ['Web Frameworks'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Python', 'Web Frameworks'],
  },
  {
    title: 'FastAPI',
    competency: 5,
    category: ['Python', 'Distributed Systems', 'Web Frameworks'],
  },
  {
    title: 'SQLAlchemy / Alembic Migrations',
    competency: 4,
    category: ['Data Engineering', 'Python', 'DevOps'],
  },
  {
    title: 'Descriptive Analytics',
    competency: 5,
    category: ['Business Intelligence & Data Visualization'],
  },
  {
    title: 'Power BI',
    competency: 5,
    category: ['Business Intelligence & Data Visualization'],
  },
  {
    title: 'Google Data Studio',
    competency: 4.5,
    category: ['Business Intelligence & Data Visualization'],
  },
  {
    title: 'SAS Viya',
    competency: 5,
    category: ['Business Intelligence & Data Visualization'],
  },
  {
    title: 'Dask',
    competency: 4,
    category: ['Data Engineering', 'Python', 'Distributed Systems', 'Data Science', 'ETL/ELT'],
  },
  {
    title: 'Dask-CloudProvider',
    competency: 4,
    category: ['Data Engineering', 'Python', 'Distributed Systems', 'DevOps'],
  },
  {
    title: 'Dask-ML',
    competency: 4,
    category: ['Data Engineering', 'Python', 'Distributed Systems', 'Data Science'],
  },
  {
    title: 'Prefect',
    competency: 4,
    category: ['Data Engineering', 'Python', 'Distributed Systems', 'ETL/ELT'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 2,
    category: ['Data Engineering', 'Data Science', 'Python', 'Business Intelligence & Data Visualization'],
  },
  {
    title: 'Jupyter Notebooks',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4.5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Regression',
    competency: 4.5,
    category: ['Data Science'],
  },
  {
    title: 'Classification',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Unsupervised ML (Clustering)',
    competency: 4,
    category: ['Data Science'],
  },
  {
    title: 'Feature Engineering',
    competency: 4,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'Natural Langauge Processing',
    competency: 3.5,
    category: ['Data Engineering', 'Data Science'],
  },
  {
    title: 'MLOps',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python', 'Cloud', 'DevOps', 'SDLC'],
  },
  {
    title: 'Machine Learning',
    competency: 4.5,
    category: ['Data Engineering', 'Data Science', 'Python', 'Distributed Systems'],
  },
  {
    title: 'Critical Thinking',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Strategic Planning',
    competency: 5,
    category: ['Soft Skills', 'SDLC'],
  },
  {
    title: 'Managerial Tasks',
    competency: 3,
    category: ['Soft Skills'],
  },
  {
    title: 'Project Ownership',
    competency: 4,
    category: ['Soft Skills', 'SDLC'],
  },
  {
    title: 'Agile Development',
    competency: 4,
    category: ['Soft Skills', 'SDLC'],
  },
  {
    title: 'Defining Vision',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Calm & Collective',
    competency: 4.5,
    category: ['Soft Skills'],
  },
  {
    title: 'JIRA',
    competency: 4,
    category: ['Soft Skills', 'SDLC'],
  },
  {
    title: 'Leadership',
    competency: 4,
    category: ['Soft Skills'],
  },
  {
    title: 'Coaching',
    competency: 3.5,
    category: ['Soft Skills'],
  },
  {
    title: 'Learning',
    competency: 5,
    category: ['Soft Skills'],
  },
  {
    title: 'Listening',
    competency: 5,
    category: ['Soft Skills'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#14ff18', // greens
  '#64cb7b',
  '#64cb7b',
  '#3ec999', // bluegreen
  '#37b1f5', // blues
  '#40494e',
  '#3896e2',
  '#9155ad', // purp
  '#d41ed1', // pinkish/reds
  '#515dd4',
  '#cc7b94',
  '#d69002', // golds
  '#d7d358',
  '#ab8568', // biege
  '#a3a0a0', // grey
  '#e6eded',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
