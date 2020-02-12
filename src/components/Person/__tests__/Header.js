import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  it('renders with props', () => {
    const props = {
      name: 'Foo Bar',
      login: 'foobar',
      avatarUrl: 'https://via.placeholder.com/150',
      viewerIsFollowing: true,
    };

    const { getByText, getByAltText } = render(<Header {...props} />);

    expect(getByText(props.name)).toBeTruthy();
    expect(getByText(`@${props.login}`).href).toBe(
      `https://github.com/${props.login}`
    );
    expect(getByAltText(props.login).src).toBe(props.avatarUrl);
    expect(getByText('FOLLOWED')).toBeTruthy();
  });
});
