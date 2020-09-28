import { Todo } from "../entities/Todo";

export interface TodoRepository {
  GetTodo(): Todo[];
  CreateTodo(data: Todo): void;
  UpdateTodo(data: Todo)
}
