import React from 'react';

function Description() {
  return (
    <div>
      <h1>Backpat ✋</h1>
      <p className="subhead">
        A simple tool for high-fiving your tech stack
      </p>
      <p>
        <a href="https://travis-ci.org/cachilders/backpat" className="shield">
          <img src="https://travis-ci.org/cachilders/backpat.svg?branch=master" alt="Build Status" />
        </a>
        &nbsp;
        <a href="https://coveralls.io/github/cachilders/backpat" className="shield">
          <img src="https://img.shields.io/coveralls/cachilders/backpat.svg" alt="Coverage Status" />
        </a>
      </p>
      <p>
        Backpat is a simple tool for use in automating the production of tech stack
        notes in projects. Think along the lines of About pages with links for crediting
        community contributions to your codebase. (Looking at you, student developers.)
      </p>
      <p>Install it as such:</p>
      <pre>
        <code className="language-bash">$ npm install --save backpat</code>
      </pre>
      <p>Require it like so:</p>
      <pre>
        <code className="language-javascript">
          const backpat = require('backpat').backpat;
        </code>
      </pre>
      <p>
        <strong>As of v0.6.0</strong>: Invoke it thusly:
      </p>
      <pre>
        <code className="language-javascript">
          backpat().then('do stuff with it here');
        </code>
      </pre>
      <p>
        And it will parse your project’s <code>package.json</code>, identifying all production
        and developer dependencies and fetching the particulars of each. <strong>What you’ll
        get back is a promise</strong> that will eventually resolve into an object containing
        a handful of choice properties.
      </p>
      <pre>
        <code className="language-javascript">
          <div>{'{'} eslint:</div>
          <div>  {'{'} version: '3.8.1',</div>
          <div>    name: 'eslint',</div>
          <div>    url: 'https://github.com/eslint/eslint.git',</div>
          <div>    description: 'An AST-based pattern checker for JavaScript.',</div>
          <div>    downloads: 4038383 {'}'},</div>
          <div>  mocha:</div>
          <div>  {'{'} version: '3.1.2',</div>
          <div>    name: 'mocha',</div>
          <div>    url: 'https://github.com/mochajs/mocha.git',</div>
          <div>    description: 'simple, flexible, fun test framework',</div>
          <div>    downloads: 4001598 {'}}'}</div>
        </code>
      </pre>
      <p>
        Simple as that. The npm download count attribute makes ranking and filtering the
        results a snap.
      </p>
      <p>
        That’s it. <a href="https://github.com/cachilders/backpat" alt="Backpat's GitHub repo">
        Feel free to submit an issue or PR</a>.
      </p>
      <p>
        Oh, also here's the source for <a href="https://github.com/cachilders/backpat-demo">
        this demo site</a>. Please take a peak, kick the tires, and tune at will.
      </p>
    </div>
  );
}

export default Description;
