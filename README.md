# _DEV-LOG_

```
⚒ 0516
```

## 기록

- three-Js를 React project에 덧입히기 위해 react-fiber를 사용하기로 함.
  - 기존에는 react에서 바로 threejs를 임포트 해서 사용했는데, 최적화 문제 등... 단기간에 해결하기 어려운 문제들이 산적해있다고 판단함 -> React에 우선 최적화 되어있는 fiber 라이브러리 사용.

## <mark>해결 요망</mark>

1. **Orbit control을 전체 화면에서 활용해야 한다.**
   - 지금은 canvas가 나뉘어 있어서, 각각의 캔버스를 클릭한 상태를 유지해야 orbit-control이 이루어지는 데, 어떻게 전체 화면을 클릭했을 때도 컨트롤이 될 수 있도록 할 수 있을까?
2. Box geometry에 불필요한 wireframe 제거 필요
3. PLY 파일을 GLB 파일로 바꾸고 업로드 하기
   - ply file 자체 용량이 커서 페이지 진입할 때 loading page도 해결해야 함.
