import { READ_TODO, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './Todo.types'
import { TodoServiceImpl} from '../../../domain/usecases/TodoService'

export const loadTodo = () => {

    return {
        type: READ_TODO,
        payload:[]
    }
}