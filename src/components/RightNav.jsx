import {
  JTitle,
  NavJapContainer,
  CanvasContainer,
  DescriptionContainer,
  MenuContainer,
  JMenu,
} from '../../styles/navStyle';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import MainBox from '../objects/MainBox';
import { jmenu } from '../db/menu';

export default function LeftNav({ setIsBoxClicked, isboxClicked }) {
  const handleChangeMenu = () => {
    setIsBoxClicked((current) => !current);
  };

  // 마우스 호버 되었을 때 왼쪽 오른쪽 전부 호버링 되도록 설정하기
  const handleMouseHover = () => {};
  return (
    <NavJapContainer>
      <JTitle>{'村,\n所願,\n神堂'}</JTitle>
      <CanvasContainer onClick={() => handleChangeMenu()}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <MainBox isboxClicked={isboxClicked} />
        </Canvas>
      </CanvasContainer>
      {isboxClicked ? (
        <DescriptionContainer>
          ここは大韓民国ソウル特別市城北区石棺洞340-17(花郎32街道17)、石棺洞の陶唐前の木です。
          昔、村の人たちはその度にこの都堂に集まって祭祀を行い、村のおばあさん神様に一年の安寧と豊年を祈りながら食べ物を分けて食べました。ここは願い事をする空間です。
          木の間にかかっている願いを探してみてください。
        </DescriptionContainer>
      ) : (
        <MenuContainer className="main-container">
          {jmenu.map((menu) => (
            <JMenu key={menu.id} to={menu.url} className={menu.class}>
              {menu.title}
            </JMenu>
          ))}
        </MenuContainer>
      )}
    </NavJapContainer>
  );
}
