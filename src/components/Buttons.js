import React, { Component } from "react";
import Drawer from "react-drag-drawer";
import ReactDOM from "react-dom";
import { Jobs } from "../Jobs";


class Buttons extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    
    toggle = () => {
        let { toggle } = this.state;
        this.setState({ open: !this.state.open });
    };
        
    render() {
        const { open } = this.state;
      return (
          <div>
        {" "}
        <button onClick={this.toggle}>Learn more</button>
        <Drawer
          open={this.state.open}
          onRequestClose={this.toggle}
          onDrag={() => {}}
          onOpen={() => {}}
          allowClose={true}
          modalElementClass="modal"
          containerElementClass="my-shade"
          parentElement={document.body} // element to be appended to
          direction="bottom"
        >
          <div className="info">
              <h2>Requirements</h2>
              <p>
                  {this.props.req}
              </p>
              <h2>Tasks</h2>
              <p>
                  {this.props.task}
              </p>
              </div>
        </Drawer>
      </div>
    );
  }
}
export default Buttons;
