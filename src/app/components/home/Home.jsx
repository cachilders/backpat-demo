import React from 'react';
import { PropTypes } from 'prop-types';
import Dependencies from '../dependencies/Dependencies';
import Description from '../description/Description';
import { Container, Grid } from 'semantic-ui-react';

function Home(props) {
  return (
    <Container fluid>
      <Grid padded>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Description />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Dependencies dependencies={props.list} />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

Home.propTypes = {
  list: PropTypes.object.isRequired,
};

export default Home;
