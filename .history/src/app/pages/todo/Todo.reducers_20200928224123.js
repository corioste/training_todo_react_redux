import { READ_TODO } from "./Todo.types"

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
    }

    return state;

}

export default todos;