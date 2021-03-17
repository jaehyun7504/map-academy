import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout.component";
import About from "./components/About.component";
import Notices from "./components/Notices.component";
import Articles from "./components/Articles.component";
import Lectures from "./components/Lectures.component";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/about" />
        </Route>
        <Route exact path="/about" component={About} />
        <Route exact path="/notices" component={Notices} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/lectures" component={Lectures} />
      </Switch>
    </Layout>
  );
}

export default App;
