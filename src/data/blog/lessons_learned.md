From my experiences, developing a model for production should be no different than your approach to build other software, and should fit within your typical __Software Development Lifecycle (SDLC)__. Another recommendation I have is for the love of all that is holy, __define requirements__ ahead of time by asking yourself a few key questions, and documenting them for later reference. A few topics you _must_ understand before proceeding are:

1. __Data Throughput (Volume)__: How much data are we processing per day, week, or month?
2. __Define Stakeholders__: Who are the stakeholders? Who will be affected by the developement and maintenance patterns?
3. __Data Churn__: Whats the data's velocity? How often does it change?
4. __Model Degredation__: How quickly does the predictive quality of the model decay? What frequency must we update the model?
5. __Frequency of Operation__: How frequently is the model invoked by the "customer(s)"?
6. __Configurations / Statefulness__: Are there custom configurations that alter the state of the system? (ie a customer database table to retrieve info from)
7. __SLA's__: What are the Service Level Agreements? (how fast does it need to return data)


### Regarding Your Infrastructure

Distributed systems are cool. _Really cool_. They are also _a total pain_. Unless your volume dictates it, stay the heck away from it. Well, unless you're just trying it out to learn it - in that case, by all means I encourage you to shoot your shot.



### Deciding on Model Type

Generally speaking, there are a few main approaches to deploying a trained model or predictive analytics system. Based on your system requirements, you can deduce the technical approach you need to take. This should be a primary decision proceeding any development on the system, and should be documented to guard against scope creep from any businees leaders that don't really understand how or why small requirement tweaks can have such large impacts on the approach. Only in dire and justified situations should scope change to alter the tradjectory of the project.

I will define the general deployment approaches below, and discuss each briefly, moving from most gnarly to least gnarly based on my experience, or lackthereof:


#### Event Stream or Pub/Sub

This type of deployment is pretty intricate, and would ideally service predictive models for internal web applications or for extremely high throughput systems. If the data churn is off the charts, then use this deployment architecture. Examples of source systems might include IoT systems, microservices, and broad systems.


#### Batch

Batch refers to what most people think about when they think about run-of-the-mill ETL. You get a file or batch of a bunch of records and you need to do something with them. In most cases, you're jsut changing datatypes or altering structures in the most efficient manner possible. With a predictive model however, there are some added complications.

Below are some notes on options you have with this method.

Infrastructure Options:
- _Job Scheduler_: [Prefect](), [Apache Airflow](), [AWS Steps](), [Rundeck](), [AWS Batch]() etc.
- _Enviornment_: [Docker](), [Kubernetes]() / [AWS EKS](), [Docker Swarm]() / [AWS ECS / Fargate](), [AWS Lambda]() or [Azure Functions]() *if quick enough, [AWS Glue]() / [Azure Data Factory]() 
- _Storage_: Pretty much anything on God's Green Earth. Columnar NoSQL are great, but so are Document NoSQL, raw files, and RDBMS's.
- _Communication Protocol(s)_: FTP, SFTP, ODBC 

Options:
- Small workload? Pandas.
- Medium workload? Pandas.
- Large workload? Pandas, if the server is large enough. Think about Dask or PySpark.
- Massive workload? Dask or PySpark.


#### Direct Application Integration




#### REST API



### Making A Decision

Here is a pretty simple decision table to use while facing down these sorts of problems:

| What is the data relative volume? | What is the data churn?  | Real-Time / millisecond SLA? | Whats the "customer" system?              | Is there Statefulness / Configurations?    | Deployment Strategy                               |
| :-------------------------------- | :----------------------- | :--------------------------- | :---------------------------------------- | :----------------------------------------- | :------------------------------------------------ |
| Massive                           | Constantly               | Yes                          | Internal & High throughput                | Ideally, No                                | Pub/Sub Event Stream                              |
| Moderate to High                  | Any                      | Yes                          | _External_ to the infrastructure          | Ideally, No                                | Web Service (REST API)                            |
| Any                               | _Never changes_          | Any                          | Any                                       | Any                                        | Pre-Process. Use API / pass data to source system |
| Low to Moderate                   | Timed cadence            | Maybe                        | Internal in private networks              | No                                         | Serverless Functions (ie AWS Lambda)              |
| Moderate to High                  | Timed cadence            | _No_                         | Internal/External File-Based              | Yes or No                                  | Batch                                             |
| Low                               | Low                      | Maybe\                       |                                           | Yes                                        | Database Integration                              |
|                                   |                          |                              |                                           |                                            |                                                   |




Thanks for reading. If you're still hungry for knowledge, check out these awesome articles too:
- [Some Article](Link)


