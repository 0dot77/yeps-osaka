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
├── lil-gui@0.16.1
├── react-dom@18.1.0
├── react-router-dom@6.3.0
├── react@18.1.0
├── recoil@0.7.3
├── styled-components@5.3.5
├── three-stdlib@2.10.1
├── three@0.140.2
└── vite@2.9.6
```

## 해결 요망

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

_SOON_

- [ ] Mobile이나 Tablet에서의 ply 출력 에러 해결 필요
- [ ] ply file 자체 용량이 커서 페이지 진입할 때 loading page 제작 필요
