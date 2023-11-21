import React from "react";
import {
  Route,
  HashRouter as Router,
  Switch,
} from "react-router-dom";
import './App.css';
import {ROUTER} from "./utils/constants";
import Layout from "./components/layout";
import Page from "./page/Page";

const App = () => {
  return (
      <Router>
        <Switch>
          <Layout>
            <Route exact path={ROUTER.PAGE} component={Page}/>
          </Layout>
        </Switch>
      </Router>
  );
}

export default App;
