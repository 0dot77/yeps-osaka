import React, { useRef, useState } from 'react';
import { Canvas, useThree, useFrame, extend } from '@react-three/fiber';
import styled from 'styled-components';
import { OrthographicCamera, OrbitControls } from '@react-three/drei';

/**
 * Nav Styling
 */

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  color: white;
  overflow: hidden;
  z-index: 10;
  justify-content: space-between;
`;

const CanvasContainer = styled.div`
  width: 230px;
  height: 160px;
`;

const KoreanContainer = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
`;

const JapContainer = styled(KoreanContainer)`
  margin-left: 0px;
  margin-right: 60px;
`;

const KTitle = styled.h1`
  @font-face {
    font-family: dok-lip;
    src: url('/assets/fonts/main-font.ttf');
  }
  font-size: 80px;
  font-family: dok-lip;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.2;
`;

const JTitle = styled(KTitle)`
  @font-face {
    font-family: j-font;
    src: url('/assets/fonts/jap-font.ttf');
  }
  font-family: j-font;
`;

const DescriptionContainer = styled.div`
  font-size: 20px;
  line-height: 1.5;
`;

/**
 * Three - Box Component
 */
function Box() {
  const mesh = useRef();
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshBasicMaterial wireframe />
    </mesh>
  );
}

function Nav() {
  const [objectMove, setObjectMove] = useState(false);
  return (
    <Container>
      <KoreanContainer>
        <KTitle>{'마을,\n소원,\n신당'}</KTitle>
        <CanvasContainer>
          <Canvas>
            <OrthographicCamera position={[0, 0, 0]}>
              <Box />
            </OrthographicCamera>
            <OrbitControls enabled={false} />
          </Canvas>
        </CanvasContainer>
        <DescriptionContainer>
          이곳은 대한민국 서울특별시 성북구 석관동 340-17 (화랑로32가길 17), 석관동 도당 앞의 나무입니다. 예전 마을
          사람들은 때마다 이곳 도당에 모여 제를 올리고, 마을의 할머니 신께 한 해의 안녕과 풍년을 빌며 음식을 나누어
          먹었습니다.이곳은 소원을 빌고 가는 공간입니다. 나무 사이에 걸려있는 소원들을 찾아보세요.
        </DescriptionContainer>
      </KoreanContainer>
      <JapContainer>
        <JTitle>{'村,\n所願,\n神堂'}</JTitle>
        <CanvasContainer>
          <Canvas>
            <Box />
          </Canvas>
        </CanvasContainer>
        <DescriptionContainer>
          ここは大韓民国ソウル特別市城北区石棺洞340-17(花郎32街道17)、石棺洞の陶唐前の木です。
          昔、村の人たちはその度にこの都堂に集まって祭祀を行い、村のおばあさん神様に一年の安寧と豊年を祈りながら食べ物を分けて食べました。ここは願い事をする空間です。
          木の間にかかっている願いを探してみてください。
        </DescriptionContainer>
      </JapContainer>
    </Container>
  );
}

export default Nav;
