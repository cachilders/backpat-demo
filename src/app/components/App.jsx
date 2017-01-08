import React, { PropTypes } from 'react';
import { Container } from 'semantic-ui-react';

function App({ children }) {
  return (
    <Container fluid children={children} />
  );
}

App.propTypes = { children: PropTypes.object };

export default App;
