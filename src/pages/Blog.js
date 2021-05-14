import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Article from '../components/Blog/Articles';

import articles from '../data/blog/articles';

const Blog = () => (
  <Main
    title="Blog"
    description="Mostly Incoherent Rambling..."
  >
    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="blog">Blog</Link></h2>
        </div>
      </header>
      <Article data={articles} />

    </article>
  </Main>
);

export default Blog;
