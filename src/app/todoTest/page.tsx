import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import TabBar from '../../components/TabBar';
import MainHeader from '../../components/header/MainHeader';
import TodolistTest from '../../components/client/Todo/TodoListTest.client';
import getQueryClient from '../../lib/getQueryClient/getQueryclient';
import { dehydrate } from '@tanstack/react-query';
import { getTodoListQueryFnss } from '../../utils/queryFns/todoListQueryFns';
import HydrateTodoList from '../../components/client/hydration/HydrateTodoList.clinet';

const MyTodo = async () => {
  const queryclient = getQueryClient();
  await queryclient.prefetchQuery(['Test'], () => getTodoListQueryFnss());
  const dehydarate = dehydrate(queryclient);

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
