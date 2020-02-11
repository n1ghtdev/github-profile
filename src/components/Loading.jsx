import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  text-indent: -9999px;
  border-top: 3px solid ${({ theme }) => theme.textDark};
  border-bottom: 3px solid ${({ theme }) => theme.textDark};
  border-right: 3px solid ${({ theme }) => theme.textDark};
  border-left: 3px solid ${({ theme }) => theme.text};
  transform: translateZ(0);
  animation: spin 1.1s infinite linear;

  width: 30px;
  height: 30px;
  border-radius: 50%;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
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
