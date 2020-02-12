import React from 'react';
import styled from 'styled-components';
import Octicon, { Globe, Calendar, Mail, Home } from '@primer/octicons-react';
import CommitChart from './CommitChart';

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

function InfoList({
  location,
  createdAt,
  email,
  websiteUrl,
  contributionsCollection,
}) {
  return (
    <List>
      {location && (
        <ListItem>
          <ItemIcon>
            <Octicon icon={Globe} />
          </ItemIcon>
          {location}
        </ListItem>
      )}
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
      {contributionsCollection && (
        <ListItem>
          <div>Activity in last month</div>
          <CommitChart
            data={contributionsCollection.contributionCalendar.weeks}
          />
        </ListItem>
      )}
    </List>
  );
}

export default InfoList;
