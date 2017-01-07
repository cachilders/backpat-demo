import React from 'react';

export default class Dependency extends React.Component {
  render() {
    const dep = this.props.dep;
    return (
      <li className="li-dep">
        <a href={dep.url}>{dep.name}</a>
      </li>
    );
  }
}
