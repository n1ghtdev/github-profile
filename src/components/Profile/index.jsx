import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Profile from './Profile';
import Repositories from './Repositories';

const Wrapper = styled.main``;

const GET_GITHUB_USER = gql`
  query getUser($login: String!) {
    user(login: $login) {
      avatarUrl
      createdAt
      email
      location
      name
      login
      repositories(first: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
        totalCount
        nodes {
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
      contributionsCollection(
        from: "2020-01-08T22:00:00.000Z"
        to: "2020-02-09T22:00:00.000Z"
      ) {
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

export default function({ name, testData }) {
  const { data } = useQuery(GET_GITHUB_USER, {
    variables: { login: name },
  });

  if (!data) return null;
  console.log(data.user);

  const { repositories, ...user } = data.user;

  return (
    <Wrapper>
      <Profile {...user} />
      <Repositories repositories={repositories} />
    </Wrapper>
  );
}
