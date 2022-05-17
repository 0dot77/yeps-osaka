# _DEV-LOG_

```
⚒ 0516
```

## 기록

- three-Js를 React project에 덧입히기 위해 react-fiber를 사용하기로 함.
  - 기존에는 react에서 바로 threejs를 임포트 해서 사용했는데, 최적화 문제 등... 단기간에 해결하기 어려운 문제들이 산적해있다고 판단함 -> React에 우선 최적화 되어있는 fiber 라이브러리 사용.

## <mark>해결 요망</mark>

1. ~~**Orbit control을 전체 화면에서 활용해야 한다.**~~
   - 지금은 canvas가 나뉘어 있어서, 각각의 캔버스를 클릭한 상태를 유지해야 orbit-control이 이루어지는 데, 어떻게 전체 화면을 클릭했을 때도 컨트롤이 될 수 있도록 할 수 있을까?
2. ~~Box geometry에 불필요한 wireframe 제거 필요~~
3. ~~PLY 파일을 GLB 파일로 바꾸고 업로드 하기~~
   - ply file 자체 용량이 커서 페이지 진입할 때 loading page도 해결해야 함.

```
⚒ 0517
```

## 해결

- Navigation 과 Canvas 독립의 문제
  - 전체 container 안에다가 canvas를 넣고 진행을 했는데, threejs 자체를 전체적으로 보여주고 클릭 기능까지 들어가길 바랐다.
  - 문제는, Navigation Container를 하나 따로 만들고 진행하니까 뒤에 가려져 있는 Canvas의 인터렉션이 감지가 안됐다. 그래서 Navigation style을 따로 빼주고, 오른쪽 왼쪽 nav를 분리해서 작업을 진행했다.
- PLY file 업로드
  - react-three-fiber 라이브러리의 경우에 GLTF, obj 형식의 파일을 지원하고 있었다. 포인트 클라우드 파일을 웹에 띄워야 했기 떄문에, PLY loader를 사용할 수 있어야 했는데, 검색 실패를 맞이했다.
  - 그래서 메인에 진입할 때 전체 화면으로 나타나는 threejs 화면은 기존의 useRef를 사용해서 마운트 하는 방식으로 제작헀다. point cloud 자체가 메모리를 많이 먹는 방식인건지...는 아직 확실하게 알진 못하지만, 어쨌든 활용할 수 있는 방법을 쓰는 게 적절하다고 판단했다.
