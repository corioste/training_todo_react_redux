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
  UpdateTodo(data:any): Todo[]{
    var isDone = data.isDone;
    if(data.btnName === "CHECK")
    data = {
      id:data.id,
      task: data.task,
      isDone: isDone
    }
    return this.todoRepo.UpdateTodo(data)
  }
}
