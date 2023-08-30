import { accessInstance } from '../../service/axios-api';
import moment from 'moment';

export const getTodoListQueryFns = async (
  dueDatekey: string
) => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: dueDatekey,
    },
  });
  console.log('getTodo 성공');
  const data = response.data;
  return data;
};

export const getUncompletedTodolistFns = async (yearMonthkey: string) => {
  const response = await accessInstance.get('/api/v1/todos/not-complete', {
    params: { yearMonth: yearMonthkey },
  });
  console.log('미완료투두 성공');
  const data = response.data;
  return data;
};

// Test QueryFN 수정필요(삭제예정)
export const getTodoListQueryFnss = async () => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: '2023-08-17',
    },
  });
  console.log('테스트Todo성공');
  const data = response.data;
  return data;
};
