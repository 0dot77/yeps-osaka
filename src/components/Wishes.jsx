import styled from 'styled-components';

const WishContainer = styled.article`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const WishBox = styled.ul`
  width: 50%;
  height: 100%;
  padding: 1em;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Wish = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100px;
  background: rgba(255, 255, 255, 0.38);
  border-radius: 22px;
  margin-bottom: 20px;

  p {
    color: ${(props) => props.theme.textColor};
    word-break: break-all;
    font-size: 1.5rem;
    font-family: inherit;
    padding: 30px;
  }
`;

export default function Wishes({ data: { Japanese = {}, Korean = {} } }) {
  return (
    <WishContainer>
      <WishBox>
        {Object.keys(Korean)?.map((eachWish, index) => (
          <Wish key={index}>
            <p>{eachWish}</p>
          </Wish>
        ))}
      </WishBox>
      <WishBox>
        {Object.keys(Japanese)?.map((eachWish, index) => (
          <Wish key={index}>
            <p>{eachWish}</p>
          </Wish>
        ))}
      </WishBox>
    </WishContainer>
  );
}
