import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import TabBar from '../../components/TabBar';
import MainHeader from '../../components/header/MainHeader';
import MonthCalender from '../../components/Calender/MonthCalender';
import getQueryClient from '../../lib/getQueryClient/getQueryclient';
import { dehydrate } from '@tanstack/react-query';
import { getTodoListQueryFns } from '../../utils/queryFns/todoListQueryFns';
import HydrateTodoList from '../../components/client/hydration/HydrateTodoList.clinet';
import moment from 'moment';

const MyTodo = async () => {
  const today = moment().format('YYYY-MM-DD')
  const queryclient = getQueryClient();
  await queryclient.prefetchQuery(['todolist',today], () => getTodoListQueryFns(today));
  const dehydarate = dehydrate(queryclient);

  return (
    <div className='p-6 w-full h-screen'>
      <MainHeader option='todo' />
      <UserProfile />
      <HydrateTodoList state={dehydarate}>
        <MonthCalender today={today}/>
      </HydrateTodoList>
      <TabBar />
    </div>
  );
};

export default MyTodo;
