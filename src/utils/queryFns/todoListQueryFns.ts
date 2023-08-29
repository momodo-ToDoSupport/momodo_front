import { accessInstance } from '../../service/axios-api';
import moment from 'moment'

export const getTodoListQueryFns = async (dueDatekey: string = moment().format('YYYY-MM-DD')) => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: dueDatekey,
    },
  });
  console.log('성공');
  const data = response.data;
  console.log(response);
  return data;
};

export const getUncompletedTodolistFns = async (yearMonthkey: string) => {
  const response = await accessInstance.get('/api/v1/todos/not-complete', {
    params: { yearMonth: yearMonthkey },
  });
  console.log('미완료투두 성공')
  const data = response.data;
  return data
};

// Test QueryFN 수정필요(삭제예정)
export const getTodoListQueryFnss = async () => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: '2023-08-23',
    },
  });
  console.log('성공');
  const data = response.data;
  return data;
};
