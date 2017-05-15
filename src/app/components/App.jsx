import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { hydrateDependencies } from '../actions/index.js';
import { Container } from 'semantic-ui-react';

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
