import { JTitle, NavJapContainer, CanvasContainer, DescriptionContainer } from '../../styles/NavStyle';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import MainBox from '../objects/MainBox';

export default function LeftNav({ setIsBoxClicked, isboxClicked }) {
  const handleChangeMenu = () => {
    setIsBoxClicked((current) => !current);
  };
  return (
    <NavJapContainer>
      <JTitle>{'村,\n所願,\n神堂'}</JTitle>
      <CanvasContainer onClick={() => handleChangeMenu()}>
        <Canvas>
          <ambientLight intensity={0.5} />
          <MainBox isboxClicked={isboxClicked} />
        </Canvas>
      </CanvasContainer>
      <DescriptionContainer>
        ここは大韓民国ソウル特別市城北区石棺洞340-17(花郎32街道17)、石棺洞の陶唐前の木です。
        昔、村の人たちはその度にこの都堂に集まって祭祀を行い、村のおばあさん神様に一年の安寧と豊年を祈りながら食べ物を分けて食べました。ここは願い事をする空間です。
        木の間にかかっている願いを探してみてください。
      </DescriptionContainer>
    </NavJapContainer>
  );
}
