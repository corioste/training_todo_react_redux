import { READ_TODO, CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './Todo.types'

export const loadTodo = () => {
    return {
        type: READ_TODO,
        payload:[]
    }
}