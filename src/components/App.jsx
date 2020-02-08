import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Layout from './Layout';
import SearchBar from './SearchBar';
import Profile from './Profile';

const GET_SEARCH_QUERY = gql`
  {
    searchQuery @client
  }
`;
const testData = {
  data: {
    user: {
      bio: '',
      avatarUrl: 'https://avatars0.githubusercontent.com/u/17097898?v=4',
      company: null,
      createdAt: '2016-02-06T13:48:22Z',
      email: '',
      followers: { totalCount: 1, __typename: 'FollowerConnection' },
      following: { totalCount: 0, __typename: 'FollowingConnection' },
      location: 'Kyiv, Ukraine',
      name: 'Nikita',
      login: 'n1ghtdev',
      repositories: {
        totalCount: 20,
        nodes: [
          {
            url: 'https://github.com/n1ghtdev/react-poll',
            nameWithOwner: 'n1ghtdev/react-poll',
            id: 'MDEwOlJlcG9zaXRvcnkyMzMzOTI4MjM=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2020-01-12T12:58:20Z',
            languages: {
              nodes: [
                {
                  name: 'TypeScript',
                  color: '#2b7489',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 0,
              __typename: 'PullRequestConnection',
            },
            description: null,
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/n1ghtdev/scroll-editor',
            nameWithOwner: 'n1ghtdev/scroll-editor',
            id: 'MDEwOlJlcG9zaXRvcnkyMjk1NzY5MjQ=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2019-12-22T14:04:46Z',
            languages: {
              nodes: [
                {
                  name: 'TypeScript',
                  color: '#2b7489',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 0,
              __typename: 'PullRequestConnection',
            },
            description: 'Scroll generator with live preview and styles',
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/n1ghtdev/test-shop',
            nameWithOwner: 'n1ghtdev/test-shop',
            id: 'MDEwOlJlcG9zaXRvcnkyMjY5NzYwODM=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2019-12-09T21:59:32Z',
            languages: {
              nodes: [
                { name: 'HTML', color: '#e34c26', __typename: 'Language' },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 0,
              __typename: 'PullRequestConnection',
            },
            description: null,
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/n1ghtdev/spacex-launch-app',
            nameWithOwner: 'n1ghtdev/spacex-launch-app',
            id: 'MDEwOlJlcG9zaXRvcnkyMjA4MDc2NTU=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2019-11-10T15:14:42Z',
            languages: {
              nodes: [
                {
                  name: 'JavaScript',
                  color: '#f1e05a',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 0,
              __typename: 'PullRequestConnection',
            },
            description: null,
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/n1ghtdev/twitch-stats-app',
            nameWithOwner: 'n1ghtdev/twitch-stats-app',
            id: 'MDEwOlJlcG9zaXRvcnkyMTc1NTQyNjA=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2019-10-25T14:41:55Z',
            languages: {
              nodes: [
                {
                  name: 'TypeScript',
                  color: '#2b7489',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 0,
              __typename: 'PullRequestConnection',
            },
            description:
              'Twitch API web application to show statistics of a user.',
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/foresteighteen/project-tgi',
            nameWithOwner: 'foresteighteen/project-tgi',
            id: 'MDEwOlJlcG9zaXRvcnkyMDk1ODcwMDI=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2019-09-19T15:22:37Z',
            languages: {
              nodes: [
                {
                  name: 'JavaScript',
                  color: '#f1e05a',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 31,
              __typename: 'PullRequestConnection',
            },
            description: null,
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/n1ghtdev/awesome-todo-app',
            nameWithOwner: 'n1ghtdev/awesome-todo-app',
            id: 'MDEwOlJlcG9zaXRvcnkxOTU1NDA5MzA=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2019-07-06T13:11:52Z',
            languages: {
              nodes: [
                {
                  name: 'JavaScript',
                  color: '#f1e05a',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 2,
              __typename: 'PullRequestConnection',
            },
            description: 'React Native task/todo application',
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/n1ghtdev/react-starter-kit',
            nameWithOwner: 'n1ghtdev/react-starter-kit',
            id: 'MDEwOlJlcG9zaXRvcnkxOTA0NDg4Njk=',
            isArchived: true,
            forkCount: 1,
            createdAt: '2019-06-05T18:36:57Z',
            languages: {
              nodes: [
                {
                  name: 'JavaScript',
                  color: '#f1e05a',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 1,
              __typename: 'PullRequestConnection',
            },
            description:
              'react-starter-kit with redux, redux-saga, react-router, styled-component and material-ui',
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/n1ghtdev/encode',
            nameWithOwner: 'n1ghtdev/encode',
            id: 'MDEwOlJlcG9zaXRvcnkxODQxNzY1ODA=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2019-04-30T02:22:56Z',
            languages: {
              nodes: [
                {
                  name: 'JavaScript',
                  color: '#f1e05a',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 4,
              __typename: 'PullRequestConnection',
            },
            description:
              'Encrypt your text data with symmetric and asymmetric algorithms.',
            __typename: 'Repository',
          },
          {
            url: 'https://github.com/n1ghtdev/weather-web-app',
            nameWithOwner: 'n1ghtdev/weather-web-app',
            id: 'MDEwOlJlcG9zaXRvcnkxODE1NTA3MjM=',
            isArchived: false,
            forkCount: 0,
            createdAt: '2019-04-15T19:16:15Z',
            languages: {
              nodes: [
                {
                  name: 'JavaScript',
                  color: '#f1e05a',
                  __typename: 'Language',
                },
              ],
              __typename: 'LanguageConnection',
            },
            issues: { totalCount: 0, __typename: 'IssueConnection' },
            pullRequests: {
              totalCount: 5,
              __typename: 'PullRequestConnection',
            },
            description: 'Weather forecast React application',
            __typename: 'Repository',
          },
        ],
        totalDiskUsage: 90866,
        __typename: 'RepositoryConnection',
      },
      url: 'https://github.com/n1ghtdev',
      status: {
        message: 'Focusing',
        emojiHTML:
          '<div><g-emoji class="g-emoji" alias="dart" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f3af.png">🎯</g-emoji></div>',
        __typename: 'UserStatus',
      },
      __typename: 'User',
    },
  },
};
function App() {
  const { data } = useQuery(GET_SEARCH_QUERY);
  console.log(data);

  return (
    <Layout>
      <SearchBar />
      <Profile name={data.searchQuery} testData={testData} />
    </Layout>
  );
}

export default App;
