import styled from 'styled-components';
import { interviewsData } from '../db/interviewData';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 82vh 18vh;
`;

const InterviewBoxKor = styled.div`
  grid-row: 1/2;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-left: 0.3rem;
`;

const InterviewBoxJap = styled.div`
  grid-row: 2;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 30% 70%;
  /* border: 1px solid red; */
  padding-left: 0.3rem;
`;

const InterviewerJap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffff80;
  grid-row: 1/2;
  width: 100%;
`;

const InterviewerJapDescription = styled.div`
  grid-row: 2;
  font-size: 2rem;
  line-height: 2;
  width: 100%;
  height: 100%;
  overflow: scroll;
  text-align: center;
  word-break: break-all;
  display: flex;
  justify-content: center;
`;

const DescriptionTextBox = styled.div`
  width: 90%;
`;

const Interviwers = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 10px 0 10px;
  align-items: flex-end;
  height: 5%;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.2;
  p {
    width: 70%;
    text-align: center;
    text-shadow: ${(props) => props.theme.textShadow};
  }
`;

const InterviwersDescription = styled.p`
  /* margin-bottom: 2rem; */
  padding: 1rem;
  font-size: 2rem;
  word-break: break-all;
  line-height: 2;
  text-align: center;
`;

export default function InterviewerText({ setInterviewIndex, interviewIndex }) {
  function handleClickDecrease() {
    setInterviewIndex((current) => {
      if (current !== 0) {
        current--;
      }
      return current;
    });
  }

  function handleClickIncrease() {
    setInterviewIndex((current) => {
      if (current !== Object.keys(interviewsData).length - 1) {
        current++;
      }
      return current;
    });
  }
  return (
    <Container>
      <InterviewBoxKor>
        <InterviwersDescription>{interviewsData[`${interviewIndex}`].main.korSubTitle}</InterviwersDescription>
        <InterviewerJapDescription>
          <DescriptionTextBox>{interviewsData[`${interviewIndex}`].main.japSubTitle}</DescriptionTextBox>
        </InterviewerJapDescription>
        <Interviwers>
          <svg
            onClick={handleClickDecrease}
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
          <p>{interviewsData[`${interviewIndex}`].main.korTitle}</p>
          <svg
            onClick={handleClickIncrease}
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
        </Interviwers>
      </InterviewBoxKor>
      <InterviewBoxJap>
        <InterviewerJap>{interviewsData[`${interviewIndex}`].main.japTitle}</InterviewerJap>
      </InterviewBoxJap>
    </Container>
  );
}
