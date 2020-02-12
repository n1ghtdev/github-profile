import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { useParams } from 'react-router-dom';
import Person from './Person';
import Repos from './Repos';

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
      websiteUrl
      viewerIsFollowing
      repositories(
        first: 10
        orderBy: { field: UPDATED_AT, direction: DESC }
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
            nameWithOwner
            name
            id
            forkCount
            createdAt
            stargazers {
              totalCount
            }
            primaryLanguage {
              color
              name
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

function Profile() {
  const { name } = useParams();
  console.log(monthAgoDate, currentDate);

  const { data, networkStatus, fetchMore } = useQuery(GET_GITHUB_USER, {
    variables: {
      login: name,
      from: monthAgoDate,
      to: currentDate,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (!data) return null;

  const { repositories, ...user } = data.user;

  return (
    <Wrapper>
      <Person {...user} />
      <Repos
        repos={repositories}
        status={networkStatus}
        onLoadMore={() =>
          fetchMore({
            variables: {
              cursor: repositories.pageInfo.endCursor,
            },
            updateQuery: (previousResult, { fetchMoreResult }) => {
              const newEdges = fetchMoreResult.user.repositories.edges;
              const pageInfo = fetchMoreResult.user.repositories.pageInfo;

              return newEdges.length
                ? {
                    user: {
                      ...previousResult.user,
                      repositories: {
                        __typename: previousResult.user.repositories.__typename,
                        edges: [
                          ...previousResult.user.repositories.edges,
                          ...newEdges,
                        ],
                        pageInfo,
                      },
                    },
                  }
                : previousResult;
            },
          })
        }
      />
    </Wrapper>
  );
}

export default Profile;
