import { READ_TODO,CREATE_TODO,DELETE_TODO,UPDATE_TODO } from "./Todo.types"

const initialState = {
    todos: [],
}

function todos(state = initialState , action = null){
  
    switch (action.type) {
        
        case READ_TODO:
        case READ_TODO:
        case READ_TODO:
        case READ_TODO:
        return {
            ...state,
            todos: action.payload
        }
    


        default:
            return state
    }

   

}

export default todos;