import { useQuery, UseQueryResult } from "react-query";
import { ToDoItem } from "@/app/api/to-do-items/route";
import { fetchToDoItems } from "../api/todoItems";

export function useToDoItems(): UseQueryResult<ToDoItem[], unknown> {
  return useQuery<ToDoItem[], unknown>({
    queryKey: ["to-do-items"],
    queryFn: fetchToDoItems,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}