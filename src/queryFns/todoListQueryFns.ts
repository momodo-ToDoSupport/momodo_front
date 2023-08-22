import { accessInstance } from '../api/axios-api';

export const getTodoListQueryFns = async (dueDatekey: string) => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: dueDatekey,
    },
  });
  console.log('성공');
  const data = response.data;
  return data;
};
