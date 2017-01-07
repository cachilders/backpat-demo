import React from 'react';
import axios from 'axios';

export default class Backpat extends React.Component {
  constructor() {
    super();

    this.state = {
      dependencies: 'this exists',
    };
  }

  conponentDidMount() {
    axios.get('/backpat')
    .then(res => {
      const dependencies = res.data;
      this.setState({ dependencies });
    });
  }

  render() {
    return (
      <div>
        {this.state.dependencies} Taco
        {/*
          dependencies ?
            <p>Loading the dependencies for this app...</p>
          :
            <pre>{dependencies}</pre>
        */}
      </div>
    );
  }
}
