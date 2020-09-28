import { LOAD_TODO } from "./Todo.types"

const initialState = {
    todos: [],
}

function todos(state = initialState , action = null){
  
    if(action.type == LOAD_TODO){
        return {
            ...state,
            action.payload
        }
    }

}