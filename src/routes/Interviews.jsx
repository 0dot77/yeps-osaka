import styled from 'styled-components';
import { useState, useRef, useEffect } from 'react';
import useWindowScrollEvent from '../hooks/useWindowScrollEvent';
import InterviewText from '../components/InterviewText';
import InterviewerText from '../components/InterviewerText';

const Container = styled.section`
  width: 100%;
  height: 100%;
  /* border: 1px solid green; */
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Interviewer = styled.article`
  width: 100%;
  height: 100%;
  grid-column: 2/3;
  border-left: 3px dotted #ffffff;
  border-right: 3px dotted #ffffff;
`;

const JapSection = styled.article`
  position: relative;
  width: 100%;
  height: 100vh;
  grid-column: 3/4;
  border-right: 3px dotted #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Interviews() {
  const [interviewIndex, setInterviewIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const mount = useRef([]);

  /** 화살표 기능
   * 화살표를 누르면 내용이 바뀜
   */

  /**
   * synchronize scroll
   * 커스텀 훅을 만들어서 사용해야할까???
   */

  return (
    <Container>
      <KorSection
        ref={(ref) => {
          mount[0] = ref;
        }}
      >
        {/* //인덱스 전달 */}
        <InterviewText interviewIndex={interviewIndex} />
      </KorSection>
      <Interviewer>
        {/* //인덱스 변경 함수 전달 */}
        <InterviewerText setInterviewIndex={setInterviewIndex} interviewIndex={interviewIndex} />
      </Interviewer>
      <JapSection>
        <InterviewText interviewIndex={interviewIndex} />
      </JapSection>
    </Container>
  );
}
