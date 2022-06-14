import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import Wishes from '../components/Wishes';
import { fetchWishes } from '../db/api';

const Container = styled.section`
  width: 100%;
  height: 100%;
`;

export default function RealTimeWishes() {
  const { isLoading, data } = useQuery('wishes', () => fetchWishes(), { refetchInterval: 5000 });
  return <Container>{isLoading ? <h1>{'loading'}</h1> : <Wishes data={data} />}</Container>;
}
