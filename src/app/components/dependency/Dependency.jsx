import React from 'react';

export default class Dependency extends React.Component {
  render() {
    const dep = this.props.dep;
    return (
      <p>
        <a className="subheader" href={dep.url} alt={dep.name}>
          {dep.name} (v {dep.version})
        </a>
        <div className="depDesc">{dep.description}</div>
      </p>
    );
  }
}
