import { useQuery } from '@tanstack/react-query';
import {
  getTodoListQueryFns,
  getTodohistoryFns,
} from '../utils/queryFns/todoListQueryFns';
import { TodoData } from '../types/todolistType';
type TodoHistory = {
  id: number;
  count: number;
  completedCount: number;
  step: number;
  dueDate: string;
};

// 예시 커스텀 훅 1
const useTodoListData = (selectedDate: string) => {

  return useQuery<TodoData[]>({
    queryKey: ['todolist', selectedDate],
    queryFn: () => getTodoListQueryFns(selectedDate),
  });
};

// 예시 커스텀 훅 2
const useHistoryData = (moveMonth: string) => {
  console.log('커스텀 훅'+ moveMonth);
  return useQuery({
    queryKey: ['todoHistory', moveMonth],
    queryFn: () => getTodohistoryFns(moveMonth),
  });
};

// 하나로 통합된 커스텀 훅
export const useCombinedDataFetch = (
  selectedDate: string,
  moveMonth: string
) => {
  const {data: todoListData} = useTodoListData(selectedDate);
  const {data: historyData} = useHistoryData(moveMonth);
  console.log('통합 훅'+ moveMonth)
  console.log(historyData);

  return { todoListData, historyData };
};
