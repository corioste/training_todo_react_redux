import { Todo } from "../../domain/entities/Todo";
import { TodoRepository } from "../../domain/repositories/TodoRepository";

class TodoDTO {
    id: number = 0;
    task: string = "";
  }
  
  export class ItemRepositoryImpl implements ItemRepository {
    jsonUrl =
      "https://gist.githubusercontent.com/janithl/6bfbd787a0361c170ac760e8fb5ba0fd/raw/a0ffacb7c0fc21a0266371f632cf4107f80362f4/itemlist.json";
  
    async GetItems(): Promise<Item[]> {
      const res = await fetch(this.jsonUrl);
      const jsonData = await res.json();
      return jsonData.map((item: ItemDTO) => new Item(item.id, item.name));
    }
  }
  