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
  CreateTodo(data:Todo) {
   
    this.todoRepo.CreateTodo(data);  
  }

  DeleteTodo(data:Todo){
    this.TodoRepo.DeleteTodo(data);
  }
  async UpdateTodo(data:Todo){
    this.TodoRepo.UpdateTodo(data)
  }
}
