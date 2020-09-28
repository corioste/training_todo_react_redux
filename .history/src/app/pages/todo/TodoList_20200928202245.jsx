import React, { Component } from 'react';
import { connect } from "react-redux";


class TodoList extends Component {

    render(){

        return(
            <div className="parent">
                <div>
                    "HELLO WORLD"
                </div>
            </div>
        )
    }
}

export default connect(null, TodoList);
  