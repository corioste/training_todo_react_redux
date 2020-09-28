import React, { Component } from 'react';
import { connect } from "react-redux";
import { loadTodo } from "./Todo.action";


class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isUpdated:false,
            inputText: "",
            isDone: false
        }
        this.props.loadTodo()


    }
    componentDidUpdate() {
        console.log(this.props.todos)
    }
    addTodoClick(){
        this.setState({
            isUpdated: true
        })
    }
    render() {
        return (
            <div className="parent">
                <div>
                    <input ></input>
                    <button onClick={()=>this.addTodoClick()}>Create Task</button>
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
                                   <td>{todos.isDone?"✓":""}</td>
                                   <td>{todos.task}</td>
                                   <td><button>DELETE</button><button>UPDATE</button></td>
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



export default connect(mapStateToProps, { loadTodo })(TodoList);

