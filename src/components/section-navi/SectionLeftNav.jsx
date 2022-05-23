import React from 'react';
import { NavKoreanContainer, KTitle, KMenu, MenuContainer, SectionNavCanvasContainer } from '../../styles/NavStyle';
import { Canvas } from '@react-three/fiber';
import MainBox from '../../objects/MainBox';
import { kmenu } from '../../db/menu';

export default function SectionLeftNav() {
  return (
    <NavKoreanContainer>
      <KTitle>{'마을,\n소원,\n신당'}</KTitle>
      <SectionNavCanvasContainer to="/">
        <Canvas>
          <ambientLight intensity={0.5} />
          <MainBox isboxClicked={false} />
        </Canvas>
      </SectionNavCanvasContainer>
      <MenuContainer>
        {kmenu.map((menu) => (
          <KMenu key={menu.id} to={menu.url} className={menu.class}>
            {menu.title}
          </KMenu>
        ))}
      </MenuContainer>
    </NavKoreanContainer>
  );
}
