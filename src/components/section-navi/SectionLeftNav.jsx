import React from 'react';
import { NavKoreanContainer, KTitle, KMenu, MenuContainer, SectionNavCanvasContainer } from '../../styles/NavStyle';
import { Canvas } from '@react-three/fiber';
import MainBox from '../../objects/MainBox';
import { kmenu } from '../../db/menu';
import { multiHover } from '../../atom';
import { useRecoilState } from 'recoil';

export default function SectionLeftNav() {
  const [isMenuHovered, setIsMenuHovered] = useRecoilState(multiHover);
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
          <KMenu
            key={menu.id}
            to={menu.url}
            className={menu.class}
            onMouseEnter={() => {
              setIsMenuHovered(menu.class);
            }}
            onMouseLeave={() => {
              setIsMenuHovered(null);
            }}
            ismenuhovered={isMenuHovered}
          >
            {menu.title}
          </KMenu>
        ))}
      </MenuContainer>
    </NavKoreanContainer>
  );
}
