import { useCookies } from 'react-cookie';

export const useTokenCookies = () => {
  const [cookies, setCookie] = useCookies(['refreshtoken']);

  const setAccessToken = (accessToken: string) => {
    localStorage.setItem('accessToken', accessToken);
  };

  const setRefreshToken = (refreshToken: string) => {
    setCookie('refreshtoken', refreshToken, {
      path: '/',
      httpOnly: true,
    });
  };

  return { setAccessToken, setRefreshToken };
};
