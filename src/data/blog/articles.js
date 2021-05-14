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

const articles = [
  {
    title: 'Lessons Learned From Building My First Enterprise Predictive Analytics Systems',
    subtitle: 'Tails From My Trial and Error Experiences',
    date: '2-8-2021',
    text: lessonsLearned,
  },
  {
    title: 'From Analyst to Engineer',
    subtitle: 'Making the Leap',
    date: '2-8-2021',
    text: analystToEngineer,
  },
  // {
  //   title: 'Disrupting the Status Quo',
  //   subtitle: 'Transforming an Organization From the Inside',
  //   date: '2-8-2021',
  //   text: disruptingStatusQuo,
  // },
];

export default articles;
