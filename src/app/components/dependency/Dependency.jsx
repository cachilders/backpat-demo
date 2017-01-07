import React from 'react';

export default class Dependency extends React.Component {
  render() {
    const dep = this.props.dep;
    return (
      <p>
        <a href={dep.url}>{dep.name}</a><br />
        {dep.description}
      </p>
    );
  }
}
