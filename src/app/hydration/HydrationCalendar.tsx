// 'use client';

// import React from 'react';
// import { dehydrate } from '@tanstack/react-query';
// import getQueryClient from '../getQueryClient/getQueryclient';
// import { getTodoData } from '../../api/todo';
// import Hydrate from '../../utils/hydrate.clinet';
// import CalenderContainer from '../../components/Calender/CalenderContainer';
// import Todo from '../../components/TodoList/Todo';
// type Props = {
//   selecctedDay: string;
// };
// const HydrationCalendar: React.FC<Props> = async ({ selecctedDay }) => {
//   const queryClient = getQueryClient();
//   {/* @ts-expect-error Server Component */}
//   await queryClient.prefetchQuery(['todolist'], getTodoData);
//   const dehydratedState = dehydrate(queryClient);
//   return (
//     <Hydrate state={dehydratedState}>
//       <Todo />
//     </Hydrate>
//   );
// };

// export default HydrationCalendar;
