import raw from 'raw.macro';

const analystToEngineer = raw('./analyst_to_engineer.md');
const considerationsForML = raw('./considerations_for_ml.md');
const prefectAndDask = raw('./prefect_dask.md');
const howToWin = raw('./how_to_win.md');

// const disruptingStatusQuo = raw('./disrupting_the_status_quo.md');
// const Blog = () => (
//   <Main
//     title="Blog"
//     description="Mostly Incoherent Rambling..."
//   >
//     <article className="post markdown" id="blog">
//       <header>
//         <div className="title">
//           <h2 data-testid="heading"><Link to="/blog">Articles</Link></h2>
//         </div>
//       </header>
//       <ReactMarkdown
//         source={markdown}
//         renderers={{
//           Link: LinkRenderer,
//         }}
//         escapeHtml={false}
//       />
//     </article>
//   </Main>
// );

const blogs = [
  {
    name: 'Considerations-for-Building-ML-Integrated-Systems',
    title: 'Considerations for Building ML-Integrated Systems',
    subtitle: 'Approaching the use of Machine Learning in production',
    date: '5-12-2021',
    text: considerationsForML,
  },
  {
    name: 'From-Analyst-to-Engineer',
    title: 'From Analyst to Engineer',
    subtitle: 'Making the Leap',
    date: '5-1-2021',
    text: analystToEngineer,
  },
  {
    name: 'Using-Prefect-and-Dask-for-Distributed-Workloads',
    title: 'Using Prefect and Dask for Distributed Workloads',
    subtitle: 'Batch ML & distributed systems made easy',
    date: '5-31-2021',
    text: prefectAndDask,
  },
  {
    name: 'Winning In Data Science & Analytics',
    title: 'Winning In Data Science & Analytics',
    subtitle: 'Navigating a tool-saturated analytics industry',
    date: '5-31-2021',
    text: howToWin,
  },
];

export default blogs;
