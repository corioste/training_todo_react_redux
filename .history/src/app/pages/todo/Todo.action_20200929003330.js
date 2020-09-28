import { READ_TODO, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './Todo.types';
import { TodoServiceImpl} from '../../../domain/usecases/TodoService';
import { TodoLocalStorageRepositoryImpl } from '../../../data/repositories/TodoLocalStorageRepository';

export const loadTodo = () => {

    const todoRepo = new TodoLocalStorageRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    const todos = todoService.GetTodo()
    return {
        type: READ_TODO,
        payload: todos
    }
}

export const createTodo = (data) => {

    const todoRepo = new TodoLocalStorageRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    const todos = todoService.CreateTodo(data)
    
    return {
        type: CREATE_TODO,
        payload: todos
    }
}

export const deleteTodo = (data) => {

    const todoRepo = new TodoLocalStorageRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    const todos = todoService.DeleteTodo(data)
    
    return {
        type: DELETE_TODO,
        payload: todos
    }
}

export const updateTodo = (data) => {

    const todoRepo = new TodoLocalStorageRepositoryImpl();
    const todoService = new TodoServiceImpl(todoRepo);
    const todos = todoService.UpdateTodo(data)
    
    return {
        type: UPDATE_TODO,
        payload: todos
    }
}