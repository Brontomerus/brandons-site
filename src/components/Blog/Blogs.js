import React from 'react';
import PropTypes from 'prop-types';

import DataAnalytics from './Topics/DataAnalytics';

const Blogs = ({ data }) => (
  <div className="blog">
    <div className="link-to" id="blog" />
    <div className="header" id="blog" />
    <div className="blog-container">
      {data.map((article) => (
        <DataAnalytics
          data={article}
          key={article.text}
          id={article.name}
        />
      ))}
    </div>
  </div>
);

Blogs.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  })),
};

Blogs.defaultProps = {
  data: [],
};

export default Blogs;
