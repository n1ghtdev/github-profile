import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Profile from './Profile';
import Repositories from './Repositories';

const Wrapper = styled.main`
  display: flex;
`;

const GET_GITHUB_USER = gql`
  query getUser(
    $login: String!
    $from: DateTime
    $to: DateTime
    $cursor: String
  ) {
    user(login: $login) {
      avatarUrl
      createdAt
      email
      location
      name
      login
      repositories(
        first: 10
        orderBy: { field: CREATED_AT, direction: DESC }
        after: $cursor
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            url
            nameWithOwner
            id
            isArchived
            forkCount
            createdAt
            url
            languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
              nodes {
                name
                color
              }
            }
            issues {
              totalCount
            }
            pullRequests {
              totalCount
            }
            description
          }
        }
      }
      contributionsCollection(from: $from, to: $to) {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              color
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

function getPreviousMonthISO() {
  const date = new Date();
  date.setMonth(-1);
  date.setHours(0, 0, 0);
  return date.toISOString();
}

function getCurrentDateISO() {
  const date = new Date();
  return date.toISOString();
}

const monthAgoDate = getPreviousMonthISO();
const currentDate = getCurrentDateISO();

export default function({ name, testData }) {
  const { data, fetchMore } = useQuery(GET_GITHUB_USER, {
    variables: {
      login: name,
      from: monthAgoDate,
      to: currentDate,
    },
  });

  if (!data) return null;
  console.log(data.user);

  const { repositories, ...user } = data.user;

  return (
    <Wrapper>
      <Profile {...user} />
      <Repositories
        repositories={repositories}
        // onLoadMore={() =>
        //   fetchMore({
        //     variables: { cursor: repositories.pageInfo.endCursor },
        //     updateQuery: (previousResult, { fetchMoreResult }) => {
        //       console.log(fetchMoreResult);

        //       const newEdges = fetchMoreResult.user.repositories.edges;
        //       const pageInfo = fetchMoreResult.user.repositories.pageInfo;

        //       // return newEdges.length ? {}
        //     },
        //   })
        // }
      />
    </Wrapper>
  );
}
