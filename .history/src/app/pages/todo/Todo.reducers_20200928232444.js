import { READ_TODO,CREATE_TODO,DELETE_TODO,UPDATE_TODO } from "./Todo.types"

const initialState = {
    todos: [],
}

function todos(state = initialState , action = null){
  
    switch (action.type) {
        
        case READ_TODO:
        case CREATE_TODO:
        case DELETE_TODO:
        case UPDATE_TODO:
        console.log(action.type)
        return {
            ...state,
            todos: action.payload
        }
    


        default:
            return state
    }

   

}

export default todos;