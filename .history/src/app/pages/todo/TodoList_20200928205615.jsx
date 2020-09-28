import React, { Component } from 'react';
import { connect } from "react-redux";


class TodoList extends Component {

    render(){
        return(
            <div className="parent">
                <div>
                    <input ></input>
                    <button>Create Task</button>
                </div>
                <div>
                    <table>
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



export default TodoList;
  
