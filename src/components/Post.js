import React, { Component } from "react";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Successfully submitted" + this.state.value);
  }

  render() {
    return (
      <div>
        <h1>Post a Job</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="grid-container">
            <div className="grid-item">
              <input type="text" name="name" placeholder="Name"/>
              </div>
            <div className="grid-item">
              <input type="text" name="title" placeholder="Job Title"/>
            </div>
          </div>
          <br/>
          <div className="grid-container">
            <div className="grid-item">
              <input type="text" name="city" placeholder="City"/>
            </div>
            <div className="grid-item">
              <input type="text" name="employer" placeholder="Company Name"/>
          </div>
          </div>
            <div className="grid-item1">
              <textarea type="text" name="requirements "placeholder="Requirements"/>
              <textarea type="text" name="tasks" placeholder="Tasks"/>
          </div>

          <button value="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Post;
