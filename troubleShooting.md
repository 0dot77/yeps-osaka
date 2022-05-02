# 빌드할 때, threejs의 font-file load 오류

- font-file 자체를 우선 제거하고, threejs 에서 가져올 수 있는 font json 파일을 사용함
- ? 어떻게 font-file을 빌드시에 로드하는 지는 찾아보아야 함.

<strong>fix : vite로 빌드시 public 폴더에 asset을 추가하면 된다. 기존에 상대경로로 입력하던 것을 그냥 /assets/fonts로 지정해주면 된다.</strong>
