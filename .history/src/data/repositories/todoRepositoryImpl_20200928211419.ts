import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

class TodoDTO {
    id: number = 0;
    task: string = "";
    isDone: boolean = false;
  }

  let todoList: Todo[] = []
  
  export class TodoRepositoryImpl implements TodoRepository {
  
    GetItems(): Todo[] {
     
      return todoList.map((Todo: TodoDTO) => new Todo(item.id, item.name));
    }
  }
  