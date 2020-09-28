import React, { Component } from 'react';
import { connect } from "react-redux";


class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputText: "",
            isDone: false
        }

    }

    render(){
        return(
            <div className="parent">
                <div>
                    <input ></input>
                    <button>Create Task</button>
                </div>
                <br></br>
                <div>
                    <table border="1">
                        <tr>
                            <th>CHECK</th>
                            <th>TASK</th>
                            <th>ACTION</th>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}



export default connect()(TodoList);
  
