// import React from 'react';
// import HydrateTodoList from '../../components/client/hydration/HydrateTodoList.clinet';
// import TodoList from '../../components/client/Todo/TodoList.client';
// import getQueryClient from '../getQueryClient/getQueryclient';
// import { dehydrate } from '@tanstack/react-query';
// import { getTodoListQueryFns } from '../../queryFns/todoListQueryFns';

// const todoListPage = async () => {
//   const queryclient = getQueryClient();
//   {/* @ts-expect-error Server Component */}
//   await queryclient.prefetchQuery(['todolist'], getTodoListQueryFns);
//   const dehydarate = dehydrate(queryclient);
//   return (
//     <HydrateTodoList state={dehydarate}>
//       <TodoList />
//     </HydrateTodoList>
//   );
// };
// export default todoListPage;
