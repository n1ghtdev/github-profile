import React from 'react';
import { render } from '@testing-library/react';
import InfoList from '../InfoList';

describe('InfoList component', () => {
  it('renders with props, except CommitChart', () => {
    const currentDate = new Date();
    const props = {
      location: 'Kyiv, Ukraine',
      createdAt: currentDate.toISOString(),
      email: 'user@email.com',
      websiteUrl: 'https://github.com/',
      contributionsCollection: null,
    };

    const { getByText } = render(<InfoList {...props} />);

    expect(getByText(props.location)).toBeTruthy();
    expect(getByText(currentDate.toLocaleDateString())).toBeTruthy();
    expect(getByText(props.email)).toBeTruthy();
    expect(getByText(props.websiteUrl).href).toBe(props.websiteUrl);
  });
});
