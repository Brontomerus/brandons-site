import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Brandon Donelan</h2>
        <p><a href="mailto:brandon.donelan@outlook.com">brandon.donelan@outlook.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Brandon. I like data.
        I am an <a href="https://osu.edu/">Ohio State University</a> graduate, currently serve as
        the Director of Analytics for <a href="https://www.shakeitupdice.com/">Deck of Dice Gaming</a>, and
        as a Data Engineer at <a href="https://revspringinc.com/">RevSpring Inc</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Brandon Donelan <Link to="/">brandon-donelan.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
