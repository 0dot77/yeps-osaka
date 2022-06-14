import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import testTree from '../assets/models/pointTree';
import FirstEntrance from './FirstEntrance';

const WishTreeContainer = styled.div`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
`;

function Wishtree() {
  const [isFristEntrance, setIsFirstEntrance] = useState(false);
  const mountRef = useRef(null);

  useEffect(() => {
    testTree(mountRef);
  }, []);

  return (
    <>
      {isFristEntrance ? null : <FirstEntrance setIsFirstEntrance={setIsFirstEntrance} />}
      <WishTreeContainer ref={mountRef}></WishTreeContainer>
    </>
  );
}

export default Wishtree;
