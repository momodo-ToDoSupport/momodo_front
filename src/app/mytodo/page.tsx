// import React from 'react';
// import UserProfile from '../../components/UserProfile/UserProfile';
// import TabBar from '../../components/TabBar';
// import MainHeader from '../../components/header/MainHeader';
// import MonthCalender from '../../components/Calender/MonthCalender';
// import getQueryClient from '../../lib/getQueryClient'
// import { dehydrate } from '@tanstack/react-query';
// import { getTodoListQueryFns } from '../../queryFns/todoListQueryFns';
// import HydrateTodoList from '../../components/client/hydration/HydrateTodoList.clinet'

// const MyTodo = async() => {
//   const queryclient = getQueryClient();
//   {/* @ts-expect-error Server Component */}
//   await queryclient.prefetchQuery(['todolist'],getTodoListQueryFns);
//   const dehydarate = dehydrate(queryclient);

//   return (
//     <div className='p-6 w-full h-screen'>
//       <MainHeader option='todo' />
//       <UserProfile />
//       <HydrateTodoList state={dehydarate}>
//         <MonthCalender />
//       </HydrateTodoList>
//       <TabBar />
//     </div>
//   );
// };

// export default MyTodo;

import React from 'react';
import UserProfile from '../../components/UserProfile/UserProfile';
import TabBar from '../../components/TabBar';
import MainHeader from '../../components/header/MainHeader';
import MonthCalender from '../../components/Calender/MonthCalender';


const MyTodo = async () => {
  return (
    <div className='p-6 w-full h-screen'>
      <MainHeader option='todo' />
      <UserProfile />
      {/* <HydrateTodoList state={dehydarate}>
      </HydrateTodoList> */}
      <MonthCalender />
      <TabBar />
    </div>
  );
};

export default MyTodo;
