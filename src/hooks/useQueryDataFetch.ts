import { useQuery } from '@tanstack/react-query';
import {
  getTodoListQueryFns,
  getTodohistoryFns,
} from '../utils/queryFns/todoListQueryFns';
import { TodoData } from '../types/todolistType';

// 커스텀 훅 1
const useTodoListData = (selectedDate: string) => {
  return useQuery<TodoData[]>({
    queryKey: ['todolist', selectedDate],
    queryFn: () => getTodoListQueryFns(selectedDate),
    initialData:[],
  });
};

// 커스텀 훅 2
const useHistoryData = (moveMonth: string) => {
  return useQuery({
    queryKey: ['todoHistory', moveMonth],
    queryFn: () => getTodohistoryFns(moveMonth),
    initialData:[],
  });
};

// 하나로 통합된 커스텀 훅
export const useCombinedDataFetch = (
  selectedDate: string,
  moveMonth: string
) => {
  const {data: todoListData} = useTodoListData(selectedDate);
  const {data: historyData} = useHistoryData(moveMonth);
  return { todoListData, historyData };
};
