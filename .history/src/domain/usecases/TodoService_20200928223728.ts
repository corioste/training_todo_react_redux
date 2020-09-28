import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/TodoRepository";

export interface TodoService {
    GetTodo(): Todo[];
}

export class TodoServiceImpl implements TodoService {
  todoRepo: TodoRepository;

  constructor(todoRepo: TodoRepository) {
    this.todoRepo = todoRepo;
  }
  
  GetTodo(): Todo[] {
    return this.todoRepo.GetTodo();
  }
}
