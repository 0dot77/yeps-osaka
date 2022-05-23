import styled, { keyframes } from 'styled-components';

export const Entrance = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  transform: translateX(-50%);
  left: 50%;
  height: 100%;
  border-bottom: 5px dotted white;
  z-index: 1000;
`;

export const ActionContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2000;
`;

export const Divider = styled.hr`
  position: absolute;
  width: 95%;
  bottom: 52%;
  border-bottom: 5px dotted white;
`;

export const Icon = styled.div`
  width: 50px;
  height: 90px;
  border: 3px solid #ffffff;
  border-radius: 42px;
  display: flex;
  justify-content: center;
`;

const IconBallAnimation = keyframes`
    from {
        height: 10px;
    }
    to {
        height: 27px;
    }
`;

export const IconBall = styled.div`
  width: 8px;
  animation: ${IconBallAnimation} 1s ease-in-out infinite;
  background-color: white;
  margin-top: 10px;
  border-radius: 12px;
`;

export const ActionText = styled.h3`
  color: #ffffff;
  margin-top: 12px;
  text-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
`;
