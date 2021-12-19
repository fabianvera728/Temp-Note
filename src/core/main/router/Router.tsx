import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../../../modules/core/components/layout/layout";
import Notes from "../../presentation/ui/pages/notes/NotesComponent";
import Tasks from "../../presentation/ui/pages/tasks/tasks";
import About from "../../presentation/ui/pages/about/about";
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