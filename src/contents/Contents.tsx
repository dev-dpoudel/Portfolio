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

    const [projects, setProjects]: any[] = useState([]);
    useEffect(() => {
      fetch("https://api.github.com/users/dev-dpoudel/repos")
        .then(data => {
          return data.json();
        })
        .then(data => {
          setProjects(data);
        })
        .catch(err => {
          console.log("Error fetching Repositories");
        });
    }, []);

    const profile = projects[0] || { "owner": {} }

    return (
      <Grid.Column inverted="true" width={10}>
        <Grid columns={14} >
          <Segment className={"contents " + props.className}>
            < Switch >
              <Route exact path="/">
                <HomePage className={props.className} profile={profile.owner} />
              </Route>
              <Route exact path="/Home">
                <HomePage className={props.className} profile={profile.owner} />
              </Route>
              <Route path="/Projects">
                <Projects className={props.className} projects={projects} />
              </Route>
              <Route path="/Contact">
                <Contact className={props.className} />
              </Route>
            </Switch>
          </Segment>
        </Grid>
      </Grid.Column>
    );
  }

export default Contents;
