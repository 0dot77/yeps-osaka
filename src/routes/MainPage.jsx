import React, { useState } from 'react';
import Wishtree from '../components/Wishtree';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';
import MainPageContainer from '../../styles/MainPage';

function MainPage() {
  const [isboxClicked, setIsBoxClicked] = useState(true);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // 메뉴를 거울처럼 hovering 하기
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  // 처음 진입했을 때의 설명 (스크롤)
  const [isFristEntrance, setIsFristEntrance] = useState(false);
  const handleFirstEntrance = () => {
    setIsFristEntrance(true);
  };

  const [isRealTime, setIsRealTime] = useState(false);
  const [isInterview, setIsInterView] = useState(false);
  const [isTemple, setIsTemple] = useState(false);
  const [isWebGame, setIsWebGame] = useState(false);
  return (
    <MainPageContainer onClick={handleFirstEntrance}>
      <LeftNav
        setIsBoxClicked={setIsBoxClicked}
        isboxClicked={isboxClicked}
        setIsMenuClicked={setIsMenuClicked}
        setIsMenuHovered={setIsMenuHovered}
        isMenuHovered={isMenuHovered}
      />
      <Wishtree isMenuClicked={isMenuClicked} isFristEntrance={isFristEntrance} />
      <RightNav
        setIsBoxClicked={setIsBoxClicked}
        isboxClicked={isboxClicked}
        setIsMenuHovered={setIsMenuHovered}
        isMenuHovered={isMenuHovered}
      />
    </MainPageContainer>
  );
}

export default MainPage;
