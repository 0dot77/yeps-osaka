import { Link } from 'react-router-dom';
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
  font-size: 90px;
  font-family: dok-lip;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.2;
`;

export const JTitle = styled.h1`
  font-family: j-font;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.2;
  font-size: 90px;
`;

export const CanvasContainer = styled.div`
  width: 230px;
  height: 160px;
`;

export const DescriptionContainer = styled.div`
  font-size: 20px;
  line-height: 1.5;
  font-family: k-menu;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: k-menu;
`;

export const KMenu = styled(Link)`
  font-size: 34px;
  text-align: center;
  color: #ffffff;
  line-height: 2;

  &.realTime {
    text-shadow: ${(props) => (props.ismenuhovered === 'realTime' ? `0px 4px 19px rgba(255, 255, 255, 0.9)` : null)};
    border-bottom: ${(props) => (props.ismenuhovered === 'realTime' ? `1px solid #ffffff` : null)};
  }

  &.interviews {
    text-shadow: ${(props) => (props.ismenuhovered === 'interviews' ? `0px 4px 19px rgba(255, 255, 255, 0.9)` : null)};
    border-bottom: ${(props) => (props.ismenuhovered === 'interviews' ? `1px solid #ffffff` : null)};
  }

  &.wishAndTemple {
    text-shadow: ${(props) =>
      props.ismenuhovered === 'wishAndTemple' ? `0px 4px 19px rgba(255, 255, 255, 0.9)` : null};
    border-bottom: ${(props) => (props.ismenuhovered === 'wishAndTemple' ? `1px solid #ffffff` : null)};
  }

  &.webGame {
    text-shadow: ${(props) => (props.ismenuhovered === 'webGame' ? `0px 4px 19px rgba(255, 255, 255, 0.9)` : null)};
    border-bottom: ${(props) => (props.ismenuhovered === 'webGame' ? `1px solid #ffffff` : null)};
  }
`;

export const JMenu = styled(KMenu)`
  line-height: 2.5;
  font-size: 28px;
`;

export const SectionNavCanvasContainer = styled(Link)`
  display: block;
  width: 230px;
  height: 160px;
`;
