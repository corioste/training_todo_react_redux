import { READ_TODO, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './Todo.types';
import { TodoServiceImpl} from '../../../domain/usecases/TodoService';
import { TodoRepositoryImp } from '../../../data/repositories/TodoRepository';
import { ItemServiceImpl } from "../../../domain/usecases/ItemService"
import { ItemRepositoryImpl } from "../../../data/repositories/ItemRepositoryImpl"

export const loadTodo = () => {

    const todoRepo = new TodoRepositoryImp();
    // const todoService = new TodoServiceImpl(todoRepo);
    // const todos = todoService.READ_TODO() 
    return {
        type: READ_TODO,
        payload: []
    }
}