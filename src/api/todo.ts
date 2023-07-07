import { TodoData } from './../components/TodoList/TodoForm';
import { accessInstance, instance } from './axios-api';

export const postTodoData = async (tododata: TodoData) => {
  const response = await accessInstance.post('/api/v1/todos', tododata);
  console.log(response);
  return response.data;
};
