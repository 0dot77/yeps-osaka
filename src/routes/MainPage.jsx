import React, { useState } from 'react';
import Wishtree from '../components/Wishtree';
import styled from 'styled-components';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';
import { MainPageContainer } from '../../styles/NavStyle';

function MainPage() {
  const [isboxClicked, setIsBoxClicked] = useState(true);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isRealTime, setIsRealTime] = useState(false);
  const [isInterview, setIsInterView] = useState(false);
  const [isTemple, setIsTemple] = useState(false);
  const [isWebGame, setIsWebGame] = useState(false);
  console.log('box clicked?', isboxClicked);
  return (
    <MainPageContainer>
      <LeftNav setIsBoxClicked={setIsBoxClicked} isboxClicked={isboxClicked} setIsMenuClicked={setIsMenuClicked} />
      <Wishtree isMenuClicked={isMenuClicked} />
      <RightNav setIsBoxClicked={setIsBoxClicked} isboxClicked={isboxClicked} />
    </MainPageContainer>
  );
}

export default MainPage;
