import React from 'react';
import { MainPageContainer } from '../../styles/NavStyle';
import SectionLeftNav from './section-navi/SectionLeftNav';
import SectionRightNav from './section-navi/SectionRightNav';

export default function RealTimeWishes() {
  return (
    <MainPageContainer>
      <SectionLeftNav />
      <SectionRightNav />
    </MainPageContainer>
  );
}
