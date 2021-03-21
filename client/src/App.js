import "./App.css";
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { IsAuthProvider } from "./contexts/isAuth.context";
import { TokenProvider } from "./contexts/token.context";
import Layout from "./components/Layout.component";
import Content from "./components/Content.component";
import About from "./components/About.component";
import List from "./components/List.component";
import Notice from "./components/Notice.component";
import Article from "./components/Article.component";
import Edit from "./components/Edit.component";

function App() {
  return (
    <IsAuthProvider>
      <TokenProvider>
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
                      path="/notices/:id"
                      render={(routeProps) => (
                        <Content>
                          <Notice {...routeProps} />
                        </Content>
                      )}
                    />
                    <Route
                      exact
                      path="/notices"
                      render={(routeProps) => (
                        <Content>
                          <List type="notices" {...routeProps} />
                        </Content>
                      )}
                    />
                    <Route
                      exact
                      path="/articles/:id"
                      render={(routeProps) => (
                        <Content>
                          <Article {...routeProps} />
                        </Content>
                      )}
                    />
                    <Route
                      exact
                      path="/articles"
                      render={(routeProps) => (
                        <Content>
                          <List type="articles" {...routeProps} />
                        </Content>
                      )}
                    />
                    <Route
                      exact
                      path="/create/notices"
                      render={(routeProps) => (
                        <Content>
                          <Edit {...routeProps} />
                        </Content>
                      )}
                    />
                    <Route
                      exact
                      path="/create/articles"
                      render={(routeProps) => (
                        <Content>
                          <Edit hasImage {...routeProps} />
                        </Content>
                      )}
                    />
                    <Route
                      exact
                      path="/update/notices/:id"
                      render={(routeProps) => (
                        <Content>
                          <Edit isUpdating {...routeProps} />
                        </Content>
                      )}
                    />
                    <Route
                      exact
                      path="/update/articles/:id"
                      render={(routeProps) => (
                        <Content>
                          <Edit hasImage isUpdating {...routeProps} />
                        </Content>
                      )}
                    />
                    <Redirect to="/about" />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Layout>
      </TokenProvider>
    </IsAuthProvider>
  );
}

export default App;
