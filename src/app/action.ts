'use server';

import { cookies } from 'next/dist/client/components/headers';

// setCookie([
//   {key:"acc",value:token}
// ])

// export const setCookie = async (key: string, value: string) => {
//   return cookieStore.set({
//     name: key,
//     value: value,
//   });
// };

// type 수정필요
export const setCookie = async(arr:any[])=> {
  const cookieStore = cookies();

  return arr.forEach(({key, value})=>{
    cookieStore.set({
      name:key,
      value:value,
    })
  })
}

export const getCookie = async (key: string): Promise<string | undefined> => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(key);
  return cookie?.value;
};
