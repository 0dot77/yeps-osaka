import styled from 'styled-components';
import { interviewsData } from '../db/interviewData';

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;
  overflow: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  font-size: 1.25rem;
`;

const TextBox = styled.li`
  margin-bottom: 20px;
  line-height: 2;
  width: 90%;
`;

export default function InterviewText({ interviewIndex, selectedLanguage }) {
  // selectedLanguage props를 받아서 0이면 한국어, 1이면 일본어를 받도록 한다.
  return (
    <Container>
      {selectedLanguage === 0
        ? interviewsData[`${interviewIndex}`].contents.kor.map((texts, index) => <TextBox key={index}>{texts}</TextBox>)
        : interviewsData[`${interviewIndex}`].contents.jap.map((texts, index) => (
            <TextBox key={index}>{texts}</TextBox>
          ))}
    </Container>
  );
}
