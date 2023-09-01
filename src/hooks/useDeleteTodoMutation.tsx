import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteTodoData } from '../service/todo';

export const useDeleteTodoMutation = () => {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation(deleteTodoData, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todolist'] });
    },
  });

  const handleDelete = async (id: number) => {
    await deleteMutation.mutateAsync(id);
  };

  return {
    handleDelete,
    isLoading: deleteMutation.isLoading,
    isError: deleteMutation.isError,
  };
};