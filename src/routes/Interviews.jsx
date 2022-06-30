import styled from 'styled-components';
import { useState } from 'react';
import InterviewText from '../components/InterviewText';
import InterviewerText from '../components/InterviewerText';

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  color: ${(props) => props.theme.textColor};
`;

const KorSection = styled.ul`
  position: relative;
  width: 100%;
  height: 100vh;
  grid-column: 1/2;
  border-left: 3px dotted #ffffff;
  border-right: 3px dotted #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Interviewer = styled.article`
  width: 100%;
  height: 100%;
  grid-column: 2/3;
`;

const JapSection = styled.ul`
  position: relative;
  width: 100%;
  height: 100vh;
  grid-column: 3/4;
  border-left: 3px dotted #ffffff;
  border-right: 3px dotted #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Interviews() {
  const [interviewIndex, setInterviewIndex] = useState(0);
  const selectedkor = 0;
  const selectedjap = 1;

  return (
    <Container>
      <KorSection>
        {/* //인덱스 전달 */}
        <InterviewText interviewIndex={interviewIndex} selectedLanguage={selectedkor} />
      </KorSection>
      <Interviewer>
        {/* //인덱스 변경 함수 전달 */}
        <InterviewerText setInterviewIndex={setInterviewIndex} interviewIndex={interviewIndex} />
      </Interviewer>
      <JapSection>
        <InterviewText interviewIndex={interviewIndex} selectedLanguage={selectedjap} />
      </JapSection>
    </Container>
  );
}
