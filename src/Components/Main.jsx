import React from 'react';
import About from './About';

export default function Main() {

  return(

    <div className="mainDiv">
      <h1>Hello, I'm Heather Zurek!</h1>
      <h2>Software Developer </h2>
      <p>Portfolio coming soon.</p>
      <p>Checkout my <a href="http://www.github.com/heatherzurek">Github</a> for projects,</p>
      <p>follow me on <a href="https://twitter.com/sleepywifi">Twitter</a>,</p>
      <p>or <a href="mailto:heather.zurek@gmail.com">Email me</a>.</p>
      <About />
    </div>
  );
}
