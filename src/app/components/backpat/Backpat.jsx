import React from 'react';
import axios from 'axios';

export default class Backpat extends React.Component {
  constructor() {
    super();

    this.state = {
      dependencies: [],
    };
  }

  componentDidMount() {
    axios.get('/deps').then(res => {
      this.setState({ dependencies: res.data });
    });
  }


  render() {
    return (
      <div>
        {
          this.state.dependencies ?
            Object.keys(this.state.dependencies).map(dep => <p>{dep}</p>)
          :
            <p>Loading the dependencies for this app...</p>
        }
      </div>
    );
  }
}
