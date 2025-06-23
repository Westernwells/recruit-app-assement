import axios from "axios";
import { ToDoItem } from "@/app/api/to-do-items/route";

/** Fetches the to-do items array */
export async function fetchToDoItems(): Promise<ToDoItem[]> {
  const res = await axios.get<ToDoItem[]>("/api/to-do-items");
  return res.data;
}