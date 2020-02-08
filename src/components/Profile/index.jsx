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
  query getUser($login: String!) {
    user(login: $login) {
      bio
      avatarUrl
      company
      createdAt
      email
      followers {
        totalCount
      }
      following {
        totalCount
      }
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
        totalDiskUsage
      }
      url
      status {
        message
        emojiHTML
      }
    }
  }
`;

export default function({ name, testData }) {
  // const { data } = useQuery(GET_GITHUB_USER, {
  //   variables: { login: name },
  // });

  // if (!data) return null;
  // console.log(data.user);

  const { repositories, ...user } = testData.data.user;

  return (
    <Wrapper>
      <Profile user={user} />
      <Repositories repositories={repositories} />
    </Wrapper>
  );
}
