import React from 'react';
import Dependencies from '../dependencies/Dependencies';
import Description from '../description/Description';
import { Container, Grid } from 'semantic-ui-react';

function Home() {
  return (
    <Container fluid>
      <Grid padded>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Description />
        </Grid.Column>
        <Grid.Column mobile={16} tablet={16} computer={8}>
          <Dependencies />
        </Grid.Column>
      </Grid>
    </Container>
  );
}

export default Home;
