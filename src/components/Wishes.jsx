import styled from 'styled-components';

const WishContainer = styled.article`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
`;

const WishBox = styled.ul`
  width: 50%;
  height: 100%;
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
    font-size: 20px;
    padding: 30px;
  }
`;

export default function Wishes({ data: { UserData } }) {
  return (
    <WishContainer>
      <WishBox>
        {Object.keys(UserData)?.map((eachWish) => (
          <Wish>
            <p>{eachWish}</p>
          </Wish>
        ))}
      </WishBox>
      <WishBox></WishBox>
    </WishContainer>
  );
}
