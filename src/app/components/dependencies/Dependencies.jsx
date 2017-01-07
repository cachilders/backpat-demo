import React from 'react';
import axios from 'axios';
import Dependency from '../dependency/Dependency';

export default class Dependencies extends React.Component {
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
    const deps = this.state.dependencies;
    return (
      <div>
        {
          deps.node ?
            Object.keys(deps)
            .sort((a, b) => deps[a].downloads < deps[b].downloads ? 1 : -1)
            .map(dep => <Dependency dep={deps[dep]} />)
          :
            <p><img src="images/spinner.gif" alt="data loading spinner" /></p>
        }
      </div>
    );
  }
}
