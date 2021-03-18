import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Layout from "./components/Layout.component";
import Content from "./components/Content.component";
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
              classNames="Content"
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
                    <Content>
                      <About {...routeProps} />
                    </Content>
                  )}
                />
                <Route
                  exact
                  path="/notices"
                  render={(routeProps) => (
                    <Content>
                      <Notices {...routeProps} />
                    </Content>
                  )}
                />
                <Route
                  exact
                  path="/articles"
                  render={(routeProps) => (
                    <Content>
                      <Articles {...routeProps} />
                    </Content>
                  )}
                />
                <Route
                  exact
                  path="/lectures"
                  render={(routeProps) => (
                    <Content>
                      <Lectures {...routeProps} />
                    </Content>
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
