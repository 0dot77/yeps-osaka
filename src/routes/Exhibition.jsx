import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.backgroundColor};
  justify-items: center;
  user-select: none;
`;

const Divider = styled.hr`
  position: absolute;
  border: 1px dotted ${(props) => props.theme.textColor};
  width: 60%;
`;

export default function Exhibition() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
