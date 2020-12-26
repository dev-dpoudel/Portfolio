import React, { FunctionComponent, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigate from './contents/Navigation';
import Contents from './contents/Contents';
import { Grid } from 'semantic-ui-react'

const App: FunctionComponent<{}> = () => {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = (mode: boolean) => {
    setTheme(mode === true ? "dark" : "light")
  }

  return (
    <Router>
      <div className="adjustcenter">
        <Grid columns={2}>
          <Navigate className={theme} theme={theme === "dark"} toggleTheme={toggleTheme} />
          <Contents className={theme} />
        </Grid>
      </div>
    </Router>
  );
}

export default App;
