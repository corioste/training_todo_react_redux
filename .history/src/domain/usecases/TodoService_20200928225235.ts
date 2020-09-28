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
  async CreateTodo(data:Todo) {
   
    this.TodoRepo.AddTodo(data);  
  }

  async DeleteTodo(data:Todo){
    this.TodoRepo.DeleteTodo(data);
  }
  async UpdateTodo(data:Todo){
    this.TodoRepo.UpdateTodo(data)
  }
}
