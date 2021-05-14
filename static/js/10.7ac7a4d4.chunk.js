(this["webpackJsonpbrandons-site"]=this["webpackJsonpbrandons-site"]||[]).push([[10],{208:function(e,t,a){"use strict";a.r(t);var n=a(0),o=(a(1),a(5)),r=a(21),s=a(53),i=a(76),l=a.n(i),h=a(160),d=a.n(h),c=function(e){var t=Object.assign({},e);return Object(n.jsx)(o.b,Object(s.a)({},t))},u=function(e){var t=e.data;return Object(n.jsxs)("article",{className:"dataanalytics-container",children:[Object(n.jsxs)("header",{children:[Object(n.jsxs)("h2",{children:[t.title," - ",t.date]}),Object(n.jsx)("h4",{children:t.subtitle})]}),Object(n.jsx)(l.a,{plugins:[d.a],source:t.text,renderers:{Link:c},escapeHtml:!1})]})},m=function(e){var t=e.data;return Object(n.jsxs)("div",{className:"blog",children:[Object(n.jsx)("div",{className:"link-to",id:"blog"}),Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h3",{children:"Articles"})}),t.map((function(e){return Object(n.jsx)(u,{data:e},e.text)}))]})};m.defaultProps={data:[]};var y=m,p=[{title:"Lessons Learned From Building My First Enterprise Predictive Analytics Systems",subtitle:"Tails From My Trial and Error Experiences",date:"2-8-2021",text:"From my experiences, developing a model for production should be no different than your approach to build other software, and should fit within your typical __Software Development Lifecycle (SDLC)__. Another recommendation I have is for the love of all that is holy, __define requirements__ ahead of time by asking yourself a few key questions, and documenting them for later reference. A few topics you _must_ understand before proceeding are:\n\n1. __Data Throughput (Volume)__: How much data are we processing per day, week, or month?\n2. __Define Stakeholders__: Who are the stakeholders? Who will be affected by the developement and maintenance patterns?\n3. __Data Churn__: Whats the data's velocity? How often does it change?\n4. __Model Degredation__: How quickly does the predictive quality of the model decay? What frequency must we update the model?\n5. __Frequency of Operation__: How frequently is the model invoked by the \"customer(s)\"?\n6. __Configurations / Statefulness__: Are there custom configurations that alter the state of the system? (ie a customer database table to retrieve info from)\n7. __SLA's__: What are the Service Level Agreements? (how fast does it need to return data)\n\n\n### Regarding Your Infrastructure\n\nDistributed systems are cool. _Really cool_. They are also _a total pain_. Unless your volume dictates it, stay the heck away from it. Well, unless you're just trying it out to learn it - in that case, by all means I encourage you to shoot your shot.\n\n\n\n### Deciding on Model Type\n\nGenerally speaking, there are a few main approaches to deploying a trained model or predictive analytics system. Based on your system requirements, you can deduce the technical approach you need to take. This should be a primary decision proceeding any development on the system, and should be documented to guard against scope creep from any businees leaders that don't really understand how or why small requirement tweaks can have such large impacts on the approach. Only in dire and justified situations should scope change to alter the tradjectory of the project.\n\nI will define the general deployment approaches below, and discuss each briefly, moving from most gnarly to least gnarly based on my experience, or lackthereof:\n\n\n#### Event Stream or Pub/Sub\n\nThis type of deployment is pretty intricate, and would ideally service predictive models for internal web applications or for extremely high throughput systems. If the data churn is off the charts, then use this deployment architecture. Examples of source systems might include IoT systems, microservices, and broad systems.\n\n\n#### Batch\n\nBatch refers to what most people think about when they think about run-of-the-mill ETL. You get a file or batch of a bunch of records and you need to do something with them. In most cases, you're jsut changing datatypes or altering structures in the most efficient manner possible. With a predictive model however, there are some added complications.\n\nBelow are some notes on options you have with this method.\n\nInfrastructure Options:\n- _Job Scheduler_: [Prefect](), [Apache Airflow](), [AWS Steps](), [Rundeck](), [AWS Batch]() etc.\n- _Enviornment_: [Docker](), [Kubernetes]() / [AWS EKS](), [Docker Swarm]() / [AWS ECS / Fargate](), [AWS Lambda]() or [Azure Functions]() *if quick enough, [AWS Glue]() / [Azure Data Factory]() \n- _Storage_: Pretty much anything on God's Green Earth. Columnar NoSQL are great, but so are Document NoSQL, raw files, and RDBMS's.\n- _Communication Protocol(s)_: FTP, SFTP, ODBC \n\nOptions:\n- Small workload? Pandas.\n- Medium workload? Pandas.\n- Large workload? Pandas, if the server is large enough. Think about Dask or PySpark.\n- Massive workload? Dask or PySpark.\n\n\n#### Direct Application Integration\n\n\n\n\n#### REST API\n\n\n\n### Making A Decision\n\nHere is a pretty simple decision table to use while facing down these sorts of problems:\n\n| What is the data relative volume? | What is the data churn?  | Real-Time / millisecond SLA? | Whats the \"customer\" system?              | Is there Statefulness / Configurations?    | Deployment Strategy                               |\n| :-------------------------------- | :----------------------- | :--------------------------- | :---------------------------------------- | :----------------------------------------- | :------------------------------------------------ |\n| Massive                           | Constantly               | Yes                          | Internal & High throughput                | Ideally, No                                | Pub/Sub Event Stream                              |\n| Moderate to High                  | Any                      | Yes                          | _External_ to the infrastructure          | Ideally, No                                | Web Service (REST API)                            |\n| Any                               | _Never changes_          | Any                          | Any                                       | Any                                        | Pre-Process. Use API / pass data to source system |\n| Low to Moderate                   | Timed cadence            | Maybe                        | Internal in private networks              | No                                         | Serverless Functions (ie AWS Lambda)              |\n| Moderate to High                  | Timed cadence            | _No_                         | Internal/External File-Based              | Yes or No                                  | Batch                                             |\n| Low                               | Low                      | Maybe\\                       |                                           | Yes                                        | Database Integration                              |\n|                                   |                          |                              |                                           |                                            |                                                   |\n\n\n\n\nThanks for reading. If you're still hungry for knowledge, check out these awesome articles too:\n- [Some Article](Link)\n\n\n"},{title:"From Analyst to Engineer",subtitle:"Making the Leap",date:"2-8-2021",text:"At the moment I am writing this, I would consider making the leap from analyst to engineer the greatest milestone of my young career. I wanted to take some time and reflect on this experience so its possible that another young professional may learn from my mistakes and achieve their goals as well. \n\nI found myself at the right place at the right time, and had the chance to really take a swing at an opportunity that many dream of - to lead the development of a production system to operate a trained predictive model. I had been promoted from Reporting Analyst to Analytics Data Engineer on my team, and soon thereafter the team embarked on something none of us knew anything about. From my perspective, the predictive model was the _easy_ part, as every single person on the team had trained a predictive model at some point in their career, as well as having a PhD Statistian on our team to comfront the mathematical complications in that arena. Given our situation and staff, I'll have to admit that I thought the odds of success were much less than that of failure. \n\nI'd compare it to being thrown out of a plane with nothing but a parachute and the clothes on my back into the Amazon Rain Forest and told to make my way out in less than 3 months. Without a senior engineer within my little corner of the organization to go to, I tried my best to meet with senior IT employees elsewhere around the organization. Unfortunately, they had deadlines just like me and we're as proficient with data and what exactly we were trying to do as they were with different approaches they had built their careers on. This left me out of luck with trying to garner others' expertise, and forced me to turn to the tools I had left in the box: my curiousity and Google.com.\n\nI may not have the typical expensive educational background and natural genious that many of my peers in the data science and analytics field have, but somehow I've found myself in the club of \"deployed-a-predictive-model-and-helped-a-company-make-money-off-it\" bucket.  "}];t.default=function(){return Object(n.jsx)(r.a,{title:"Blog",description:"Mostly Incoherent Rambling...",children:Object(n.jsxs)("article",{className:"post",id:"blog",children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(o.b,{to:"blog",children:"Blog"})})})}),Object(n.jsx)(y,{data:p})]})})}}}]);
//# sourceMappingURL=10.7ac7a4d4.chunk.js.map