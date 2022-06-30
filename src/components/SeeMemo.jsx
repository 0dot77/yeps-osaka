import paper from '../assets/images/paper.jpg';
import styled from 'styled-components';
import memoData from '../db/memoData';

const Container = styled.section`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 55vw;
  height: 60vh;
`;

const MovieContainer = styled.article`
  width: 100%;
  height: 100%;
  background-image: url(${paper});
  display: flex;
  justify-content: center;
  align-items: center;
  iframe {
    width: 80%;
    height: 80%;
  }
`;

const ModalText = styled.div`
  width: 55vw;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  p {
    &:hover {
      text-shadow: ${(props) => props.theme.textShadow};
    }
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.textColor};
  }
`;

export default function SeeMemo({ setMemoCliced }) {
  return (
    <Container>
      <MovieContainer>
        <iframe
          src={memoData[Math.trunc(Math.random() * memoData.length)]}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </MovieContainer>
      <ModalText>
        <p
          onClick={() => {
            setMemoCliced(false);
          }}
        >
          닫기
        </p>
        <p
          onClick={() => {
            setMemoCliced(false);
          }}
        >
          閉じる
        </p>
      </ModalText>
    </Container>
  );
}
