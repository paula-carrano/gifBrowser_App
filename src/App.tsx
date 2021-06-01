import React from 'react';
import { Layout, Main } from './components';
import { Home } from './components/screens';


function App() {
  return (
    <div className="App">
      <Layout>
        <Main>
          <Home />
        </Main>
      </Layout>
    </div>
  );
}

export default App;
