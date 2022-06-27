import styled from 'styled-components';
import WishObejct from '../components/WishObject';
import { useState } from 'react';
import modelData from '../db/modelData';

const Container = styled.section`
  width: 100%;
  height: 100%;
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
`;

const KorSection = styled.article`
  width: 100%;
  height: 100%;
  grid-column: 1/2;
  border-left: 3px dotted #ffffff;
`;

const JapSection = styled.article`
  width: 100%;
  height: 100%;
  grid-column: 3/4;
  border-right: 3px dotted #ffffff;
`;

const Caption = styled.article`
  width: 100%;
  height: 100%;
  grid-column: 2/3;
  border-left: 3px dotted #ffffff;
  border-right: 3px dotted #ffffff;
  text-align: center;
  font-size: ${(props) => props.theme.captionSize};
  color: ${(props) => props.theme.textColor};
  text-shadow: ${(props) => props.theme.textShadow};
  z-index: 100;
  background-color: transparent;
`;

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 83vh;
`;

const SelectTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 30px;
  }
`;

export default function WishAndTemple() {
  const [objectIndex, setObjectIndex] = useState(0);

  function handleObjectIndexIncrement() {
    setObjectIndex((current) => {
      current++;
      if (current > 3) {
        current = 0;
      }
      return current;
    });
  }

  function handleObjectIndexDecrement() {
    setObjectIndex((current) => {
      current--;
      if (current < 0) {
        current = 3;
      }
      return current;
    });
  }

  return (
    <Container>
      <KorSection />
      <WishObejct objectIndex={objectIndex} />
      <Caption>
        <SelectContainer>
          <svg
            onClick={handleObjectIndexDecrement}
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.727 3.687a1 1 0 1 0-1.454-1.374l-8.5 9a1 1 0 0 0 0 1.374l8.5 9.001a1 1 0 1 0 1.454-1.373L4.875 12l7.852-8.313Z"
              fill="#ffffff"
            />
          </svg>
          <SelectTextContainer>
            <p>{modelData[`${objectIndex}`].korName}</p>
            <p>{modelData[`${objectIndex}`].japName}</p>
          </SelectTextContainer>
          <svg
            onClick={handleObjectIndexIncrement}
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.273 3.687a1 1 0 1 1 1.454-1.374l8.5 9a1 1 0 0 1 0 1.374l-8.5 9.001a1 1 0 1 1-1.454-1.373L19.125 12l-7.852-8.313Z"
              fill="#ffffff"
            />
          </svg>
        </SelectContainer>
      </Caption>
      <JapSection />
    </Container>
  );
}
