import React, { Component, Fragment } from "react";
import Drawer from "react-drag-drawer";
import ReactDOM from "react-dom";
import { Jobs } from "../Jobs";


class Deletes extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }


    handleDelete = () => {
        alert("Button Clicked");
      };
    
    render() {
        return(
            <div>
            <Fragment
                onDelete={this.handleDelete} remove={this.handleDelete}>Delete
            </Fragment>
            </div>
        );
    }
};
export default Deletes;
