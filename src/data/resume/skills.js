// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'MS SQL Server',
    competency: 4,
    category: ['Databases', 'RDBMS', 'ETL'],
  },
  {
    title: 'MySQL / AWS Aurora',
    competency: 4,
    category: ['Databases', 'RDBMS', 'ETL'],
  },
  {
    title: 'Google BigQuery',
    competency: 4,
    category: ['Databases', 'NoSQL', 'ETL'],
  },
  {
    title: 'Amazon RedShift',
    competency: 1,
    category: ['Databases', 'NoSQL', 'ETL'],
  },
  {
    title: 'Neo4j',
    competency: 3,
    category: ['Graph', 'Databases', 'NoSQL'],
  },
  {
    title: 'Git',
    competency: 3,
    category: ['Tools', 'DevOps'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering', 'DevOps', 'Web Development'],
  },
  {
    title: 'Google Cloud',
    competency: 1,
    category: ['Tools', 'Web Development', 'Cloud', 'Serverless', 'DevOps'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Tools', 'Web Development', 'Cloud', 'Serverless', 'Network Architecture', 'DevOps'],
  },
  {
    title: 'AWS Elastic Compute Services + Fargate',
    competency: 5,
    category: ['Cloud', 'Serverless', 'Network Architecture', 'Docker', 'ETL', 'Distributed Systems'],
  },
  {
    title: 'AWS Lambda',
    competency: 5,
    category: ['Cloud', 'Serverless', 'Network Architecture', 'ETL'],
  },
  {
    title: 'AWS S3',
    competency: 5,
    category: ['Cloud', 'Serverless', 'Network Architecture', 'DevOps', 'ETL'],
  },
  {
    title: 'Javascript',
    competency: 1.5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Typescript',
    competency: 1.5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'HTML + CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ETL'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages', 'ETL'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Julia',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Cypher',
    competency: 1,
    category: ['Graph', 'Databases', 'NoSQL', 'Languages'],
  },
  {
    title: 'R',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development', 'Javascript', 'Frameworks'],
  },
  {
    title: 'React',
    competency: 1,
    category: ['Web Development', 'Javascript', 'Frameworks'],
  },
  {
    title: 'Angular',
    competency: 1,
    category: ['Web Development', 'Typescript', 'Frameworks'],
  },
  {
    title: 'Flask',
    competency: 4,
    category: ['Web Development', 'Python', 'Frameworks'],
  },
  {
    title: 'FastAPI',
    competency: 5,
    category: ['Web Development', 'Python', 'Distributed Systems', 'Frameworks'],
  },
  {
    title: 'Data Visualization',
    competency: 4,
    category: ['Data Science', 'SQL', 'Data Analytics', 'Business Intelligence'],
  },
  {
    title: 'Power BI',
    competency: 5,
    category: ['Data Analytics', 'Business Intelligence', 'Data Visualization'],
  },
  {
    title: 'SAS Viya',
    competency: 5,
    category: ['Data Analytics', 'Business Intelligence', 'Data Visualization'],
  },
  {
    title: 'Dask',
    competency: 4,
    category: ['Data Engineering', 'Python', 'Distributed Systems', 'Data Science', 'ETL'],
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
    category: ['Data Engineering', 'Python', 'Distributed Systems', 'ETL'],
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
    category: ['Data Engineering', 'Data Science', 'Python', 'Data Visualization'],
  },
  {
    title: 'Jupyter',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Spark',
    competency: 2,
    category: ['Data Engineering', 'Data Science', 'Distributed Systems'],
  },
  {
    title: 'pipy',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Machine Learning',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python', 'Distributed Systems'],
  },
  {
    title: 'Critical Learning',
    competency: 4,
    category: ['Soft Skills'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#cc7b94',
  '#3896e2',
  '#d69002',
  '#d7d358',
  '#64cb7b',
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
