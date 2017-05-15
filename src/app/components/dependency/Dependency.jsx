import React from 'react';
import { PropTypes } from 'prop-types';

function Dependency({ dep }) {
  return (
    <div>
      <a className="subheader" href={dep.url} alt={dep.name}>
        {dep.name} (v {dep.version})
      </a>
      <div className="depDesc">{dep.description}</div>
    </div>
  );
}

Dependency.propTypes = {
  dep: PropTypes.object.isRequired,
};

export default Dependency;
