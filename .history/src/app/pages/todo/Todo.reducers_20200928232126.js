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
        case CREATE_TODO:
            console.log("CREATE_TODO")
        return {
            ...state,
            todos: action.payload
        }
        case DELTET_TODO:
            console.log("DELETE_TODO")
        return {
            ...state,
            todos: action.payload
        }


        default:
            return state
    }

   

}

export default todos;