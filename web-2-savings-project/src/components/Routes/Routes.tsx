import React from "react";
import { Route, Switch } from "react-router-dom";
import { R } from "../../constants";
import { ReadProjects } from "../../pages/ReadProjects";
import { ReadProject } from "../../pages/ReadProject";
import { PickersProjectsBUs } from "../../pages/PickersProjectsBUs";

export const Routes: React.SFC<{}> = () => {
  return (
    <Switch>
      <Route exact path={R.PROJECTS} component={ReadProjects} />
      <Route exact path={R.PROJECT} component={ReadProject} />
      <Route exact path="/test" component={PickersProjectsBUs} />
    </Switch>
  );
};
