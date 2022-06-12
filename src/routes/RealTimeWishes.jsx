import React, { useEffect, useState } from 'react';
import SectionLeftNav from '../components/section-navi/SectionLeftNav';
import SectionRightNav from '../components/section-navi/SectionRightNav';
import SubPageContainer from '../styles/subPageContainer';
import { WishContainer, WishSection, Wishes } from '../styles/realTimeStyles';
import { db } from '../db/firebase';
import { uid } from 'uid';

/**
 * 기능
 * firebase를 활용해서
 */

export default function RealTimeWishes() {
  //json data를 fetch한 뒤에 내가 사용할 부분만 배열에 넣어줘야 함
  const [fetchData, setFetchData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((json) => {
        setFetchData(json);
        setLoading(false);
      });
  }, []);

  return (
    <SubPageContainer>
      <SectionLeftNav />
      <WishContainer>
        <WishSection>
          {loading
            ? '로딩중'
            : fetchData.map((lists) => (
                <Wishes>
                  <p>{lists.title}</p>
                </Wishes>
              ))}
        </WishSection>
        <WishSection>
          {loading
            ? '로딩중'
            : fetchData.map((lists) => (
                <Wishes>
                  <p>{lists.title}</p>
                </Wishes>
              ))}
        </WishSection>
      </WishContainer>
      <SectionRightNav />
    </SubPageContainer>
  );
}
