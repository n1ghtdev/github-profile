import React from 'react';
import styled from 'styled-components';
import Repository from './Repository';

const List = styled.div`
  background-color: ${({ theme }) => theme.backgroundAccent};
  margin-left: 10px;
  padding: 10px;
  border-radius: 4px;
  flex: 1;
`;

function Repositories({ repositories }) {
  return (
    <List>
      {repositories &&
        repositories.edges.map(({ node }) => (
          <Repository
            key={node.id}
            title={node.nameWithOwner}
            description={node.description}
            language={node.languages.nodes.shift()}
            issuesCount={node.issues.totalCount}
            forksCount={node.forkCount}
            pullRequestCount={node.pullRequests.totalCount}
            isArchived={node.isArchived}
            createdAt={node.createdAt}
          />
        ))}
    </List>
  );
}

export default Repositories;
