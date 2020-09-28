import { LOAD_TODO, ADD_TODO, DELETE_TODO, UPDATE_TODO } from './Todo.types'

export const loadTodo = () => {
    return {
        type: LOAD_TODO,
        payload:{
            name:1,
            id: 1,
            isCompleted: false
        }
    }
}