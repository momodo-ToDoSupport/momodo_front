import { atom } from 'jotai';

const initialUserId = localStorage.getItem('userId') || '';
const initialAccessToken = localStorage.getItem('accessToken') || '';

export const userAtom = atom({
  isLoggedIn: initialAccessToken !== '',
  userId: initialUserId,
});
