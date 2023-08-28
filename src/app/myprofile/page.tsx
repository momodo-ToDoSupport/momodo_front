import React from 'react';
import MainHeader from '../../components/header/MainHeader';
import TabBar from '../../components/TabBar';
import Tier from '../../components/Tier';
import UserProfile from '../../components/UserProfile/UserProfile';
import { TodoManageMent } from '../../components/TodoManageMent';
import getQueryClient from '../../lib/getQueryClient/getQueryclient';
import { dehydrate } from '@tanstack/react-query';
import { getUncompletedTodolistFns } from '../../utils/queryFns/todoListQueryFns';
import HydrateTodoList from '../../components/client/hydration/HydrateTodoList.clinet';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const myprofile = async () => {
  // const yearMonthkey = '2023-08'
  // const queryclient = getQueryClient();
  // await queryclient.prefetchQuery(['UnTodoList', yearMonthkey], () =>
  //   getUncompletedTodolistFns(yearMonthkey)
  // );
  // const dehydarate = dehydrate(queryclient);
  // console.log(localStorage.getItem('accessToken'));


  return (
    <div className='p-6 w-full h-screen'>
      <MainHeader option='myprofile' />
      <UserProfile option='follow' />
      <Tier />
      {/* <HydrateTodoList state={dehydarate}> */}
      <TodoManageMent />
      {/* </HydrateTodoList> */}
      <TabBar />
    </div>
  );
};

export default myprofile;
