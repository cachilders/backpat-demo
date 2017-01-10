import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { hydrateDependencies } from '../actions/index.js';

class App extends Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(hydrateDependencies());
  }

  render() {
    return (
      <Container fluid>
        {React.cloneElement(this.props.children, { ...this.props })}
      </Container>
    );
  }
}

App.propTypes = {
  children: PropTypes.object,
  fetching: PropTypes.bool.isRequired,
  list: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { list, fetching } = state.dependencies;
  return {
    fetching,
    list,
  }
}

export default connect(mapStateToProps)(App);
