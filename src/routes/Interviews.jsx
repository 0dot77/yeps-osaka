import React from 'react';
import SectionLeftNav from '../components/section-navi/SectionLeftNav';
import SectionRightNav from '../components/section-navi/SectionRightNav';
import SubPageContainer from '../styles/subPageContainer';

export default function Interviews() {
  return (
    <SubPageContainer>
      <SectionLeftNav />
      <SectionRightNav />
    </SubPageContainer>
  );
}
