import { accessInstance } from '../../service/axios-api';

export const getTodoListQueryFns = async (dueDatekey: string) => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: dueDatekey,
    },
  });
  const data = response.data;
  return data;
};

export const getUncompletedTodolistFns = async (yearMonthkey: string) => {
  const response = await accessInstance.get('/api/v1/todos/not-complete', {
    params: { yearMonth: yearMonthkey },
  });
  const data = response.data;
  return data;
};

export const getTodohistoryFns = async (yearMonthkey: string) => {
  const response = await accessInstance.get('/api/v1/todo-histories/yearMonth', {
    params: {
      yearMonth: yearMonthkey,
    },
  });
  const data = response.data;
  return data;
};
