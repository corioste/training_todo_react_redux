import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

class TodoDTO {
    id: number = 0;
    task: string = "";
    isDone: boolean = false;
  }

  let todoList: Todo[] = []
  
  export class TodoRepositoryImpl implements TodoRepository {
  
    GetItems(): Promise<Item[]> {
      const res = await fetch(this.jsonUrl);
      const jsonData = await res.json();
      return jsonData.map((item: ItemDTO) => new Item(item.id, item.name));
    }
  }
  