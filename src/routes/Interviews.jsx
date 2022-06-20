import styled from 'styled-components';

const Container = styled.section`
  width: 100%;
  height: 100%;
  /* border: 1px solid green; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const KorSection = styled.article`
  width: 100%;
  height: 100%;
  grid-column: 1/2;
  border-left: 3px dotted #ffffff;
`;

const Interviewer = styled.article`
  width: 100%;
  height: 100%;
  grid-column: 2/3;
  border-left: 3px dotted #ffffff;
  border-right: 3px dotted #ffffff;
`;

const JapSection = styled.article`
  width: 100%;
  height: 100%;
  grid-column: 3/4;
  border-right: 3px dotted #ffffff;
`;

export default function Interviews() {
  return (
    <Container>
      <KorSection />
      <Interviewer />
      <JapSection />
    </Container>
  );
}
