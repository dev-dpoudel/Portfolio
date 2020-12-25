import React, { FunctionComponent, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react'
import HomePage from './Home';
import Contact from './Contact'
import Projects from './Projects';

interface ContentProps {
  className: string
}

const Contents: FunctionComponent<ContentProps> =
  (props: ContentProps): React.ReactElement => {

    const [projects, setProjects] : any [] = useState([]);
    useEffect(() => {
      fetch("https://api.github.com/users/dev-dpoudel/repos")
        .then(data => {
          return data.json();
        })
        .then(data => {
          console.log(data)
          setProjects(data);
        })
        .catch(err => {
          console.log("Error fetching Repositories");
        });
    }, []);

    return (
      <Grid.Column inverted="true" floated="right" width={14}>
        <Grid stackable columns={14}>
          <Segment>
            < Switch >
            <Route exact path="/">
                <HomePage className="Dark" />
              </Route>
              <Route exact path="/Home">
                <HomePage className="Dark" />
              </Route>
              <Route path="/Projects">
                <Projects className="Dark" projects= {projects} />
              </Route>
              <Route path="/Contact">
                <Contact className="Dark"/>
              </Route>
            </Switch>
          </Segment>
        </Grid>
      </Grid.Column>
    );
  }

export default Contents;
