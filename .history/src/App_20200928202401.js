import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import { TodoList } from './app/pages/todo/TodoList'
import { Todo } from './app/pages/todo/todo.reducer'

// Setup Redux store with Thunks
const reducers = combineReducers({ Todo })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
        <TodoList />
    </Provider>
)
