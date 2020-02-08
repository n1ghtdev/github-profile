import React from 'react';
import styled from 'styled-components';
import Repository from './Repository';

const List = styled.div``;

function Repositories({ repositories }) {
  return (
    <List>
      {repositories.nodes.map(repo => (
        <Repository
          title={repo.nameWithOwner}
          description={repo.description}
          language={repo.languages.nodes.shift()}
          issuesCount={repo.issues.totalCount}
          forksCount={repo.forkCount}
          pullRequestCount={repo.pullRequests.totalCount}
          isArchived={repo.isArchived}
          createdAt={repo.createdAt}
        />
      ))}
    </List>
  );
}

export default Repositories;
