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
   
    this.todoRepo.CreateTodo(data);  
  }

  DeleteTodo(data:Todo){
    this.todoRepo.DeleteTodo(data);
  }
  async UpdateTodo(data:Todo){
    this.todoRepo.UpdateTodo(data)
  }
}
