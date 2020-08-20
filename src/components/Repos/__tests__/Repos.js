import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Repos from '../Repos';

const props = {
  repos: {
    totalCount: 12,
    edges: [
      {
        node: {
          id: 1,
          name: 'Repository',
          nameWithOwner: 'owner/repo',
          language: 'JavaScript',
          issues: { totalCount: '4' },
          forksCount: '2',
          stargazers: { totalCount: '50' },
          pullRequests: { totalCount: '5' },
        },
      },
    ],
    pageInfo: {
      hasNextPage: true,
    },
  },
  onLoadMore() {
    props.repos.pageInfo.hasNextPage = false;
  },
  status: 1,
};

describe('Repos component', () => {
  it('renders with no repos', () => {
    const localProps = {
      repos: null,
      onLoadMore: () => {},
      status: 1,
    };

    const { getByText } = render(<Repos {...localProps} />);

    expect(getByText("User doesn't have any repositories yet.")).toBeTruthy();
  });
  it('renders with repos', () => {
    const { getByText, queryByText } = render(<Repos {...props} />);

    expect(getByText('Repository')).toBeTruthy();
    expect(queryByText("User doesn't have any repositories yet.")).toBeFalsy();
  });
  it('load more repos', () => {
    const { getByText, queryByText, rerender } = render(<Repos {...props} />);

    expect(getByText('Repository')).toBeTruthy();
    expect(queryByText("User doesn't have any repositories yet.")).toBeFalsy();

    // mock load more
    const loadMoreButton = getByText('load more');
    fireEvent.click(loadMoreButton);
    rerender();

    expect(queryByText('load more')).toBeFalsy();
  });
});
