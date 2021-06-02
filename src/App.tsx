import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Layout, Main } from './components';
import { Home, Technologies } from './screens';


function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/technologies' component={Technologies} />
            </Switch>
          </Main>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
