import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, Segment } from 'semantic-ui-react'
import { route } from "./Routes";

interface ContentProps {
  className: string
}

const Contents: FunctionComponent<ContentProps> =
  (props: ContentProps): React.ReactElement => {

    return (
      <Grid.Column inverted= "true" floated="right" width={14}>
        <Grid stackable columns={14}>
          <Segment>
            < Switch >
              {
                route.map((route, i) => (
                  <Route key={i}
                    exact path={route.path}
                    children={route.component} />))
              }
            </Switch>
          </Segment>
        </Grid>
      </Grid.Column>
    );
  }

export default Contents;
