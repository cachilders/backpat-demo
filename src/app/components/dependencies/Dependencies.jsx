import React, { PropTypes } from 'react';
import { Icon, Message, Comment } from 'semantic-ui-react';
import Dependency from '../dependency/Dependency';

function Dependencies({ list }) {
  return (
    <div>
      {
        list.node ?
          <div>
            <Message icon>
              <Icon name="pointing down" />
              <Message.Content>
                <Message.Header>By way of an introduction</Message.Header>
                Here's an example of Backpat in use on this very page
              </Message.Content>
            </Message>
            <Comment.Group minimal>
              {
                Object.keys(list)
                  .sort(
                    (a, b) => list[a].downloads < list[b].downloads ? 1 : -1
                  )
                  .map(dep => <Dependency key={list[dep].name} {...list[dep]} />)
              }
            </Comment.Group>
          </div>
        :
          <Message icon>
            <Icon name="asterisk" loading />
            <Message.Content minimal>
              <Message.Header>Just a sec</Message.Header>
              We're scoping out the app's package.json
            </Message.Content>
          </Message>
      }
    </div>
  );
}

Dependencies.propTypes = {
  list: PropTypes.object,
};

export default Dependencies;
