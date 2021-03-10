import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import './App.scss';

import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Notices from './components/Notices/Notices';
import Articles from './components/Articles/Articles';
import Lectures from './components/Lectures/Lectures';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path="/">
            <Redirect to="/about" />
          </Route>
          <Route path="/about" component={About} />
          <Route path="/notices" component={Notices} />
          <Route path="/articles" component={Articles} />
          <Route path="/lectures" component={Lectures} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
