import React from 'react';
import { render } from '@testing-library/react';
import CommitChart from '../CommitChart';

describe('CommitChart component', () => {
  it('renders', () => {
    const testId = 'commit-chart';

    const data = [
      {
        contributionDays: [
          {
            date: '2020-01-01',
            contributionCount: 2,
          },
          {
            date: '2020-01-02',
            contributionCount: 2,
          },
          {
            date: '2020-01-03',
            contributionCount: 2,
          },
          {
            date: '2020-01-04',
            contributionCount: 2,
          },
          {
            date: '2020-01-05',
            contributionCount: 2,
          },
        ],
      },
    ];

    const { getByTestId } = render(<CommitChart data={data} />);

    expect(getByTestId(testId)).toContainElement(
      document.getElementsByTagName('path')[0]
    );
  });
});
