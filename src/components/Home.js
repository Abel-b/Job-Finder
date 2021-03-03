import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Jobs } from "../Jobs";
import { jobData } from "../data";
import logo from "../logo1.svg";
import App from "../App";

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }   

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

  render() {
    return (
      <div>
        <h1>Welcome to your next job</h1>
        <div className="landing">
          <div>
            <Jobs/>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
