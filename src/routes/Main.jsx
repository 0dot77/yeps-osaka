import Nav from '../components/Nav';
import { leftNavProps, rightNavProps } from '../db/navData';
import styled from 'styled-components';
import { useLocation, Outlet } from 'react-router-dom';
import TreeMain from '../components/TreeMain';
import { clickedMenu } from '../atom';

const Layout = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.backgroundColor};
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  user-select: none;

  nav:first-child {
    grid-column: 1;
  }

  section {
    grid-column: 2/4;
  }

  nav:last-child {
    grid-column: 4;
  }
`;

const Divider = styled.hr`
  position: absolute;
  border: 1px dotted ${(props) => props.theme.textColor};
  width: 60%;
`;

export default function Main() {
  const { pathname } = useLocation();
  return (
    <Layout>
      <Nav {...leftNavProps} />
      {pathname === '/' ? null : <Outlet />}
      <TreeMain pathname={pathname} />
      <Nav {...rightNavProps} />
    </Layout>
  );
}
