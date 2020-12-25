import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigate from './contents/Navigation';
import Contents from './contents/Contents';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const App: FunctionComponent<{}> = () => {
  return (
    <Router>
      <Grid columns={16}>
        <Navigate />
        <Contents className="Dark" />
      </Grid>
    </Router>
  );
}

export default App;
