import React from "react"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"


// Setup Redux store with Thunks
const reducers = combineReducers({ items })
const store = createStore(reducers, applyMiddleware(thunk))

const App = () => (
    <Provider store={store}>
      
    </Provider>
)

export default App
