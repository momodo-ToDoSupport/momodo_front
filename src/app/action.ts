'use server';
import { cookies } from 'next/dist/client/components/headers';

const cookieStore = cookies();

export const setCookie = async (key: string, value: string) => {
  cookieStore.set({
    name: key,
    value: value,
  });
};

export const getCookie = async (key: string): Promise<string | undefined> => {
  const cookie = cookieStore.get(key);
  return cookie?.value;
};
