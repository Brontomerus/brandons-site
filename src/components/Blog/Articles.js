import React from 'react';
import PropTypes from 'prop-types';

import DataAnalytics from './Topics/DataAnalytics';

const Articles = ({ data }) => (
  <div className="blog">
    <div className="link-to" id="blog" />
    <div className="title">
      <h3>Articles</h3>
    </div>
    {data.map((article) => (
      <DataAnalytics
        data={article}
        key={article.text}
      />
    ))}
  </div>
);

Articles.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    date: PropTypes.string,
    text: PropTypes.string,
  })),
};

Articles.defaultProps = {
  data: [],
};

export default Articles;
