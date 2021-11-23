import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../../../modules/core/components/layout/layout";
import Notes from "../../../modules/private/pages/notes/notes";
import Tasks from "../../../modules/private/pages/tasks/tasks";
import About from "../../../modules/public/about/about";
import { Redirect } from "react-router";

export const Router = () => {
    return ( 
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/notes">
          <Notes />
        </Route>
        <Route path="/support">
          <About />
        </Route>
        <Route exact path="/">
          <Redirect to="/notes" />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
  )
}