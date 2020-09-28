import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export interface TodoService {
    GetTodo(): Todo[];
}

export class TodoServiceImplements implements TodoService {
  todoRepo: TodoRepository;

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo;
  }

  async GetItems(): Promise<Item[]> {
    return this.itemRepo.GetItems();
  }
}
