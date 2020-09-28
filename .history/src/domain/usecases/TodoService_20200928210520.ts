import { Todo } from "../entities/Todo";
import { TodoRepository } from "../repositories/ItemRepository";

export interface ItemService {
  GetItems(): Promise<Item[]>;
}

export class ItemServiceImpl implements ItemService {
  itemRepo: ItemRepository;

  constructor(ir: ItemRepository) {
    this.itemRepo = ir;
  }

  async GetItems(): Promise<Item[]> {
    return this.itemRepo.GetItems();
  }
}
