```

 ▄▀▀▄    ▄▀▀▄  ▄▀▀█▀▄   ▄▀▀▀▀▄  ▄▀▀▄ ▄▄       ▄▀▀▀█▀▀▄  ▄▀▀▄▀▀▀▄  ▄▀▀█▄▄▄▄  ▄▀▀█▄▄▄▄
█   █    ▐  █ █   █  █ █ █   ▐ █  █   ▄▀     █    █  ▐ █   █   █ ▐  ▄▀   ▐ ▐  ▄▀   ▐
▐  █        █ ▐   █  ▐    ▀▄   ▐  █▄▄▄█      ▐   █     ▐  █▀▀█▀    █▄▄▄▄▄    █▄▄▄▄▄
  █   ▄    █      █    ▀▄   █     █   █         █       ▄▀    █    █    ▌    █    ▌
   ▀▄▀ ▀▄ ▄▀   ▄▀▀▀▀▀▄  █▀▀▀     ▄▀  ▄▀       ▄▀       █     █    ▄▀▄▄▄▄    ▄▀▄▄▄▄
         ▀    █       █ ▐       █   █        █         ▐     ▐    █    ▐    █    ▐
              ▐       ▐         ▐   ▐        ▐                    ▐         ▐

```

## Packages

```
📦
├── @react-three/drei@9.11.0
├── @react-three/fiber@8.0.16
├── @types/react-dom@18.0.3
├── @types/react@18.0.8
├── @vitejs/plugin-react@1.3.1
├── firebase@9.8.2
├── lil-gui@0.16.1
├── react-dom@18.1.0
├── react-query@3.39.1
├── react-router-dom@6.3.0
├── react@18.1.0
├── recoil@0.7.3
├── styled-components@5.3.5
├── three-stdlib@2.10.1
├── three@0.140.2
├── uid@2.0.0
└── vite@2.9.6
```

## dev-log

_2022.05.16_

- [x] Orbit control을 전체 화면에서 활용해야 한다.
- [x] Box geometry에 불필요한 wireframe 제거 필요

_2022.05.17_

- [x] PLY 파일을 GLB 파일로 바꾸고 업로드 하기
  1. react-three-fiber 라이브러리의 경우에 GLTF, obj 형식의 파일을 지원하고 있었다. 포인트 클라우드 파일을 웹에 띄워야 했기 떄문에, PLY loader를 사용할 수 있어야 했는데, 검색 실패를 맞이했다.
  2. 그래서 메인에 진입할 때 전체 화면으로 나타나는 threejs 화면은 기존의 useRef를 사용해서 마운트 하는 방식으로 제작헀다. point cloud 자체가 메모리를 많이 먹는 방식인건지...는 아직 확실하게 알진 못하지만, 어쨌든 활용할 수 있는 방법을 쓰는 게 적절하다고 판단했다.
- [x] Navigation 과 Canvas 독립의 문제
  1. 전체 container 안에다가 canvas를 넣고 진행을 했는데, threejs 자체를 전체적으로 보여주고 클릭 기능까지 들어가길 바랐다.
  2. 문제는, Navigation Container를 하나 따로 만들고 진행하니까 뒤에 가려져 있는 Canvas의 인터렉션이 감지가 안됐다.
  3. 그래서 Navigation style을 따로 빼주고, 오른쪽 왼쪽 nav를 분리해서 작업을 진행했다.

_2022.06.04_

- [x] Realtime으로 입력된 소원이 출력될 수 있는 페이지 레이아웃 구성
- [x] Multihover state 를 Recoil을 활용해서 전역으로 사용할 수 있는 state로 변경

_2022.06.11_

- [ ] Firebase Realtime DB 연결 및 테스트 ⭐️
  - [Firebase - CRUD using Realtime Database](https://youtu.be/azdwN_4IDKA)
  - [x] Firebase api key 등 민감 정보 .env로 관리하기 [Vite의 환경변수와 모드](https://vitejs-kr.github.io/guide/env-and-mode.html#env-variables)
- [x] ThemeProvider로 공통된 스타일 전역으로 관리하기
- [x] menu hover시에 살짝씩 스타일 뭉게지는 것 해결하기
  - createGlobalStyle의 문제였다. 페이지가 재-랜더링이 이뤄지면서 스타일을 다시금 받아오기 때문이다. [React Styled-Components Font Reloading](https://ryublock.tistory.com/37)
  - font에 해당하는 모듈을 따로 만들어서 App.jsx에 임포트 시켜서 사용 -> hover 시 flickering 없어짐!
- [x] vite의 상대경로 수정하기
  - asset을 public에 놓고 있었기 때문에 참조를 못하거나, 갖고오지 못하는 경우가 있었음
  - ply의 경우에는 `import treeUrl from '../assets/models/tree.ply?url';` ?url을 사용해서 경로를 처리해줌

_2022.06.13_

- [ ] ply loading 만들기
- [x] wish tree 카메라 회전 방식 바꾸기
  - y축 회전
  - 엎어지지 않도록?
- [x] component 분할 방법 고민하기

  - 컴포넌트를 최대한 추상화 시켰음
  - 기존의 leftNav, rightNav를 하나의 Nav로 합쳐서 동일한 규격을 이루는 Nav를 만들어 props를 전달해 관리하는 것으로 수정

- [x] 메뉴 hover할 때, 메뉴 자체가 조금씩 위 아래로 움직이는 현상 해결하기

  - border-bottom의 문제일 경우가 있음.

_2022.06.14_

- [x] 추상화한 컴포넌트를 기반으로 다시 구조 제작
- [x] react-router를 사용해서 nav 중앙에 들어가는 페이지를 갈아 끼우는 식으로 제작해보기
  - page를 이동하는 방식? -> canvas에 링크 사용하기?

_2022.06.18_

- [x] useEffect를 사용할 때, 랜더링이 두 번 되어 메모리 누수가 일어나는 것 같음 (캔버스 랜더링 두 차례 됨) 해결 방법 찾기
  - 완벽한 해결은 어려웠다. useEffect의 clenup function을 다룸과 동시에 메인으로 돌아갔을 때 재 랜더링이 되어야 하는데, 컴포넌트 자체를 삭제하고 생성하는 과정에서 DOM과의 mount 문제를 해결하지 못했다.
  - 어설픈 방법일 수 있지만, CSS를 사용해서 컴포넌트 자체를 display:none으로 바꿔 랜더링 하는 요소에서 지워줬다. canvas를 하나 더 랜더링 하는 것보다는 나은 것 같다.
- [ ] 쪽지 오브젝트 업로드 및 인터렉티브 구현 (영상 출력되도록 만들기)
- [x] Mobile이나 Tablet에서의 ply 출력 에러 해결 필요
  - ply를 랜더링 하는 방식에서 mesh 자체를 point mesh로 바꿔서 해결했다. (모든 기기에서 잘 동작함)
- [x] ply file 자체 용량이 커서 페이지 진입할 때 loading page 제작 필요
  - [adding loading Scene](https://www.youtube.com/watch?v=3umV-dEYttU)

_2022.06.20_

- [x] 각각의 페이지 제작 완료하기
- [x] 자료 아카이빙 페이지에는 소원 오브제가 gltf로 올라가게끔 만들기
- [ ] 메인페이지가 아닌 중첩 라우팅 된 페이지로 바로 접속했을 때 404에러 발생 해결하기
- [ ] 쪽지 오브젝트 형형색색으로 많이 만들기
  - threejs object instancing
  - [THREE.Object3D.add: object not an instance of THREE.Object3D](https://stackoverflow.com/questions/30147002/three-object3d-add-object-not-an-instance-of-three-object3d)

_2022.06.21_

- [x] 일본어 메뉴 폰트 조금 줄이기
  - nav로 묶어놨고, 전체적인 통일감을 위해 폰트사이즈 전체를 줄였음

_2022.06.24_

- [ ] 전시 때 활용할 아이패드로 보여줄 페이지 따로 빼서 라우팅 시켜놓기 (interview / realtime-wish)
- [x] main page : 쪽지 오브젝트 / 클릭했을 때 영상 팝업 구현
  - 구현은 마무리 했는데, 문제 발생 : threejs에서 raycasting을 구현하면 포인트 클라우드가 다 잡혀버려서 최적화도 어렵고, 클릭 할 때마다 버벅임이 발생한다. 지금 상황에서는 마땅한 해결법이 떠오르지 않아서 우선 대안으로 쪽지를 나무 주변으로 퍼뜨려놓고, 클릭이 될 수 있도록 구현하는 게 가장 이상적인 것 같음

_SOON_

- [ ] 소원이 들어가는 곳에서 한국어랑 일어가 길이가 달라지면 박스가 약간 모양이 달라지는 경우가 생김 해결 필요
- 최종 수정 사항
  - [ ] Interview page : 멀티 스크롤 구현
  - [ ] Wish Object page : 오브젝트 및 설명 업로드
