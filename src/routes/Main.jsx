import Nav from '../components/Nav';
import { leftNavProps, rightNavProps } from '../db/navData';
import styled from 'styled-components';
import { useLocation, Outlet } from 'react-router-dom';
import Test from '../components/Test';

const Layout = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  user-select: none;

  section:first-child {
    grid-column: 1;
  }

  section:nth-child(2) {
    grid-column: 2/4;
    overflow-y: scroll;
  }

  section:nth-child(3) {
    grid-column: 2/4;
    overflow-y: scroll;
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
      {pathname === '/' ? null : <Outlet />}
      <Test pathname={pathname} />
      <Nav {...rightNavProps} />
    </Layout>
  );
}
