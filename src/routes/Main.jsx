import Nav from '../components/Nav';
import { leftNavProps, rightNavProps } from '../db/navData';
import styled from 'styled-components';
import Wishtree from '../components/Wishtree';
import { useLocation, Outlet } from 'react-router-dom';

const Layout = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  overflow: hidden;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  user-select: none;

  section:first-child {
    grid-column: 1;
  }

  section:nth-child(2) {
    grid-column: 2/4;
  }

  section:last-child {
    grid-column: 4;
  }
`;

export default function Main() {
  const { pathname } = useLocation();

  return (
    <Layout>
      <Nav {...leftNavProps} />
      {pathname === '/' ? <Wishtree /> : <Outlet />}
      <Nav {...rightNavProps} />
    </Layout>
  );
}
