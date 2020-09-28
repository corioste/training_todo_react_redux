import { READ_TODO } from "./Todo.types"

const initialState = {
    todos: [],
}

function todos(state = initialState , action = null){
  
    if(action.type == READ_TODO){
        console.log("REDUCERS")
        return {
            ...state,
            toddos: action.payload
        }
    }

    return state;

}

export default todos;