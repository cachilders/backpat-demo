import React, { PropTypes } from 'react';
import { Comment } from 'semantic-ui-react';

function Dependency({ name, url, version, description }) {
  return (
    <Comment>
      <Comment.Content>
        <Comment.Author as="a" href={url} alt={name}>
          {name}
        </Comment.Author>
        <Comment.Metadata>
          <span>v{version}</span>
        </Comment.Metadata>
        <Comment.Text>
          <p>{description}</p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
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
