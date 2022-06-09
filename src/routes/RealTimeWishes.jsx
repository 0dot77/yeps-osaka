import React, { useEffect, useState } from 'react';
import SectionLeftNav from '../components/section-navi/SectionLeftNav';
import SectionRightNav from '../components/section-navi/SectionRightNav';
import SubPageContainer from '../styles/subPageContainer';
import { WishContainer, WishSection, Wishes } from '../styles/realTimeStyles';

// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';

// const firebaseConfig = {
//   apiKey: 'AIzaSyAUFDzXoptIQVBDfGQeyIPf7y-k0FP5vR4',
//   authDomain: 'yeps-osaka.firebaseapp.com',
//   projectId: 'yeps-osaka',
//   storageBucket: 'yeps-osaka.appspot.com',
//   messagingSenderId: '950685289522',
//   appId: '1:950685289522:web:886c7d5ac70c096b4e002b',
//   measurementId: 'G-Y3TDWWNE79',
// };

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
  // console.log(fetchData);
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
