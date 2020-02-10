import React from 'react';
import styled from 'styled-components';
import Octicon, {
  Heart,
  Globe,
  Calendar,
  Mail,
  Home,
} from '@primer/octicons-react';

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
  flex: 0 0 360px;
  background-color: ${({ theme }) => theme.backgroundAccent};
  border-radius: 4px;
  padding: 15px;
`;

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 4px;
`;

const Header = styled.header`
  display: flex;
`;

const Intro = styled.div`
  margin-left: 20px;
  position: relative;
`;

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

const Followed = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 28px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.secondary};

  color: ${({ theme }) => theme.background};
  font-weight: bold;
`;

const StyledOcticon = styled(Octicon)`
  margin-right: 20px;
  transform: scale(1.3);
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: ${({ theme }) => theme.background};
  border-radius: 4px;
  padding: 10px 20px;
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const ItemIcon = styled.span`
  margin-right: 20px;

  svg {
    transform: scale(1.2);
  }
`;

function Profile({
  avatarUrl,
  login,
  name,
  createdAt,
  email,
  websiteUrl,
  location,
  url,
  contributionsCollection,
}) {
  return (
    <Wrapper>
      <Header>
        <Avatar src={avatarUrl} alt={login} />
        <Intro>
          <Name>{name}</Name>
          <Login>
            <a href={url}>@{login}</a>
          </Login>
          <Followed>
            <StyledOcticon icon={Heart} />
            FOLLOWED
          </Followed>
        </Intro>
      </Header>
      <List>
        <ListItem>
          <ItemIcon>
            <Octicon icon={Globe} />
          </ItemIcon>
          {location}
        </ListItem>
        <ListItem>
          <ItemIcon>
            <Octicon icon={Calendar} />
          </ItemIcon>
          {new Date(createdAt).toLocaleDateString()}
        </ListItem>
        {email && (
          <ListItem>
            <ItemIcon>
              <Octicon icon={Mail} />
            </ItemIcon>
            {email}
          </ListItem>
        )}
        {websiteUrl && (
          <ListItem>
            <ItemIcon>
              <Octicon icon={Home} />
            </ItemIcon>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              {websiteUrl}
            </a>
          </ListItem>
        )}
        <ListItem>
          <div>Activity in last month</div>
          <CommitChart
            data={contributionsCollection.contributionCalendar.weeks}
          />
        </ListItem>
      </List>
    </Wrapper>
  );
}

export default Profile;
