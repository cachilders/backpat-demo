import React, { PropTypes } from 'react';
import { List, Icon } from 'semantic-ui-react';

function Dependency({ name, url, version, description }) {
  return (
    <List.Item>
      <a className="subheader" href={url} alt={name}>
        {name} (v {version})
      </a>
      <div className="depDesc">
        {description}<br />
      </div>
    </List.Item>
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
