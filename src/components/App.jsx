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
  avatarUrl: 'https://avatars0.githubusercontent.com/u/2942184?v=4',
  createdAt: '2012-12-02T03:24:07Z',
  websiteUrl: 'https://github.com/test',
  email: '',
  location: 'San Francisco Bay Area',
  name: 'Zack',
  login: 'night',
  repositories: {
    totalCount: 21,
    pageInfo: {
      endCursor: 'Y3Vyc29yOnYyOpK5MjAxNi0xMC0xMFQwOTowNDoxMCswMzowMM4EMxW1',
      hasNextPage: true,
      __typename: 'PageInfo',
    },
    edges: [
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxOS0wOS0wM1QwMjo1NDo0NiswMzowMM4MRpmX',
        node: {
          url: 'https://github.com/night/vpncloud',
          nameWithOwner: 'night/vpncloud',
          id: 'MDEwOlJlcG9zaXRvcnkyMDU5NTM0MzE=',
          isArchived: false,
          forkCount: 0,
          createdAt: '2019-09-02T23:54:46Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 0, __typename: 'PullRequestConnection' },
          description: 'Peer-to-peer VPN',
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxOS0wNC0wMlQwMDoyMzoyNiswMzowMM4Kqovo',
        node: {
          url: 'https://github.com/night/authlib',
          nameWithOwner: 'night/authlib',
          id: 'MDEwOlJlcG9zaXRvcnkxNzg5NDkwOTY=',
          isArchived: false,
          forkCount: 0,
          createdAt: '2019-04-01T21:23:26Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 0, __typename: 'PullRequestConnection' },
          description:
            'The ultimate Python library in building OAuth and OpenID Connect servers. JWS,JWE,JWK,JWA,JWT included.',
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxOC0wNi0zMFQwMTo0Nzo0NCswMzowMM4ITA-e',
        node: {
          url: 'https://github.com/night/cloudsql-proxy',
          nameWithOwner: 'night/cloudsql-proxy',
          id: 'MDEwOlJlcG9zaXRvcnkxMzkyMDI0NjI=',
          isArchived: false,
          forkCount: 0,
          createdAt: '2018-06-29T22:47:44Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 0, __typename: 'PullRequestConnection' },
          description: null,
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxOC0wNS0wNVQxMjoyMzozMCswMzowMM4H4bfI',
        node: {
          url: 'https://github.com/night/node-eventsource',
          nameWithOwner: 'night/node-eventsource',
          id: 'MDEwOlJlcG9zaXRvcnkxMzIyMzMxNjA=',
          isArchived: false,
          forkCount: 0,
          createdAt: '2018-05-05T09:23:30Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 0, __typename: 'PullRequestConnection' },
          description:
            "an eventsource client lib that doesn't suffer from autoreconnection issues",
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxNy0wNy0xM1QyMToyMDozNCswMzowMM4Fym8F',
        node: {
          url: 'https://github.com/discordapp/discord-rpc',
          nameWithOwner: 'discordapp/discord-rpc',
          id: 'MDEwOlJlcG9zaXRvcnk5NzE1Mjc3Mw==',
          isArchived: true,
          forkCount: 162,
          createdAt: '2017-07-13T18:20:34Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 204, __typename: 'IssueConnection' },
          pullRequests: {
            totalCount: 101,
            __typename: 'PullRequestConnection',
          },
          description: null,
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxNy0wNS0wOFQyMjozNTo0MyswMzowMM4FZ3IA',
        node: {
          url: 'https://github.com/night/discord-reddit-sync',
          nameWithOwner: 'night/discord-reddit-sync',
          id: 'MDEwOlJlcG9zaXRvcnk5MDY2NTQ3Mg==',
          isArchived: false,
          forkCount: 0,
          createdAt: '2017-05-08T19:35:43Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 0, __typename: 'PullRequestConnection' },
          description: 'Syncs your Discord and Reddit accounts for dat flair',
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxNy0wNS0wMVQyMToyODo0OCswMzowMM4FXInc',
        node: {
          url: 'https://github.com/discordapp/fasthttp',
          nameWithOwner: 'discordapp/fasthttp',
          id: 'MDEwOlJlcG9zaXRvcnk4OTk1MDY4NA==',
          isArchived: false,
          forkCount: 1,
          createdAt: '2017-05-01T18:28:48Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 6, __typename: 'PullRequestConnection' },
          description:
            'Fast HTTP package for Go. Tuned for high performance. Zero memory allocations in hot paths. Up to 10x faster than net/http',
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxNy0wNC0yOVQwNzoyMjo0NyswMzowMM4FWa4a',
        node: {
          url: 'https://github.com/night/docs-travis-ci-com',
          nameWithOwner: 'night/docs-travis-ci-com',
          id: 'MDEwOlJlcG9zaXRvcnk4OTc2MzM1NA==',
          isArchived: false,
          forkCount: 0,
          createdAt: '2017-04-29T04:22:47Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 0, __typename: 'PullRequestConnection' },
          description: 'The Travis CI Documentation',
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxNy0wMi0xNVQyMjoyNTo1NiswMjowMM4E5Mth',
        node: {
          url: 'https://github.com/discordapp/redis-py',
          nameWithOwner: 'discordapp/redis-py',
          id: 'MDEwOlJlcG9zaXRvcnk4MjEwMzEzNw==',
          isArchived: false,
          forkCount: 1,
          createdAt: '2017-02-15T20:25:56Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 2, __typename: 'PullRequestConnection' },
          description: 'Redis Python Client',
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
      {
        cursor: 'Y3Vyc29yOnYyOpK5MjAxNi0xMC0xMFQwOTowNDoxMCswMzowMM4EMxW1',
        node: {
          url: 'https://github.com/night/travis-hub',
          nameWithOwner: 'night/travis-hub',
          id: 'MDEwOlJlcG9zaXRvcnk3MDQ1Njc1Nw==',
          isArchived: false,
          forkCount: 0,
          createdAt: '2016-10-10T06:04:10Z',
          languages: { nodes: [], __typename: 'LanguageConnection' },
          issues: { totalCount: 0, __typename: 'IssueConnection' },
          pullRequests: { totalCount: 0, __typename: 'PullRequestConnection' },
          description:
            'Processes Job state updates from Travis Worker, as well as enqueuing Jobs. ',
          __typename: 'Repository',
        },
        __typename: 'RepositoryEdge',
      },
    ],
    __typename: 'RepositoryConnection',
  },
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: 190,
      weeks: [
        {
          contributionDays: [
            {
              color: '#7bc96f',
              contributionCount: 7,
              date: '2019-12-09',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2019-12-10',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2019-12-11',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 4,
              date: '2019-12-12',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 4,
              date: '2019-12-13',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2019-12-14',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#c6e48b',
              contributionCount: 3,
              date: '2019-12-15',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 4,
              date: '2019-12-16',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#239a3b',
              contributionCount: 8,
              date: '2019-12-17',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2019-12-18',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 5,
              date: '2019-12-19',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 4,
              date: '2019-12-20',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2019-12-21',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#c6e48b',
              contributionCount: 3,
              date: '2019-12-22',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2019-12-23',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2019-12-24',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2019-12-25',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2019-12-26',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 4,
              date: '2019-12-27',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#239a3b',
              contributionCount: 9,
              date: '2019-12-28',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2019-12-29',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 3,
              date: '2019-12-30',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#196127',
              contributionCount: 14,
              date: '2019-12-31',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 5,
              date: '2020-01-01',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2020-01-02',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2020-01-03',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-04',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-05',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-06',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-07',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-08',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 3,
              date: '2020-01-09',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-10',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2020-01-11',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2020-01-12',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#239a3b',
              contributionCount: 8,
              date: '2020-01-13',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2020-01-14',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 4,
              date: '2020-01-15',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2020-01-16',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 3,
              date: '2020-01-17',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2020-01-18',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-19',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-20',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2020-01-21',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2020-01-22',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2020-01-23',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 4,
              date: '2020-01-24',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#239a3b',
              contributionCount: 9,
              date: '2020-01-25',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#7bc96f',
              contributionCount: 6,
              date: '2020-01-26',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 6,
              date: '2020-01-27',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-28',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-01-29',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 6,
              date: '2020-01-30',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#239a3b',
              contributionCount: 10,
              date: '2020-01-31',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2020-02-01',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2020-02-02',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 6,
              date: '2020-02-03',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2020-02-04',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#7bc96f',
              contributionCount: 4,
              date: '2020-02-05',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#196127',
              contributionCount: 11,
              date: '2020-02-06',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 2,
              date: '2020-02-07',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 3,
              date: '2020-02-08',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
        {
          contributionDays: [
            {
              color: '#ebedf0',
              contributionCount: 0,
              date: '2020-02-09',
              __typename: 'ContributionCalendarDay',
            },
            {
              color: '#c6e48b',
              contributionCount: 1,
              date: '2020-02-10',
              __typename: 'ContributionCalendarDay',
            },
          ],
          __typename: 'ContributionCalendarWeek',
        },
      ],
      __typename: 'ContributionCalendar',
    },
    __typename: 'ContributionsCollection',
  },
  __typename: 'User',
};
function App() {
  const { data } = useQuery(GET_SEARCH_QUERY);

  return (
    <Layout>
      <SearchBar />
      {data.searchQuery ? (
        <Profile name={data.searchQuery} testData={testData} />
      ) : null}
    </Layout>
  );
}

export default App;
