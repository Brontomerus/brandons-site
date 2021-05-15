import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Blogs from '../components/Blog/Blogs';
import blogs from '../data/blog/blogs';

// const sections = [
//   'Education',
//   'Experience',
//   'Skills',
//   'Courses',
//   'References',
// ];

const Blog = () => (
  <Main
    title="Blog"
    description="Mostly Incoherent Rambling..."
  >
    {/* <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="blog">Blog</Link></h2>
        </div>
      </header>
      <Blogs data={blogs} />

    </article> */}

    <article className="post" id="blog">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="blog">Blog</Link></h2>
          <div className="link-container">
            {blogs.map((blog) => (
              <h4 key={blog.name}>
                <a href={`#${blog.name}`}>{blog.title}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Blogs data={blogs} />

    </article>

  </Main>
);

export default Blog;
