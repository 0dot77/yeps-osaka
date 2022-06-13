import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Link } from 'react-router-dom';
import MenuButton from './MenuButton';
import { useRecoilState } from 'recoil';
import { menuBoxClicked, multiHover } from '../atom';

const Container = styled.section`
  width: 15rem;
  display: grid;
  grid-template-rows: 2fr 1.5fr 2fr;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
`;

const NavTitle = styled.h1`
  font-size: 90px;
  white-space: pre-wrap;
  text-align: center;
  line-height: 1.2;
  font-family: ${(props) => props.titleFont};
`;

const Description = styled.article`
  font-size: 20px;
  line-height: 1.5;
  font-family: ${(props) => props.descriptionFont};
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => props.menuFont};
  font-size: 34px;
  text-align: center;
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
        props.isHoveredClassName === 'realTime' ? `0px 4px 19px rgba(255, 255, 255, 0.9)` : null};
      border-bottom: ${(props) => (props.isHoveredClassName === 'realTime' ? `1px solid #ffffff` : null)};
    }
  }
  &.interviews {
    a {
      text-shadow: ${(props) =>
        props.isHoveredClassName === 'interviews' ? `0px 4px 19px rgba(255, 255, 255, 0.9)` : null};
      border-bottom: ${(props) => (props.isHoveredClassName === 'interviews' ? `1px solid #ffffff` : null)};
    }
  }

  &.wishAndTemple {
    a {
      text-shadow: ${(props) =>
        props.isHoveredClassName === 'wishAndTemple' ? `0px 4px 19px rgba(255, 255, 255, 0.9)` : null};
      border-bottom: ${(props) => (props.isHoveredClassName === 'wishAndTemple' ? `1px solid #ffffff` : null)};
    }
  }

  &.webGame {
    a {
      text-shadow: ${(props) =>
        props.isHoveredClassName === 'webGame' ? `0px 4px 19px rgba(255, 255, 255, 0.9)` : null};
      border-bottom: ${(props) => (props.isHoveredClassName === 'webGame' ? `1px solid #ffffff` : null)};
    }
  }
`;

export default function TestNav({
  navTitle: { titleContents, titleFont },
  description: { descriptionFont, descriptionContents },
  menu: { menuContents, menuFont },
}) {
  const [boxButtonClicked, isBoxButtonClicked] = useRecoilState(menuBoxClicked);
  const [isHoveredClassName, setIsHoveredClassName] = useRecoilState(multiHover);

  const handleMenuAppeared = () => {
    isBoxButtonClicked(!boxButtonClicked);
  };

  const handleMenuClass = (className) => {
    setIsHoveredClassName(className);
  };
  console.log(isHoveredClassName);

  return (
    <Container>
      <NavTitle titleFont={titleFont}>{titleContents}</NavTitle>
      <Canvas style={{ height: '100%' }} camera={{ position: [0, 0, -2] }} onClick={handleMenuAppeared}>
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
              isHoveredClassName={isHoveredClassName}
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