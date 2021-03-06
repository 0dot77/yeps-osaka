import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Link, useNavigate } from 'react-router-dom';
import MenuButton from './MenuButton';
import { useRecoilState } from 'recoil';
import { menuBoxClicked, multiHover, menuClicked, clickedMenu } from '../atom';

const Container = styled.nav`
  width: 15rem;
  height: 100vh;
  display: grid;
  grid-template-rows: 2fr 1.5fr 2fr;
  justify-content: center;
  align-items: center;
  z-index: 100;
  overflow: hidden;
`;

const NavTitle = styled.h1`
  font-size: 5em;
  white-space: pre-wrap;
  word-break: break-all;
  text-align: center;
  line-height: 1.2;
  font-family: ${(props) => props.titleFont};
  color: ${(props) => props.theme.textColor};
  grid-row: 1;
`;

const Description = styled.article`
  font-size: 1.25rem;
  line-height: 1.5;
  font-family: ${(props) => props.descriptionFont};
  color: ${(props) => props.theme.textColor};
  grid-row: 3;
  word-break: break-all;
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.menuFont};
  font-size: 1.5rem;
  text-align: center;
  grid-row: 3;
  height: 100%;
`;

const Menu = styled.li`
  a {
    display: inline;
    color: ${(props) => props.theme.textColor};
    line-height: 2;
    padding-bottom: 10px;
  }

  &.realTime {
    a {
      text-shadow: ${(props) =>
        props.isHoveredClassName === 'realTime'
          ? `0px 4px 19px rgba(255, 255, 255, 0.9)`
          : props.isClickedMenuClass === 'realTime'
          ? `0px 4px 19px rgba(255, 255, 255, 0.9)`
          : null};
      border-bottom: ${(props) =>
        props.isHoveredClassName === 'realTime'
          ? `1px solid #ffffff`
          : props.isClickedMenuClass === 'realTime'
          ? `1px solid #ffffff`
          : null};
    }
  }

  &.interviews {
    a {
      text-shadow: ${(props) =>
        props.isHoveredClassName === 'interviews'
          ? `0px 4px 19px rgba(255, 255, 255, 0.9)`
          : props.isClickedMenuClass === 'interviews'
          ? `0px 4px 19px rgba(255, 255, 255, 0.9)`
          : null};
      border-bottom: ${(props) =>
        props.isHoveredClassName === 'interviews'
          ? `1px solid #ffffff`
          : props.isClickedMenuClass === 'interviews'
          ? `1px solid #ffffff`
          : null};
    }
  }

  &.wishAndTemple {
    a {
      text-shadow: ${(props) =>
        props.isHoveredClassName === 'wishAndTemple'
          ? `0px 4px 19px rgba(255, 255, 255, 0.9)`
          : props.isClickedMenuClass === 'wishAndTemple'
          ? `0px 4px 19px rgba(255, 255, 255, 0.9)`
          : null};
      border-bottom: ${(props) =>
        props.isHoveredClassName === 'wishAndTemple'
          ? `1px solid #ffffff`
          : props.isClickedMenuClass === 'wishAndTemple'
          ? `1px solid #ffffff`
          : null};
    }
  }
`;

export default function Nav({
  navTitle: { titleContents, titleFont },
  description: { descriptionFont, descriptionContents },
  menu: { menuContents, menuFont },
}) {
  const [boxButtonClicked, isBoxButtonClicked] = useRecoilState(menuBoxClicked);
  const [isHoveredClassName, setIsHoveredClassName] = useRecoilState(multiHover);
  const [isMenuClicked, setIsMenuClicked] = useRecoilState(menuClicked);
  const [isClickedMenuClass, setIsClickedMenuClass] = useRecoilState(clickedMenu);
  const navigate = useNavigate();
  const handleMoveToMain = () => {
    isBoxButtonClicked(!boxButtonClicked);
    navigate(`/`);
    setIsClickedMenuClass(null);
  };

  const handleMenuClass = (className) => {
    setIsHoveredClassName(className);
  };

  const handleMenuClicked = (className, e) => {
    setIsMenuClicked(!isMenuClicked);
    setIsClickedMenuClass(className);
  };

  return (
    <Container>
      <NavTitle titleFont={titleFont}>{titleContents}</NavTitle>
      <Canvas style={{ gridRow: '2' }} camera={{ position: [0, 0, -2] }} onClick={handleMoveToMain}>
        <MenuButton boxButtonClicked={boxButtonClicked} />
      </Canvas>
      {boxButtonClicked ? (
        <MenuContainer menuFont={menuFont}>
          {menuContents.map((item) => (
            <Menu
              key={item.id}
              className={item.class}
              onMouseEnter={() => handleMenuClass(item.class)}
              onMouseLeave={() => setIsHoveredClassName(null)}
              onClick={(e) => handleMenuClicked(item.class, e)}
              isHoveredClassName={isHoveredClassName}
              isClickedMenuClass={isClickedMenuClass}
            >
              <Link to={item.url}>{item.title}</Link>
            </Menu>
          ))}
        </MenuContainer>
      ) : (
        <Description descriptionFont={descriptionFont}>{descriptionContents}</Description>
      )}
    </Container>
  );
}
