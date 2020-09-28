import { READ_TODO, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './Todo.types';
import { TodoServiceImpl} from '../../../domain/usecases/TodoService';
import { TodoRepositoryImpl } from '../../../data/repositories/TodoRepositoryImpl';

export const loadTodo = () => {

    const todoRepo = new TodoRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    const todos = todoService.GetTodo()
    return {
        type: READ_TODO,
        payload: todos
    }
}

export const createTodo = (data) => {

    const todoRepo = new TodoRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    const todos = todoService.CreateTodo(data)
    console.log(todos)
    console.log("ACTION")
    return {
        type: CREATE_TODO,
        payload: todos
    }
}