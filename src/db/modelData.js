import rockUrl from '../assets/models/ATrock.glb?url';
import fridgeUrl from '../assets/models/wishFridge.glb?url';
import smartphoneUrl from '../assets/models/smartphoneWish.glb?url';

const modelData = {
  0: {
    korName: '돌탑',
    japName: '石塔',
    url: rockUrl,
    scale: [0.35, 0.35, 0.35],
  },
  1: {
    korName: '냉장고',
    japName: '冷蔵庫',
    url: fridgeUrl,
    scale: [0.35, 0.35, 0.35],
  },
  2: {
    korName: '유튜브',
    japName: 'YouTube',
    url: smartphoneUrl,
    scale: [10, 10, 10],
  },
  3: {
    korName: '게임',
    japName: 'ゲーム',
    url: rockUrl,
    scale: [0.35, 0.35, 0.35],
  },
};

export default modelData;
