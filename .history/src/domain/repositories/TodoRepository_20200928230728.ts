import { Todo } from "../entities/Todo";

export interface TodoRepository {
  GetTodo(): Todo[];
  CreateTodo(data: Todo): Todo[];
  UpdateTodo(data: Todo): void;
  DeleteTodo(data: Todo): void;
}
