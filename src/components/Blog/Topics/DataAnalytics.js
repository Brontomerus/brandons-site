import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Link } from 'react-router-dom';

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const DataAnalytics = ({ data }) => (
  <article className="dataanalytics-container">
    <header>
      <h2>{data.title} - {data.date}</h2>
      <h4>{data.subtitle}</h4>
    </header>
    <ReactMarkdown
      plugins={[gfm]}
      source={data.text}
      renderers={{
        Link: LinkRenderer,
      }}
      escapeHtml={false}
    />
  </article>
);

DataAnalytics.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default DataAnalytics;

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

//     </article>
//   </Main>
// );

// export default Blog;
