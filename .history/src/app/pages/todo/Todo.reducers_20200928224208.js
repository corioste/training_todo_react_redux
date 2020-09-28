import { READ_TODO,CREATE_TODO } from "./Todo.types"

const initialState = {
    todos: [],
}

function todos(state = initialState , action = null){
  
    switch (action.type) {
        
        case READ_TODO:
        return {
            ...state,
            todos: action.payload
        }
        case CREATE_TODO

        default:
            return state
    }

   

}

export default todos;