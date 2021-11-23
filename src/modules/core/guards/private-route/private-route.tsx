import { ReactChild } from "react";
import { Route } from "react-router-dom";
import { isAuthenticated } from "../../services/storage/storage";
import { Redirect } from "react-router";

type PropsRoute = {
  children: ReactChild;
  path?: string;
  exact?: boolean;
};

const PrivateRoute = (props: PropsRoute) => {
  return isAuthenticated() ? (
    <Route path={props.path}>{props.children}</Route>
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
