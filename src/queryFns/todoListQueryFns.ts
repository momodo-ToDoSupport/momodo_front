import { accessInstance } from '../api/axios-api';


export const getTodoListQueryFns = async (dueDatekey: string) => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: dueDatekey
    },
  });
  console.log('성공');
  const data = response.data;
  return data;
};

// Test QueryFN 수정필요(삭제예정)
export const getTodoListQueryFnss = async () => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: "2023-08-23"
    },
  });
  console.log('성공');
  const data = response.data;
  return data;
};
