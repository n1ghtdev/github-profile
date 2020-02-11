import React from 'react';
import styled from 'styled-components';
import Repository from './Repository';
import Loading from './Loading';

const List = styled.div`
  background-color: ${({ theme }) => theme.backgroundAccent};
  margin-left: 10px;
  padding: 10px;
  border-radius: 4px;
  flex: 1;
`;

const LoadMore = styled.button`
  display: block;
  margin: 20px auto 10px auto;
  background-color: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: opacity 250ms;

  &:hover {
    opacity: 0.7;
  }
`;

const LoadingWrapper = styled.div`
  margin-top: 20px;
  & > div {
    margin: 0 auto;
  }
`;

function Repositories({ repositories, onLoadMore, status }) {
  return (
    <List>
      {repositories &&
        repositories.edges.map(({ node }) => (
          <Repository
            key={node.id}
            title={node.name}
            slug={node.nameWithOwner}
            description={node.description}
            language={node.primaryLanguage}
            starsCount={node.stargazers.totalCount}
            issuesCount={node.issues.totalCount}
            forksCount={node.forkCount}
            pullRequestCount={node.pullRequests.totalCount}
            createdAt={node.createdAt}
          />
        ))}
      <LoadingWrapper>
        <Loading status={status} />
      </LoadingWrapper>
      <LoadMore type="button" onClick={onLoadMore}>
        load more
      </LoadMore>
    </List>
  );
}

export default Repositories;
