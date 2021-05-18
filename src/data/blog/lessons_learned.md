From my experiences, developing a model for production should be no different than your approach to build other software, and should fit within your typical __Software Development Life Cycle (SDLC)__. Another recommendation I have is for the love of all that is holy, __define requirements__ ahead of time by asking yourself a few key questions, and documenting them for later reference. A few topics you _must_ understand before proceeding are:

1. __Data Throughput (Volume)__: How much data are we processing per day, week, or month?
2. __Define Stakeholders__: Who are the stakeholders? Who will be affected by the development and maintenance patterns?
3. __Data Churn__: Whats the data's velocity? How often does it change? Consider you got a table of 100 records today and the records are dropped periodically with new records then being inserted to take their place.. How long would it take to have an entirely different set of 100 records?
4. __Model Decay__: How quickly does the predictive quality of the model decay? What frequency must we update the model?
5. __Frequency of Operation__: How frequently is the model invoked by the "customer(s)"?
6. __Configurations / Statefulness__: Are there custom configurations that alter the state of the system? (ie a customer database table to retrieve info from)
7. __SLA's__: What are the Service Level Agreements? (how fast does it need to return data)



### Organizationally & Culturally Approaching ML / Data Science

There are a ton of important factors that will contribute to the success of data science projects these days. A few important ones that I've come to observe involve how your team defines itself, and how the team approaches developement practices.

Before Deciding on building a model, you must assure everyone is on the same page regarding scale and DevOps practices. I'd recommend building models on cloud-hosted cluster or workhorse server, where the data scientists can freely spin machines/resources up and down to perform their work using machines that can handle the sort of cpu-bound calculations they are responsible to perform. Data Scientists are expensive. Perhaps the most expensive piece of the whole dang puzzle. Don't waste their time, because if you do, you're wasting your budget.

Another key is assuring the team fully understands any constraints placed on them by other systems. Perhaps its the applications that serve the Web Requests for the models, or some other team-internal software constraint. It's important to understand these ahead of time, so you don't waste north of $250 training a model using the wrong version of Python, or maybe even just the wrong version of sklearn... To ensure the team's development practices are cohesive, docker environments are often managed by engineers to define the OS and software version requirements used by the data scientists - to free them up to do more data science stuff.


 
### Deciding on Model Type

Generally speaking, there are a only few main approaches to deploying a trained model or predictive analytics system, while there is a much higher cardinality of options when it comes to the options for feature engineering and model types to train and test. The data and the expertise of the data scientist should dictate these options. An important thing to mention, especially if you've not done this before, is that __simpler is always better__. Yes, Deep Learning is ridiculously awesome, and yes, you can essentially have a neural network in a box using one import from TensorFlow... BUT, consider this anecdote:

Imagine you have a xgboost model and a TensorFlow CNN model with the following stats:

| Information                     | TensorFlow | xgboost |
|:--------------------------------|-----------:|--------:|
| Training Cost                   | $5,000     | $300    |
| Accuracy                        | 93%        | 85%     |
| Lifespan Required               | 5 yrs      | 5 yrs   |
| Estimated Margin From Accuracy  | ~10%       | ~6%     |


Consider the following:
- If it takes an unreasonable amount of machines in a cluster, and runs horribly inefficiently, then you're margin just shrank 2-4% over that 5 year time-span. 
- Another issue might be maintenance, complicated Neural Nets often have absurd dependencies and build requirements. Subtract another 1% from the original margin, along with some hair off your Data Engineer's head as he fiddles with your security-hardened docker images. 
- The model's intricacy causes more frequent re-training scenarios than the simpler xgboost model, with each re-training costing you $500. Perhaps the rate is 1:2, so subtract another 1%

Right there, your model has the potential to cause a lot more effort for the same 6% marginal benefit compared with not having a model at all. Obviously this is a made-up example, but an important one for less experienced people to fully understand. The choices you make today _will_ effect your maintenance and hiring prospects a year from now and that's often overlooked by new teams. Complexity is __not__ your friend!



### Regarding Your Infrastructure

Distributed systems are cool. _Really cool_. They are also _a total pain in the you-know-where_. Unless your volume dictates it, stay the heck away from it. Well, unless you're just trying it out to learn it - in that case, by all means I encourage you to shoot your shot. Having a mentor helps, so I encourage you to either reach out to an established open source community like Dask, or to possibly try to find someone within your network and willing to take you under their wing.

Start smaller, and establish a baseline to research and understand what you might need in the future to scale up or down. Once you feel that your servers no longer suffice your needs, then its time to move up - and that's pretty obvious stuff. The hard part is having the discipline to do so, which is why I mention that.

The most important part is that you feel comfortable with the tech stack you are working with. Too many unknowns and you'll end up like me on my first project: alone and afraid. Also, you'll need to assure you can get the right organizational support, because its unlikely you'll be able to build, improve, and maintain an entire system on your own... at least not a fully updated one with tight security and constant peer reviews...

Depending on your system requirements, you can deduce the technical approach you need to take. This should be a primary decision proceeding any development on the system, and should be documented and assigned a project _owner_ with the power to veto product managers and the like; due to the constant need to guard against scope creep from any business leaders that don't really understand how or why a small requirement tweak can have such large impacts on the approach. Only in dire and justified situations characterized by great change should scope change to alter the trajectory of the project.

I will define the general deployment approaches below, discussing each briefly moving from most gnarly to least gnarly based on my experience, (or lack thereof):


#### Event Stream or Pub/Sub

Report Card:
- __Scalability Score__: 9
- __Speed__: 9
- __Ease of Deployment__: 2
- __MLOps Pipeline__: 2 

This type of deployment is pretty intricate, and would ideally service predictive models for internal web applications on for extremely high throughput systems. Ideally, the team looking to use this system should also be competent using event-driven activity. They should also have access to low-latency and highly available networking setups. If the data churn is off the charts, and your team has specific needs where an event bus makes sense, then by all means give deployment via event stream a good look. Examples of source systems and scenarios where this might apply would be:
- You are building out IoT systems and want to predict the lifespan based on the syslogs in each device.
- Reviewing microservice networking logs for Cyber Security, trying to detect anomalies.
- You're making one of those neat drone shows that involve thousands of drones "dancing" in the sky.
- You're using Google Firebase for you're heavily trafficked site/game and want to perform ML predictions on fly for some defined Analytics Events.

If you have the avaible tools and expertise, its a great choice!


#### Batch

Report Card:
- __Scalability Score__: 7-10 (depends on your operational cluster/machine)
- __Speed__: 2
- __Ease of Deployment__: 8
- __MLOps Pipeline__: 8 

Batch refers to what most people think about when they think about run-of-the-mill ETL. You get a periodic file input or query lots of records on some cadence, and you need to do preform some sort of large-scale inference on them. In most cases, you're just changing data types or altering structures in the most efficient manner possible. However, with a predictive model thrown into the mix, there are some added complications.

Below are some notes on options you have with this method.

Infrastructure Options:
- _Job Scheduler_: [Prefect](https://www.prefect.io/resources), [Apache Airflow](https://airflow.apache.org/), [AWS Steps](https://aws.amazon.com/step-functions/), [Rundeck](https://www.rundeck.com/open-source), [AWS Batch](https://aws.amazon.com/batch/) etc.
- _Enviornment_: [Docker](https://www.docker.com/), [Kubernetes](https://kubernetes.io/) / [AWS EKS](https://aws.amazon.com/eks/), [Docker Swarm](https://dockerswarm.rocks/) / [AWS ECS / Fargate](https://aws.amazon.com/ecs/), [AWS Lambda](https://aws.amazon.com/lambda/) or [Azure Functions]() *if quick enough, [AWS Glue](https://aws.amazon.com/glue/) / [Azure Data Factory](https://azure.microsoft.com/en-us/services/data-factory/) 
- _Storage_: Pretty much anything on God's Green Earth. Columnar NoSQL are great, but so are Document NoSQL, raw files, and RDBMS's.
- _Communication Protocol(s)_: FTP, SFTP, HDFS, ODBC, REST (Multipart File), SOAP (maybe?)

Options:
- Small workload? (0-2 GB) Pandas.
- Medium workload? (2-15 GB) Pandas, but you'll probably need a bigger server than whatever you got right now.
- Large workload (15-25 GB?) Pandas, if the server's RAM is large enough for the whole data set plus a "vig". Think about Dask or PySpark.
- XL-Workload (25-750 GB)? Dask or PySpark/Spark running on docker-swarm or something like an AWS ECS cluster. You need a battle ship or two, but not more than 10.
- Massive workload? Dask or PySpark/Spark running on a Kubernetes Cluster. Its time to call the Navy, because your establishing a beachhead and you need the Big Guns.


#### Direct Application Integration

Report Card:
- __Scalability Score__: 1
- __Speed__: 8
- __Ease of Deployment__: 9
- __MLOps Pipeline__: 5 


By Direct Application Integration, I mean directly embedding the trained model in the Application code itself, or within the Application's Database. Examples of this include using PMML to define a simple regression model, and operationalizing that within a RDBMS database. In other cases, its also possible to build a small model in Python and embed that into the server-side code or even into a database trigger, given the database supports python run times. An example of a database that might be able to support that is Postgres, but sadly I have not tried that myself.

From what I've read, you don't really want to attempt it with a whole lot of throughout or volume in your system. I'd only do this in smaller, out-of-the-way systems with low value to the company. Certainly not something to build a core competency on.



#### REST API

Report Card:
- __Scalability Score__: 4
- __Speed__: 8
- __Ease of Deployment__: 9
- __MLOps Pipeline__: 8

The bread and the butter. 

You can be creative with the approaches here, because you probably have the most options at your disposal. A popular AWS approach is to deploy the model on an entirely serverless infrastructure, utilizing AWS API Gateway + AWS Lambda to operate the trained model on incoming requests. Another super common approach is to build an API using something like Shiny(R), Flask(Python), and more recently FastAPI (Python). These can be deployed into AWS ECS clusters, or deployed on any number of server-based application deployment approaches, but you might be slightly limited on MLOps pipeline opportunities to handle model decay if your app is super custom.



### Making A Decision

Here is a pretty simple decision table to use while facing down these sorts of problems:

| What is the data relative volume? | What is the data churn?  | Real-Time / millisecond SLA? | Whats the "customer" system?              | Is there Statefulness / Configurations?    | Deployment Strategy                               |
| :-------------------------------- | :----------------------- | :--------------------------- | :---------------------------------------- | :----------------------------------------- | :------------------------------------------------ |
| Massive                           | Constantly               | Yes                          | Internal & High throughput                | Ideally, No                                | Pub/Sub Event Stream                              |
| Moderate to High                  | Any                      | Yes                          | _External_ to the infrastructure          | Ideally, No                                | Web Service (REST API)                            |
| Any                               | _Never changes_          | Any                          | Any                                       | Any                                        | Pre-Process. Use API / pass data to source system |
| Low to Moderate                   | Timed cadence            | Maybe                        | Internal in private networks              | No                                         | Serverless Functions (ie AWS Lambda)              |
| Moderate to High                  | Timed cadence            | _No_                         | Internal/External File-Based              | Yes or No                                  | Batch                                             |
| Low                               | Low                      | Maybe                        |                                           | Yes                                        | Database Integration                              |
|                                   |                          |                              |                                           |                                            |                                                   |




Thanks for reading. If you're still hungry for knowledge, check out these awesome articles too:
- [Some Article](Link)


