import { TodoData, ModifyTodo } from './../components/TodoList/TodoForm';
import { accessInstance } from './axios-api';
export interface Todo {
  id: string;
  title: string;
  emoji: string;
  dueDate: string;
  completed: string;
}
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
  const data = response.data;
  return data;
};

export const getIdTodoData = async (id: number) => {
  const response = await accessInstance.get(`/api/v1/todos/${id}`);
  const data = response.data;
  return data;
};

export const modifyTodoData = async (id: number, modifyTodo: ModifyTodo) => {
  const response = await accessInstance.patch(
    `/api/v1/todos/${id}`,
    modifyTodo
  );
  return response;
};

export const todoCompleted = async (id: number) => {
  const response = await accessInstance.patch(`/api/v1/todos/${id}/complete`);
  return response;
};

export const deleteTodoData = async (id: number) => {
  const response = await accessInstance.delete(`/api/v1/todos/${id}`);
  return response;
};
