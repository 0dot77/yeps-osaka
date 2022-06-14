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
