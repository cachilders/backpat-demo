import React from 'react';
import Dependencies from '../dependencies/Dependencies';
import Description from '../description/Description';
import { Grid } from 'semantic-ui-react';

function Home() {
  return (
    <div className="container home">
      <div>
        <Grid padded>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Description />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <Dependencies />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
}

export default Home;
