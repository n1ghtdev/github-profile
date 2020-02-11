import React from 'react';
import styled from 'styled-components';
import Octicon, {
  IssueOpened,
  GitPullRequest,
  RepoForked,
  Star,
} from '@primer/octicons-react';
import abbreviateNumber from '../utils/abbreviateNumber';

const Wrapper = styled.article`
  margin-bottom: 3px;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  border-radius: 4px;
`;
const Title = styled.h3`
  width: 40%;
  font-size: 16px;
  margin: 0;
  color: ${({ theme }) => theme.primary};
  a {
    cursor: pointer;
  }
`;
const Language = styled.div`
  width: 20%;
  &::before {
    content: '';
    margin-right: 5px;
    background-color: ${({ color }) => color || '#eee'};
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
`;
const Info = styled.ul`
  width: 40%;
  text-align: right;
  list-style-type: none;
  margin: 0;
  font-size: 14px;
`;
const InfoItem = styled.li`
  display: inline-block;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;
const ItemIcon = styled.span`
  margin-right: 5px;
`;

function Repository({
  title,
  slug,
  language,
  issuesCount,
  forksCount,
  starsCount,
  pullRequestCount,
  url,
}) {
  return (
    <Wrapper>
      {language ? (
        <Language color={language.color}>{language.name}</Language>
      ) : (
        <Language color="#eee">Markdown</Language>
      )}
      <Title>
        <a
          href={`https://github.com/${slug}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          {title}
        </a>
      </Title>
      <Info>
        <InfoItem>
          <ItemIcon>
            <Octicon icon={IssueOpened} />
          </ItemIcon>
          {abbreviateNumber(issuesCount)}
        </InfoItem>
        <InfoItem>
          <ItemIcon>
            <Octicon icon={GitPullRequest} />
          </ItemIcon>
          {abbreviateNumber(pullRequestCount)}
        </InfoItem>
        <InfoItem>
          <ItemIcon>
            <Octicon icon={RepoForked} />
          </ItemIcon>
          {abbreviateNumber(forksCount)}
        </InfoItem>
        <InfoItem>
          <ItemIcon>
            <Octicon icon={Star} />
          </ItemIcon>
          {abbreviateNumber(starsCount)}
        </InfoItem>
      </Info>
    </Wrapper>
  );
}

export default Repository;
