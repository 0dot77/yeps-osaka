import { atom } from 'recoil';
export const multiHover = atom({
  key: 'multiHover',
  default: null,
});

export const menuBoxClicked = atom({
  key: 'menuBoxClicked',
  default: false,
});

export const menuClicked = atom({
  key: 'menuClicked',
  default: false,
});

export const path = atom({
  key: 'path',
  default: null,
});

export const wishData = atom({
  key: 'wishData',
  default: [],
});

// 클릭된 메뉴의 클래스를 저장
export const clickedMenu = atom({
  key: 'clickedMenu',
  default: null,
});

// 클릭된 메뉴의 height 값 저장
// divider에 전달
export const menuHeight = atom({
  key: 'menuHeight',
  default: [],
});
