import React from 'react';
import styled from 'styled-components';
import Octicon, { Heart } from '@primer/octicons-react';

const Wrapper = styled.header`
  display: flex;
`;

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 4px;
`;

const Intro = styled.div`
  margin-left: 20px;
  position: relative;
`;

const Name = styled.h2`
  margin: 10px 0 5px 0;
`;

const Login = styled.span`
  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Followed = styled.div`
  position: absolute;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 28px;
  font-size: 14px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.secondary};

  color: ${({ theme }) => theme.background};
  font-weight: bold;
`;

const StyledOcticon = styled(Octicon)`
  margin-right: 20px;
  transform: scale(1.3);
`;

function Header({ name, login, avatarUrl, viewerIsFollowing }) {
  return (
    <Wrapper>
      <Avatar src={avatarUrl} alt={login} />
      <Intro>
        <Name>{name}</Name>
        <Login>
          <a
            href={`https://github.com/${login}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            @{login}
          </a>
        </Login>
        {viewerIsFollowing && (
          <Followed>
            <StyledOcticon icon={Heart} />
            FOLLOWED
          </Followed>
        )}
      </Intro>
    </Wrapper>
  );
}

export default Header;
