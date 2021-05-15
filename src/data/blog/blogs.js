import raw from 'raw.macro';

const analystToEngineer = raw('./analyst_to_engineer.md');
const lessonsLearned = raw('./lessons_learned.md');
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
    name: 'Lessons-Learned-Building-1st-Predictive-Analytics-Systems',
    title: 'Lessons Learned Building 1st Predictive Analytics Systems',
    subtitle: 'Prevailing through early failures',
    date: '5-8-2021',
    text: lessonsLearned,
  },
  {
    name: 'From-Analyst-to-Engineer',
    title: 'From Analyst to Engineer',
    subtitle: 'Making the Leap',
    date: '5-9-2021',
    text: analystToEngineer,
  },
  // {
  //   title: 'Disrupting the Status Quo',
  //   subtitle: 'Transforming an Organization From the Inside',
  //   date: '2-8-2021',
  //   text: disruptingStatusQuo,
  // },
];

export default blogs;
