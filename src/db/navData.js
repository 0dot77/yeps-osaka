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
    titleContents: `'村,\n所願,\n神堂'`,
    titleFont: 'j-font',
  },
  description: {
    descriptionContents:
      'ここは大韓民国ソウル特別市城北区石棺洞340-17(花郎32街道17)、石棺洞の陶唐前の木です。昔、村の人たちはその度にこの都堂に集まって祭祀を行い、村のおばあさん神様に一年の安寧と豊年を祈りながら食べ物を分けて食べました。ここは願い事をする空間です。木の間にかかっている願いを探してみてください。',
    descriptionFont: 'j-menu',
  },
  menu: {
    menuContents: [
      {
        title: 'リアルタイム願い',
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
        title: '願い、 新党',
        id: 3,
        url: '/wish-and-temple',
        class: 'wishAndTemple',
      },
      {
        title: '新党入り',
        id: 4,
        url: '/web-game',
        class: 'webGame',
      },
    ],
    menuFont: 'j-menu',
  },
};
