import React from 'react';
import styled from 'styled-components';
import CommitChart from './CommitChart';

/**
 * name
 * login
 * bio
 * avatar
 * email
 * createdAt
 * location
 * url
 */

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Avatar = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 4px;
`;

const Header = styled.header``;

const Name = styled.h2`
  margin: 10px 0 5px 0;
`;

const Login = styled.span`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

function Profile({
  avatarUrl,
  login,
  name,
  createdAt,
  email,
  location,
  url,
  contributionsCollection,
}) {
  return (
    <Wrapper>
      <Avatar src={avatarUrl} alt={login} />
      <Header>
        <Name>{name}</Name>
        <Login>
          <a href={url}>@{login}</a>
        </Login>
      </Header>
      <CommitChart data={contributionsCollection.contributionCalendar.weeks} />
    </Wrapper>
  );
}

export default Profile;
