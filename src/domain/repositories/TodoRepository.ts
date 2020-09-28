import { Todo } from "../entities/Todo";

export interface TodoRepository {
  GetTodo(): Todo[];
  CreateTodo(data: Todo): Todo[];
  UpdateTodo(data: any): Todo[];
  DeleteTodo(data: Todo): Todo[];
}
