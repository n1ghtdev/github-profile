import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SearchIcon from './assets/SearchIcon';

const Form = styled.form`
  height: 40px;
  max-width: 520px;
  width: 100%;
  margin: 50px auto;
  background: ${({ theme }) => theme.backgroundAccent};
  border-radius: 5px;
  display: flex;
`;

const Input = styled.input`
  padding: 0 10px;
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  color: inherit;
`;

const SubmitButton = styled.button`
  padding: 0 20px;
  background: none;
  border: none;
  cursor: pointer;
  fill: ${({ theme }) => theme.text};
`;

function SearchBar() {
  const history = useHistory();

  const [value, setValue] = React.useState('');
  const handleSubmit = evt => {
    evt.preventDefault();

    if (value) {
      history.push(`/user/${value}`);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={evt => setValue(evt.target.value)}
      />
      <SubmitButton>
        <SearchIcon />
      </SubmitButton>
    </Form>
  );
}

export default SearchBar;
