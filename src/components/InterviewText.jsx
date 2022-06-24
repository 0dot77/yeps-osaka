import styled from 'styled-components';
import { interviewsData } from '../db/interviewData';

const Container = styled.ul`
  margin-top: 1rem;
  width: 90%;
  word-break: break-all;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const TextBox = styled.li`
  margin-bottom: 20px;
  line-height: 1.2;
`;

export default function InterviewText({ interviewIndex }) {
  return (
    <Container>
      {interviewsData[`${interviewIndex}`].contents.kor.map((texts, index) => (
        <TextBox key={index}>{texts}</TextBox>
      ))}
    </Container>
  );
}
