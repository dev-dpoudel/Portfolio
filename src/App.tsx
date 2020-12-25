import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigate from './contents/Navigation';
import Contents from './contents/Contents';
import { Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const App: FunctionComponent<{}> = () => {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = (mode : boolean) => {
    setTheme(mode == true ? "dark" : "light")
  }

  return (
    <Router>
      <Grid columns={2}>
        <Navigate className={theme} theme = {theme == "dark"} toggleTheme= {toggleTheme}/>
        <Contents className={theme} />
      </Grid>
    </Router>
  );
}

export default App;
