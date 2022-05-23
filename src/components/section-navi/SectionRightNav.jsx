import React from 'react';
import { NavJapContainer, JTitle, JMenu, MenuContainer, SectionNavCanvasContainer } from '../../styles/NavStyle';
import { Canvas } from '@react-three/fiber';
import MainBox from '../../objects/MainBox';
import { jmenu } from '../../db/menu';

export default function SectionRightNav() {
  return (
    <NavJapContainer>
      <JTitle>{'村,\n所願,\n神堂'}</JTitle>
      <SectionNavCanvasContainer to="/">
        <Canvas>
          <ambientLight intensity={0.5} />
          <MainBox isboxClicked={false} />
        </Canvas>
      </SectionNavCanvasContainer>
      <MenuContainer>
        {jmenu.map((menu) => (
          <JMenu key={menu.id} to={menu.url}>
            {menu.title}
          </JMenu>
        ))}
      </MenuContainer>
    </NavJapContainer>
  );
}
