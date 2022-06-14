import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import FirstEntrance from './FirstEntrance';
import { menuClicked } from '../atom';
import pointTree from '../assets/models/pointTree';

const WishTreeContainer = styled.section`
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
`;

function Wishtree() {
  const [isFristEntrance, setIsFirstEntrance] = useState(false);
  const mountRef = useRef(null);

  useEffect(() => {
    pointTree(mountRef);
  }, []);

  return (
    <>
      {isFristEntrance ? null : <FirstEntrance setIsFirstEntrance={setIsFirstEntrance} />}
      <WishTreeContainer>
        <canvas ref={mountRef}></canvas>
      </WishTreeContainer>
    </>
  );
}

export default Wishtree;
