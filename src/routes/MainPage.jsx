import React from 'react';
import Wishtree from '../components/Wishtree';
import Nav from '../components/Nav';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #095882 0%, #000000 100%);
  overflow: hidden;
`;

function MainPage() {
  return (
    <Container>
      <Nav />
      <Wishtree />
    </Container>
  );
}

export default MainPage;
