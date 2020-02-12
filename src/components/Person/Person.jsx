import React from 'react';
import styled from 'styled-components';

import Header from './Header';
import InfoList from './InfoList';

const Wrapper = styled.aside`
  flex: 0 0 360px;
  background-color: ${({ theme }) => theme.backgroundAccent};
  border-radius: 4px;
  padding: 15px;
  height: 100%;
`;

function Person({
  avatarUrl,
  login,
  name,
  createdAt,
  email,
  websiteUrl,
  location,
  contributionsCollection,
  viewerIsFollowing,
}) {
  return (
    <Wrapper>
      <Header
        name={name}
        login={login}
        avatarUrl={avatarUrl}
        viewerIsFollowing={viewerIsFollowing}
      />
      <InfoList
        location={location}
        createdAt={createdAt}
        email={email}
        websiteUrl={websiteUrl}
        contributionsCollection={contributionsCollection}
      />
    </Wrapper>
  );
}

export default Person;
