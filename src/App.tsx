import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import { Layout, Main, Loading } from './components';
import { Home, Technologies } from './screens';
import { LoadingProvider } from './context'


function App() {
  return (
    <div className="App">
      <LoadingProvider>
        <Router>
          <Loading />
          <Layout>
            <Main>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/technologies' component={Technologies} />
              </Switch>
            </Main>
          </Layout>
        </Router>
      </LoadingProvider>
    </div>
  );
}

export default App;
