import React, { Component } from 'react';
import { connect } from "react-redux";


class TodoList extends Component {

    render(){
        return(
            <div className="parent">
                <div>
                    <input ></input>
                    <button>Add Todo</button>
                </div>
            </div>
        );
    }
}



export default TodoList;
  
