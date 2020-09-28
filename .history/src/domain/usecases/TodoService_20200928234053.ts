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
  CreateTodo(data:Todo): Todo[] {
    return this.todoRepo.CreateTodo(data);  
  }

  DeleteTodo(data:Todo): Todo[]{
    return this.todoRepo.DeleteTodo(data);
  }
  UpdateTodo(data:Todo): Todo[]{
    console.log(data)
    return this.todoRepo.UpdateTodo(data)
  }
}
