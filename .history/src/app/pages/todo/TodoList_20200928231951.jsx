import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadTodo,createTodo,deleteTodo } from "./Todo.action";


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUpdated: false,
            inputText: "",
            isDone: false
        }
        this.props.loadTodo()


    }
    //CRUD OPERATIONS
    addTodoClick() {
        var data = {
            id: new Date().getUTCMilliseconds(),
            task: this.state.inputText,
            isDone: this.state.isDone
        }
        this.props.createTodo(data)
    }
    deleteTodoClick(id){
        var data = {id:id}
    }

    inputChange = event => {
        this.setState({ inputText: event.target.value });
    }
    render() {
        return (
            <div className="parent">
                <div>
                    <input
                        type="text"
                        id="text"
                        value={this.text}
                        onChange={this.inputChange}
                    ></input>
                    <button onClick={() => this.addTodoClick()}>Create Task</button>
                </div>
                <br></br>
                <div>
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>CHECK</th>
                                <th>TASK</th>
                                <th>ACTION</th>
                            </tr>
                        </tbody>
                        <tbody>
                            {this.props.todos.map(todos => (
                                <tr key={todos.id}>
                                    <td>{todos.isDone ? "✓" : ""}</td>
                                    <td>{todos.task}</td>
                                    <td><button onClick={}>DELETE</button>
                                        <button>UPDATE</button>
                                        <button>COMPLETED</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.todos
}



export default connect(mapStateToProps, { loadTodo,createTodo,deleteTodo })(TodoList);

