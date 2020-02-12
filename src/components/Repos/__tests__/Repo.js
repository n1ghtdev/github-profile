import React from 'react';
import { render } from '@testing-library/react';
import Repo from '../Repo';

describe('Repo component', () => {
  it('renders with props', () => {
    const props = {
      title: 'Repository',
      slug: 'repo',
      language: 'JavaScript',
      issuesCount: '4',
      forksCount: '2',
      starsCount: '50',
      pullRequestCount: '5',
    };

    const { getByText } = render(<Repo {...props} />);

    expect(getByText(props.title)).toBeTruthy();
    expect(getByText(props.title).href).toBe(
      `https://github.com/${props.slug}`
    );
    expect(getByText(props.starsCount)).toBeTruthy();
  });
  it('render without language prop', () => {
    const props = {
      title: 'Repository',
      slug: 'repo',
      issuesCount: '4',
      forksCount: '2',
      starsCount: '50',
      pullRequestCount: '5',
    };

    const { getByText } = render(<Repo {...props} />);

    expect(getByText('Markdown')).toBeTruthy();
  });
});
