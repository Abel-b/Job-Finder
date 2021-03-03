import React, { Component } from "react";
import { JobsEdit } from "../JobsEdit";

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin Page</h1>
        <JobsEdit />
      </div>
    );
  }
}

export default Admin;
