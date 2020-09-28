import { Todo } from "../entities/Todo";

export interface TodoRepository {
  LoadTodo(): Todo[];
}
