import React, { useState } from 'react';
import Wishtree from '../components/Wishtree';
import styled from 'styled-components';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(180deg, #095882 0%, #000000 100%);
  overflow: hidden;
  display: flex;
`;

function MainPage() {
  const [isboxClicked, setIsBoxClicked] = useState(true);
  return (
    <Container>
      <LeftNav setIsBoxClicked={setIsBoxClicked} isboxClicked={isboxClicked} />
      <Wishtree />
      <RightNav setIsBoxClicked={setIsBoxClicked} isboxClicked={isboxClicked} />
    </Container>
  );
}

export default MainPage;
