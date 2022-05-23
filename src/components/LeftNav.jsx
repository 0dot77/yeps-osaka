import {
  NavKoreanContainer,
  KTitle,
  CanvasContainer,
  DescriptionContainer,
  KMenu,
  MenuContainer,
} from '../../styles/navStyle';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import MainBox from '../objects/MainBox';
import { kmenu } from '../db/menu';

// Hover Event를 양쪽의 메뉴에 어떻게 함께 줄 수 있을까?

export default function LeftNav({ setIsBoxClicked, isboxClicked, setIsMenuClicked, isMenuHovered, setIsMenuHovered }) {
  const handleChangeMenu = () => {
    setIsBoxClicked((current) => !current);
  };
  return (
    <NavKoreanContainer>
      <KTitle>{'마을,\n소원,\n신당'}</KTitle>
      <CanvasContainer onClick={() => handleChangeMenu()}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <MainBox isboxClicked={isboxClicked} />
        </Canvas>
      </CanvasContainer>
      {isboxClicked ? (
        <DescriptionContainer>
          이곳은 대한민국 서울특별시 성북구 석관동 340-17 (화랑로32가길 17), 석관동 도당 앞의 나무입니다. 예전 마을
          사람들은 때마다 이곳 도당에 모여 제를 올리고, 마을의 할머니 신께 한 해의 안녕과 풍년을 빌며 음식을 나누어
          먹었습니다.이곳은 소원을 빌고 가는 공간입니다. 나무 사이에 걸려있는 소원들을 찾아보세요.
        </DescriptionContainer>
      ) : (
        <MenuContainer className="main-container">
          {kmenu.map((menu) => (
            <KMenu
              key={menu.id}
              to={menu.url}
              className={menu.class}
              onClick={() => {
                setIsMenuClicked((current) => !current);
              }}
              onMouseEnter={() => {
                setIsMenuHovered(true);
              }}
              onMouseLeave={() => {
                setIsMenuHovered(false);
              }}
              isMenuHovered={isMenuHovered}
            >
              {menu.title}
            </KMenu>
          ))}
        </MenuContainer>
      )}
    </NavKoreanContainer>
  );
}
