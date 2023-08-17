import { TodoData } from './../components/TodoList/TodoForm';
import { accessInstance, instance } from './axios-api';

export const postTodoData = async (tododata: TodoData) => {
  const response = await accessInstance.post('/api/v1/todos', tododata);
  return response.data;
};

export const getTodoData = async (dueDatekey: string) => {
  const response = await accessInstance.get('/api/v1/todos/date', {
    params: {
      dueDate: dueDatekey,
    },
  });
  console.log(response);
  return response.data;
};

