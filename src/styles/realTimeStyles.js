import styled from 'styled-components';

export const WishContainer = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  /* border: 1px solid red; */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  overflow-y: scroll;
`;

export const WishSection = styled.ul`
  width: 48%;
  height: 100%;
  /* border: 1px solid green; */
`;

// 소원이 담길 박스
export const Wishes = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  background: rgba(255, 255, 255, 0.38);
  border-radius: 22px;
  margin-bottom: 20px;

  p {
    color: #ffffff;
    word-break: break-all;
    font-size: 20px;
    padding: 30px;
  }
`;
