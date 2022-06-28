import React from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Wishes from '../components/Wishes';
import { fetchWishes } from '../db/api';

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

const LoadingTextContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  p {
    text-align: center;
    color: ${(props) => props.theme.textColor};
  }
`;

export default function RealTimeWishes() {
  const { isLoading, data } = useQuery('wishes', () => fetchWishes(), { refetchInterval: 5000 });
  return (
    <Container>
      {isLoading ? (
        <LoadingTextContainer>
          <p>소원 쪽지를 불러오고 있습니다...</p>
        </LoadingTextContainer>
      ) : (
        <Wishes data={data} />
      )}
    </Container>
  );
}
