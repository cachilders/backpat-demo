import React from 'react';
import { PropTypes } from 'prop-types';

function Dependency({ dep }) {
  return (
    <div>
      {
        dep.url ?
          <a className="subheader" href={dep.url} alt={dep.name}>
            {dep.name} (v {dep.version})
          </a>
        :
          <span className="subheader">{dep.name} (v {dep.version})</span>
      }
      <div className="depDesc">{dep.description}</div>
    </div>
  );
}

Dependency.propTypes = {
  dep: PropTypes.object.isRequired,
};

export default Dependency;
