import TestNav from './TestNav';
import { leftNavProps, rightNavProps } from '../db/navData';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
`;

export default function TestNavContainer() {
  return (
    <Container>
      <TestNav {...leftNavProps} />
      <TestNav {...rightNavProps} />
    </Container>
  );
}
