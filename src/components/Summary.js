import React, { Component } from "react";
import "./Summary.css";

class Summary extends Component {
  render() {
    return (
      <>
        <div className="summary">
          <p>{this.props.data.description}</p>
        </div>
      </>
    );
  }
}

export default Summary;
