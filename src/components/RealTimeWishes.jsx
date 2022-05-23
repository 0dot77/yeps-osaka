import React from 'react';
import SectionLeftNav from './section-navi/SectionLeftNav';
import SectionRightNav from './section-navi/SectionRightNav';
import MainPageContainer from '../../styles/MainPageContainer';

export default function RealTimeWishes() {
  return (
    <MainPageContainer>
      <SectionLeftNav />
      <SectionRightNav />
    </MainPageContainer>
  );
}
