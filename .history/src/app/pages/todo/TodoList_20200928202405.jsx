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


const mapStateToProps = state => ({
    items: state.items.items
  });
  
  const mapDispatchToProps = dispatch => ({
    refreshList: () => dispatch(refreshList)
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ItemList);
  
