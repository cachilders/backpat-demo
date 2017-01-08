import React from 'react';
import axios from 'axios';
import { Icon, Message } from 'semantic-ui-react';
import Dependency from '../dependency/Dependency';

export default class Dependencies extends React.Component {
  constructor() {
    super();

    this.state = {
      dependencies: [],
    };
  }

  componentDidMount() {
    axios.get('/deps').then(res => {
      this.setState({ dependencies: res.data });
    });
  }


  render() {
    const deps = this.state.dependencies;
    return (
      <div>
        {
          deps.node ?
            <div>
              <Message icon>
                <Icon name="pointing down" />
                <Message.Content>
                  <Message.Header>By way of an introduction</Message.Header>
                  Here's an example of Backpat in use on this very page
                </Message.Content>
              </Message>
              {Object.keys(deps)
              .sort((a, b) => deps[a].downloads < deps[b].downloads ? 1 : -1)
              .map(dep => <Dependency dep={deps[dep]} />)}
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
}
