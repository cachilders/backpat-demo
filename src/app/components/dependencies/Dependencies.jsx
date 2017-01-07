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
          deps ?
            <ul className="ul-deps">
              {Object.keys(deps).map(dep => <Dependency dep={deps[dep]} />)}
            </ul>
          :
            <p>loading...</p>
        }
      </div>
    );
  }
}
