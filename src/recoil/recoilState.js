import { atom } from 'recoil';

export const themeState = atom({
  key: 'themeState',
  default: 'light', // 기본 테마를 light로 설정합니다.
});
