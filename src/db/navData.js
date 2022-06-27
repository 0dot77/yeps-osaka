export const leftNavProps = {
  navTitle: {
    titleContents: `마을,\n소원,\n신당`,
    titleFont: 'dok-lip',
  },
  description: {
    descriptionContents:
      '이곳은 대한민국 서울특별시 성북구 석관동 340-17 (화랑로32가길 17), 석관동 도당 앞의 나무입니다. 예전 마을사람들은 때마다 이곳 도당에 모여 제를 올리고, 마을의 할머니 신께 한 해의 안녕과 풍년을 빌며 음식을 나누어 먹었습니다.이곳은 소원을 빌고 가는 공간입니다. 나무 사이에 걸려있는 소원들을 찾아보세요.',
    descriptionFont: 'k-menu',
  },
  menu: {
    menuContents: [
      {
        title: '실시간 소원',
        id: 1,
        url: '/realtime-wishes',
        class: 'realTime',
      },
      {
        title: '인터뷰 자료',
        id: 2,
        url: '/interviews',
        class: 'interviews',
      },
      {
        title: '소원, 신당',
        id: 3,
        url: '/wish-and-temple',
        class: 'wishAndTemple',
      },
      {
        title: '신당 들어가기',
        id: 4,
        url: '/web-game',
        class: 'webGame',
      },
    ],
    menuFont: 'k-menu',
  },
};

export const rightNavProps = {
  navTitle: {
    titleContents: `村、\n願い、\n神堂`,
    titleFont: 'j-font',
  },
  description: {
    descriptionContents:
      'ここは韓国ソウル特別市城北区石串洞340-17(17,Hwarang-ro 32ga-gil)、石棺洞の堂の前にある木です。 昔の村人たちは一年ごとにこの都堂に集まって祭祀を挙げ、村の神様に今年の安寧と豊年を祈りながら、皆んなで食事をしました。ここは願いを祈る空間です。 木にかかっている願いを探してみてください。',
    descriptionFont: 'j-menu',
  },
  menu: {
    menuContents: [
      {
        title: 'リアルタイムの願い',
        id: 1,
        url: '/realtime-wishes',
        class: 'realTime',
      },
      {
        title: 'インタビュー資料',
        id: 2,
        url: '/interviews',
        class: 'interviews',
      },
      {
        title: '願い、神堂',
        id: 3,
        url: '/wish-and-temple',
        class: 'wishAndTemple',
      },
      {
        title: '神堂に入る',
        id: 4,
        url: '/web-game',
        class: 'webGame',
      },
    ],
    menuFont: 'j-menu',
  },
};
