import React from 'react';
import { PropTypes } from 'prop-types';
import { Icon, Message } from 'semantic-ui-react';
import Dependency from '../dependency/Dependency';

function Dependencies({ dependencies }) {
  return (
    <div>
      {
        dependencies.node ?
          <div>
            <Message icon>
              <Icon name="pointing down" />
              <Message.Content>
                <Message.Header>By way of an introduction</Message.Header>
                Here's an example of Backpat in use on this very page
              </Message.Content>
            </Message>
            {Object.keys(dependencies)
            .sort((a, b) => dependencies[a].downloads < dependencies[b].downloads ? 1 : -1)
            .map(dep => <Dependency key={dependencies[dep].name} dep={dependencies[dep]} />)}
          </div>
        :
          <Message icon>
            <Icon name="asterisk" loading />
            <Message.Content>
              <Message.Header>Just a sec</Message.Header>
              We're scoping out the app's package.json
            </Message.Content>
          </Message>
      }
    </div>
  );
}

Dependencies.propTypes = {
  dependencies: PropTypes.object.isRequired,
};

export default Dependencies;
