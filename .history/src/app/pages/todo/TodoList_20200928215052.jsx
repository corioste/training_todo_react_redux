import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadTodo } from "./Todo.action";


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            isDone: false
        }


    }
    componentDidUpdate() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="parent">
                <div>
                    <input ></input>
                    <button onClick={loadTodo}>Create Task</button>
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
                               <tr>
                                   <td>{todos.isDone}</td>
                                   <td>{todos.task}</td>
                                   <td>{todos.isDone}</td>
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
    return state.todos;
}



export default connect(mapStateToProps, { loadTodo })(TodoList);

