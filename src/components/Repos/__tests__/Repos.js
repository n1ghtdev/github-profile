import React from 'react';
import { render } from '@testing-library/react';
import Repos from '../Repos';

describe('Repos component', () => {
  it('renders with no repos', () => {
    const props = {
      repos: null,
      onLoadMore: () => {},
      status: 1,
    };

    const { getByText } = render(<Repos {...props} />);

    expect(getByText("User doesn't have any repositories yet.")).toBeTruthy();
  });
  it('renders with repos', () => {
    const props = {
      repos: {
        totalCount: 1,
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
      },
      onLoadMore: () => {},
      status: 1,
    };

    const { getByText, queryByText } = render(<Repos {...props} />);

    expect(getByText('Repository')).toBeTruthy();
    expect(queryByText("User doesn't have any repositories yet.")).toBeFalsy();
  });
});
