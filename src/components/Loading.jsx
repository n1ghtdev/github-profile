import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left: 5px solid #ffffff;
  border-right: 5px solid #ffffff;
  animation: spin 2s infinite linear;

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const loadingStates = [1, 3, 4];

function Loading({ status, size }) {
  if (loadingStates.some(state => state === status)) {
    return <Spinner />;
  }
  return null;
}

export default Loading;
