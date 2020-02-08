import styled from 'styled-components';
import media from '../styles/media';

const Container = styled.div`
  width: 100%;
  padding: 0 5px;
  margin: 0 auto;

  ${media.small`
    max-width: 576px;
    padding: 0 10px;
  `}
  ${media.medium`
    max-width: 768px;
    padding: 0 15px;
  `}
  ${media.large`
    max-width: 992px;
  `}
  ${media.xl`
    max-width: 1200px;
  `}
`;

export default Container;
