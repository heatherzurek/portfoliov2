import React from 'react';
import { Link } from 'react-router-dom'
import Projects from './Projects';

export default function About() {
  return(
    <div>
      <h2>Software Developer </h2>
      <br></br>
      <p>Portfolio coming soon.</p>
      <p>Checkout my <a href="http://www.github.com/heatherzurek">Github</a>, view my <Link to="/projects">Projects</Link>,</p>
      <p>follow me on <a href="https://twitter.com/sleepywifi">Twitter</a>,</p>
      <p>or <a href="mailto:heather.zurek@gmail.com">Email me</a>.</p>
      <p>I am a full stack software developer with a passion for developing
      creative and accessible solutions to complex problems. My
      background in sales and customer success has given me a solid
      combination of communication and collaboration skills that gives
      me a unique approach to development.</p>
    </div>

  );
}
