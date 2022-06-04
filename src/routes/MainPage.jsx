import React, { useState } from 'react';
import Wishtree from '../components/Wishtree';
import LeftNav from '../components/LeftNav';
import RightNav from '../components/RightNav';
import MainPageContainer from '../styles/MainPageContainer';

function MainPage() {
  const [isboxClicked, setIsBoxClicked] = useState(true);
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // 메뉴를 거울처럼 hovering 하기
  const [ismenuhovered, setIsmenuhovered] = useState(null);

  // 처음 진입했을 때의 설명 (스크롤)
  const [isFristEntrance, setIsFristEntrance] = useState(false);
  const handleFirstEntrance = () => {
    setIsFristEntrance(true);
  };
  return (
    <MainPageContainer onClick={handleFirstEntrance}>
      <LeftNav setIsBoxClicked={setIsBoxClicked} isboxClicked={isboxClicked} setIsMenuClicked={setIsMenuClicked} />
      <Wishtree isMenuClicked={isMenuClicked} isFristEntrance={isFristEntrance} />
      <RightNav setIsBoxClicked={setIsBoxClicked} isboxClicked={isboxClicked} />
    </MainPageContainer>
  );
}

export default MainPage;
