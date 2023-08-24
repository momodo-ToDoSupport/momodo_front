import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import TabBar from '../../components/TabBar';
import MainHeader from '../../components/header/MainHeader';
import MonthCalender from '../../components/Calender/MonthCalender';
import getQueryClient from '../getQueryClient/getQueryclient';
import { dehydrate } from '@tanstack/react-query';
import { getTodoListQueryFnss } from '../../queryFns/todoListQueryFns';
import HydrateTodoList from '../../components/client/hydration/HydrateTodoList.clinet'
import TodolistTest from '../../components/client/Todo/TodoListTest.client'

const MyTodo = async() => {
  const queryclient = getQueryClient();
  await queryclient.prefetchQuery(['todolist'],getTodoListQueryFnss);
  const dehydarate = dehydrate(queryclient);
  console.log(queryclient);

  return (
    <div className='p-6 w-full h-screen'>
      <MainHeader option='todo' />
      <UserProfile />
      <HydrateTodoList state={dehydarate}>
        <TodolistTest />
      </HydrateTodoList>
      <TabBar />
    </div>
  );
};

export default MyTodo;