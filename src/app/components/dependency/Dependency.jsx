import React, { PropTypes } from 'react';

function Dependency({ name, url, version, description, downloads }) {
  return (
    <div>
      <a className="subheader" href={url} alt={name}>
        {name} (v {version})
      </a>
      <div className="depDesc">{description}</div>
    </div>
  );
}

Dependency.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  version: PropTypes.string,
  description: PropTypes.string,
  downloads: PropTypes.number,
};

export default Dependency;
