import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.article`
  margin-bottom: 20px;
  padding: 10px;
`;
const Title = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  color: ${({ theme }) => theme.primary};
`;
const SubTitle = styled.span`
  color: ${({ theme }) => theme.textDark};
  font-size: 16px;
  margin-left: 20px;
`;
const Description = styled.p``;

const List = styled.ul`
  list-style-type: none;
  display: inline-flex;
  margin: 0;
  padding: 0;
`;
const ListItem = styled.li`
  margin-left: 20px;
  &:first-child {
    margin-left: 0;
  }
`;
const Language = styled.div`
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

function Repositories({
  title,
  description,
  language,
  issuesCount,
  forksCount,
  pullRequestCount,
  isArchived,
  createdAt,
}) {
  return (
    <Wrapper>
      <Title>
        {title}
        {isArchived ? <SubTitle>Archived</SubTitle> : ''}
      </Title>
      <Description>{description}</Description>
      <List>
        <ListItem>
          {language && (
            <Language color={language.color}>{language.name}</Language>
          )}
        </ListItem>
        <ListItem>
          Created at {new Date(createdAt).toLocaleDateString()}
        </ListItem>
        <ListItem>I: {issuesCount}</ListItem>
        <ListItem>PR: {pullRequestCount}</ListItem>
      </List>
    </Wrapper>
  );
}

export default Repositories;
