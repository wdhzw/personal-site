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
        <h2>ZHIWEN HUANG</h2>
        <p><a href="mailto:zhiwen.huang@u.nus.edu">zhiwen.huang@u.nus.edu</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>I am currently a <a href="https://www.comp.nus.edu.sg/programmes/pg/mcomp-gen/">NUS MComp</a> student.
        Previously, I graduated from <a href="https://cde.nus.edu.sg/ece/">ECE, NUS</a>, where I specialized in
        the Research Focus Pathway and graduated with the highest distinction.
        I am passionate about developing innovative solutions in machine learning and
        software development.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Zhiwen Huang <Link to="/">zhiwen.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
