import { TodoData } from './../components/TodoList/TodoForm';
import { accessInstance, instance } from './axios-api';
export interface Todo {
  id: string;
  title: string;
  emoji: string;
  dueDate: string;
  completed: string;
}
export const postTodoData = async (tododata: TodoData) => {
  const response = await accessInstance.post('/api/v1/todos', tododata);
  console.log('성공');
  return response.data;
};

export const getTodoData = async (dueDatekey: string) => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: dueDatekey,
    },
  });
  console.log('성공');
  const data = response.data;
  return data;
};

export const todoCompleted = async (id: number) => {
  const response = await accessInstance.patch(`/api/v1/todos/${id}/complete`);
  console.log('성공');
  return response;
};

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// export const getTodoListQueryFns = async (dueDatekey: string) => {
//   const accessToken = localStorage.getItem('accessToken');

//   const url = new URL('/api/v1/todos/date', BASE_URL);
//   url.searchParams.append('dueDate', dueDatekey);

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });

//     if (response.ok) {
//       const data = await response.json();
//       console.log('성공');
//       return data;
//     } else {
//       throw new Error('Request failed');
//     }
//   } catch (error) {
//     console.error('Failed to fetch data:', error);
//     throw error;
//   }
// };
