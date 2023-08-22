import React from 'react'
import Hydrate from '../../components/hydration/hydrate.clinet'
import TodoList from '../../components/client/Todo/TodoList.client'
import getQueryClient from '../getQueryClient/getQueryclient'
import { dehydrate } from '@tanstack/react-query'
import { getTodoData } from '../../api/todo'
import moment from 'moment';

const Todolist = async () => {
  const selecctedDay = moment().format('YYYY-MM-DD');
  const queryclinet = getQueryClient();
  {/*@ts-expect-error Server Component*/}
  await queryclinet.prefetchQuery(['todolist'],getTodoData);
  const dehydarate = dehydrate(queryclinet)
  return (
    <Hydrate state={dehydarate}>
        <TodoList />
    </Hydrate>
  )
}

export default Todolist