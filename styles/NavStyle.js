import styled from 'styled-components';

export const NavKoreanContainer = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  float: left;
  margin-left: 40px;
  position: absolute;
  z-index: 10;
`;

export const NavJapContainer = styled.div`
  width: 230px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: absolute;
  right: 0;
  margin-right: 40px;
  z-index: 10;
`;

export const KTitle = styled.h1`
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

export const JTitle = styled(KTitle)`
  @font-face {
    font-family: j-font;
    src: url('/assets/fonts/jap-font.ttf');
  }
  font-family: j-font;
`;

export const CanvasContainer = styled.div`
  width: 230px;
  height: 160px;
`;

export const DescriptionContainer = styled.div`
  font-size: 20px;
  line-height: 1.5;
`;
