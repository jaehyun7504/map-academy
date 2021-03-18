import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Layout from "./components/Layout.component";
import About from "./components/About.component";
import Notices from "./components/Notices.component";
import Articles from "./components/Articles.component";
import Lectures from "./components/Lectures.component";

function App() {
  return (
    <Layout>
      <Route
        render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              classNames="transition"
              timeout={200}
            >
              <Switch location={location}>
                <Route exact path="/">
                  <Redirect to="/about" />
                </Route>
                <Route
                  exact
                  path="/about"
                  render={(routeProps) => (
                    <div className="content">
                      <About {...routeProps} />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/notices"
                  render={(routeProps) => (
                    <div className="content">
                      <Notices {...routeProps} />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/articles"
                  render={(routeProps) => (
                    <div className="content">
                      <Articles {...routeProps} />
                    </div>
                  )}
                />
                <Route
                  exact
                  path="/lectures"
                  render={(routeProps) => (
                    <div className="content">
                      <Lectures {...routeProps} />
                    </div>
                  )}
                />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )}
      />
    </Layout>
  );
}

export default App;
