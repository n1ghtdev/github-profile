import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import SearchBar from './SearchBar';
import Profile from './Profile';

function App() {
  return (
    <Layout>
      <SearchBar />
      <Switch>
        <Route exact path="/user/:name" component={Profile} />
        {/* <Route exact path="/org/:name" component={} /> */}
      </Switch>
    </Layout>
  );
}

export default App;
