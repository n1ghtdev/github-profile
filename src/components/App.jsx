import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import Layout from './Layout';
import SearchBar from './SearchBar';
import Profile from './Profile';

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  margin-top: 120px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
`;

function App() {
  const { pathname } = useLocation();
  const isStartPage = pathname === '/';

  return (
    <Layout>
      {isStartPage ? <Title>Search for GitHub profile</Title> : null}
      <SearchBar />
      <Switch>
        <Route exact path="/user/:name" component={Profile} />
      </Switch>
    </Layout>
  );
}

export default App;
