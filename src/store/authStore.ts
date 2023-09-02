'use client'
import { atom } from 'jotai';

const initialUserId = localStorage.getItem('userId');
const initialUserTier = localStorage.getItem('tier');
const initialKakaoName = localStorage.getItem('kakaoName') || '';
const initialAccessToken = localStorage.getItem('accessToken') || '';

export const userAtom = atom({
  isLoggedIn: initialAccessToken !== '',
  userId: initialUserId,
  tier: initialUserTier,
  role: 'MEMBER',
});

export const kakaoAtom = atom({
  isLoggedIn: initialAccessToken !== '',
  kakaoName: initialKakaoName,
  role: 'KAKAO',
});
