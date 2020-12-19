import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import { route } from "./Routes";

interface ContentProps {
  className: string
}

const Contents: FunctionComponent<ContentProps> =
  (props: ContentProps): React.ReactElement => {

    return (
      <div>
        Example Request
      < Switch >
          {
            route.map((route, i) => (
              <Route key={i}
                exact path={route.path}
                children={route.component} />))
          }
        </Switch>
      </div>
    );
  }

export default Contents;
