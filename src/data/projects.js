// TODO Add a couple lines about each project
const data = [
  {
    title: 'NFL Arrests Serverless API',
    subtitle: 'Predicting NFL Fan Behavior with Serverless Machine Learning',
    link: 'https://analytics.brandondonelan.com/docs',
    image: '/images/projects/nflarrests.png',
    date: '2020-5-15',
    desc:
      'Serverless machine learning predicting NFL fanbase unruly behavior, '
      + 'built using the FastAPI (Python) webserver framework, '
      + ', and deployed on Amazon Web Services using ECS+Fargate and AWS Lambda. '
      + 'Model was built using a very simple regression model, leveraging sklearn + pandas using a dataset found on Kaggle. ',
  },
  {
    title: 'EZodbc',
    subtitle: 'Python pypi package aiming to aid analysts with database connectivity',
    link: 'https://pypi.org/project/ezodbc/',
    image: '/images/projects/ezodbc.jpg',
    date: '2021-01-05',
    desc:
      'Project aiming to assist analysts in connecting to a database and pulling data out for analysis.',
  },
  {
    title: 'ML-Workflows',
    subtitle: 'Scalable Batch Processing For Modern ML Workloads',
    link: 'https://github.com/Brontomerus/ml-workflows',
    image: '/images/projects/mlworkflows.png', // TODO: Change picture
    date: '2021-05-14',
    desc:
      'Serverless batch workload infrastructure, setup, and example code to use as a springboard'
      + 'for use in future projects I am involved with. The system leverages a potent combination of '
      + 'Prefect (workflow orchastration), Dask (distributed systems), Amazon Web Services, and Pulumi (Infrastructure as Code).',
  },
];

export default data;
